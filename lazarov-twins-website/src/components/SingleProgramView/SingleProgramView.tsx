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
import { getWeeklyBreakdown, getTestimonials } from '../../data/programData';
import './SingleProgramView.css';



const SingleProgramView: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeWeek, setActiveWeek] = useState<number | null>(null);

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

  // Get program details
  const weeklyBreakdown = getWeeklyBreakdown(id || '');
  const testimonials = getTestimonials(id || '');

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
      {/* Header Section */}
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

      {/* What's Inside Section */}
      <div className="program-section">
        <h3 className="section-title">📋 What's Inside</h3>
        <p className="section-subtitle">Week-by-week breakdown of your transformation journey</p>
        
        <div className="weeks-breakdown">
          {weeklyBreakdown.map((week) => (
            <div 
              key={week.week} 
              className={`week-card ${activeWeek === week.week ? 'active' : ''}`}
              onClick={() => setActiveWeek(activeWeek === week.week ? null : week.week)}
            >
              <div className="week-header">
                <div className="week-number">Week {week.week}</div>
                <h4 className="week-title">{week.title}</h4>
                <span className="week-toggle">{activeWeek === week.week ? '−' : '+'}</span>
              </div>
              
              {activeWeek === week.week && (
                <div className="week-details">
                  <p className="week-description">{week.description}</p>
                  <div className="week-focus">
                    <h5>Focus Areas:</h5>
                    <ul>
                      {week.focus.map((focus, index) => (
                        <li key={index}>{focus}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="program-section testimonials-section">
        <h3 className="section-title">🌟 Real Transformations</h3>
        <p className="section-subtitle">See the results our community has achieved</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="transformation-images">
                <div className="before-after">
                  <div className="image-container">
                    <img src={testimonial.beforeImage} alt="Before" />
                    <span className="image-label">Before</span>
                  </div>
                  <div className="transformation-arrow">→</div>
                  <div className="image-container">
                    <img src={testimonial.afterImage} alt="After" />
                    <span className="image-label">After</span>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <h4>{testimonial.name}</h4>
                  <span className="age-timeframe">Age {testimonial.age} • {testimonial.timeframe}</span>
                </div>
                
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="testimonial-results">
                  <h5>Results:</h5>
                  <ul>
                    {testimonial.results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing & CTA Section */}
      <div className="program-section pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <h3 className="section-title">🚀 Start Your Transformation Today</h3>
            <p className="pricing-subtitle">Join thousands who have transformed their physiques naturally</p>
          </div>
          
          <div className="pricing-card">
            <div className="price-display">
              <span className="currency">$</span>
              <span className="price-amount">{program.price}</span>
              <span className="price-period">one-time</span>
            </div>
            
            <div className="pricing-features">
              <h4>What You Get:</h4>
              <ul>
                <li>✅ Complete {weeklyBreakdown.length}-week training program</li>
                <li>✅ Week-by-week progression guide</li>
                <li>✅ Exercise video demonstrations</li>
                <li>✅ Recovery and nutrition protocols</li>
                <li>✅ DENSE methodology principles</li>
                <li>✅ Lifetime access to updates</li>
                <li>✅ Private community access</li>
                <li>✅ 30-day money-back guarantee</li>
              </ul>
            </div>
            
            <div className="pricing-stats">
              <div className="stat">
                <span className="stat-number">{program.salesCount}+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">{formattedRating}</span>
                <span className="stat-label">Average Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">30</span>
                <span className="stat-label">Day Guarantee</span>
              </div>
            </div>
            
            <button
              className={`pricing-cta-btn ${isAdding ? 'adding' : ''}`}
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? '✓ Added to Cart!' : '🚀 Get Instant Access'}
            </button>
            
            <p className="guarantee-text">
              💯 <strong>Proven Results:</strong> Join thousands who have transformed their physiques with our science-backed methods.
            </p>
          </div>
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
