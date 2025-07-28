import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from '../StripeCheckout/StripeCheckout';
import './Checkout.css';

const Checkout: React.FC = () => {
  const { items, getCartTotal } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'billing' | 'payment'>('billing');
  const [paymentError, setPaymentError] = useState<string>('');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  if (items.length === 0) {
    return (
      <div className="checkout-container">
        <div className="checkout-content">
          <h2>Checkout</h2>
          <div className="empty-checkout">
            <p>Your cart is empty</p>
            <button onClick={() => navigate('/training-programs')} className="continue-shopping-btn">
              Browse Training Programs
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBillingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['email', 'firstName', 'lastName', 'address', 'city', 'zipCode', 'country'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      setPaymentError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    setPaymentError('');
    setStep('payment');
  };

  const handlePaymentError = (error: string) => {
    setPaymentError(error);
  };

  const handleBackToBilling = () => {
    setStep('billing');
    setPaymentError('');
  };

  return (
    <div className="checkout-container">
      <div className="checkout-content">
        <div className="checkout-header">
          <h2>Checkout</h2>
          <div className="checkout-steps">
            <div className={`step ${step === 'billing' ? 'active' : step === 'payment' ? 'completed' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Billing</span>
            </div>
            <div className={`step ${step === 'payment' ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Payment</span>
            </div>
          </div>
        </div>

        <div className="checkout-layout">
          {step === 'billing' && (
            <div className="billing-form">
              <h3>Billing Information</h3>
              <form onSubmit={handleBillingSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">City *</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="zipCode">ZIP Code *</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="country">Country *</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="IT">Italy</option>
                    <option value="ES">Spain</option>
                    <option value="NL">Netherlands</option>
                    <option value="SE">Sweden</option>
                    <option value="NO">Norway</option>
                    <option value="DK">Denmark</option>
                  </select>
                </div>

                {paymentError && (
                  <div className="error-message">
                    {paymentError}
                  </div>
                )}

                <div className="form-actions">
                  <button type="button" onClick={() => navigate('/cart')} className="back-to-cart-btn">
                    ← Back to Cart
                  </button>
                  <button type="submit" className="continue-btn">
                    Continue to Payment →
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 'payment' && (
            <div className="payment-section">
              <div className="payment-header">
                <button onClick={handleBackToBilling} className="back-to-billing-btn">
                  ← Back to Billing
                </button>
                <h3>Secure Payment</h3>
              </div>

              {paymentError && (
                <div className="payment-error">
                  {paymentError}
                </div>
              )}

              <StripeCheckout
                customerInfo={formData}
                onError={handlePaymentError}
              />
            </div>
          )}

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {items.map((item) => (
                <div key={item.id} className="summary-item">
                  <span className="item-name">{item.title}</span>
                  <span className="item-quantity">×{item.quantity}</span>
                  <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <strong>Total: ${getCartTotal().toFixed(2)}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 