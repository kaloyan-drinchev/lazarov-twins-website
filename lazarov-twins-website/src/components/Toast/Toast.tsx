import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Toast.css';

interface ToastProps {
  show: boolean;
  onClose: () => void;
  productTitle: string;
}

const Toast: React.FC<ToastProps> = ({ 
  show, 
  onClose, 
  productTitle
}) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      // Small delay for entrance animation
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [show]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  const handleViewCart = () => {
    handleClose();
    navigate('/cart');
  };

  const handleContinueShopping = () => {
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`toast-overlay ${isAnimating ? 'show' : ''}`}
        onClick={handleClose}
      />
      <div className={`toast ${isAnimating ? 'show' : ''}`}>
        <div className="toast-content">
          <div className="toast-header">
            <div className="toast-icon">
              <span className="checkmark">✓</span>
            </div>
            <h3>Added to Cart!</h3>
            <button 
              className="toast-close"
              onClick={handleClose}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          
          <div className="toast-body">
            <p className="toast-product">
              <strong>{productTitle}</strong> has been added to your cart.
            </p>
          </div>

          <div className="toast-actions">
            <button 
              className="toast-btn toast-btn-secondary"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button 
              className="toast-btn toast-btn-primary"
              onClick={handleViewCart}
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast; 