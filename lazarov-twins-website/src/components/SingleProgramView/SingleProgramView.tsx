import { useParams } from 'react-router-dom';
import { useState } from 'react';
import StarRating from '../StarRating/StarRating';
import { useCart } from '../../contexts/CartContext';
import Toast from '../Toast/Toast';
import {
  calculateAverageRating,
  getTotalRatings,
  formatAverageRating,
} from '../../utils/ratingUtils';
import { useTrainingProgram } from '../../hooks/useTrainingPrograms';
import './SingleProgramView.css';

const SingleProgramView: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Fetch single program from PostgreSQL
  const { program, loading, error } = useTrainingProgram(id || '');

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        Loading program...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>Error: {error}</div>
    );
  }

  if (!program) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        Program not found
      </div>
    );
  }

  // Calculate rating metrics
  const averageRating = calculateAverageRating(program.ratings);
  const totalReviews = getTotalRatings(program.ratings);
  const formattedRating = formatAverageRating(program.ratings);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(program);

    // Show success animation/feedback
    setTimeout(() => {
      setIsAdding(false);
      setShowToast(true);
    }, 500);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <div className="single-program-container">
      <div className="single-program-header">
        <img src={program.image} alt={program.title} />
        <div className="single-program-info">
          <h2>{program.title}</h2>
          <p>{program.body}</p>

          <div className="rating-section">
            <StarRating rating={averageRating} />
            <div className="rating-details">
              <span className="rating-number">{formattedRating}</span>
              <span className="rating-count">({totalReviews} reviews)</span>
            </div>
          </div>

          <p>
            <strong>Level:</strong> {program.experienceLevel}
          </p>
          <p>
            <strong>Goal:</strong> {program.goal}
          </p>
          <p className="price">${program.price}</p>
          <p className="sales-count">{program.salesCount} sales</p>

          <button
            className={`add-to-cart-btn ${isAdding ? 'adding' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? '✓ Added!' : '🛒 Add to Cart'}
          </button>
        </div>
      </div>

      <Toast
        show={showToast}
        onClose={handleCloseToast}
        productTitle={program.title}
      />
    </div>
  );
};

export default SingleProgramView;
