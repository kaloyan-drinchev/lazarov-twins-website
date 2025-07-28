import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast/Toast';
import './Cart.css';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();
  
  // Toast states
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null);
  const [itemNameToRemove, setItemNameToRemove] = useState<string>('');

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-content">
          <h2>Your Cart</h2>
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button onClick={() => navigate('/training-programs')} className="continue-shopping-btn">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      // Find the item name for confirmation
      const item = items.find(item => item.id === id);
      setItemToRemove(id);
      setItemNameToRemove(item?.title || 'item');
      setShowRemoveConfirm(true);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveClick = (id: number) => {
    const item = items.find(item => item.id === id);
    setItemToRemove(id);
    setItemNameToRemove(item?.title || 'item');
    setShowRemoveConfirm(true);
  };

  const handleClearCartClick = () => {
    setShowClearConfirm(true);
  };

  const confirmRemoveItem = () => {
    if (itemToRemove !== null) {
      removeFromCart(itemToRemove);
      setItemToRemove(null);
      setItemNameToRemove('');
    }
  };

  const confirmClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Your Cart ({items.length} {items.length === 1 ? 'item' : 'items'})</h2>
          <button onClick={handleClearCartClick} className="clear-cart-btn">
            Clear Cart
          </button>
        </div>

        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>

              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                
                <button 
                  onClick={() => handleRemoveClick(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>

              <div className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="cart-total">
            <h3>Total: ${getCartTotal().toFixed(2)}</h3>
          </div>
          
          <div className="cart-actions">
            <button onClick={() => navigate('/training-programs')} className="continue-shopping-btn">
              Continue Shopping
            </button>
            <button onClick={handleCheckout} className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Clear Cart Confirmation Toast */}
      <Toast
        show={showClearConfirm}
        onClose={() => setShowClearConfirm(false)}
        type="confirmation"
        title="Clear Cart"
        message={`Are you sure you want to remove all items from your cart?`}
        onConfirm={confirmClearCart}
        confirmText="Yes, Clear All"
        cancelText="Keep Items"
      />

      {/* Remove Item Confirmation Toast */}
      <Toast
        show={showRemoveConfirm}
        onClose={() => {
          setShowRemoveConfirm(false);
          setItemToRemove(null);
          setItemNameToRemove('');
        }}
        type="confirmation"
        title="Remove Item"
        message={`Are you sure you want to remove "${itemNameToRemove}" from your cart?`}
        onConfirm={confirmRemoveItem}
        confirmText="Yes, Remove"
        cancelText="Keep Item"
      />
    </div>
  );
};

export default Cart; 