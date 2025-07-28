import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { TrainingProgram } from "../../types";
import StarRating from "../StarRating/StarRating";
import { useCart } from "../../contexts/CartContext";
import Toast from "../Toast/Toast";
import "./SingleProgramView.css";

// @ts-ignore
import trainingProgramsData from "../../data/trainingProgram";

const trainingPrograms: TrainingProgram[] = trainingProgramsData as TrainingProgram[];

const SingleProgramView: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const program = trainingPrograms.find(program => String(program.id) === String(id));
  
  if (!program) {
    return <div>Program not found</div>;
  }

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
          <StarRating rating={program.rating} />
          <p>{program.experienceLevel}</p>
          <p>{program.goal}</p>
          <p className="price">${program.price}</p>
          <p>{program.salesCount} sales</p>
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