/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { stripePromise } from '../../utils/stripe';
import { useCart } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import type { CartItem } from '../../types/interfaces';
import './StripeCheckout.css';

interface StripeCheckoutProps {
  customerInfo: {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    zipCode: string;
    country: string;
  };
  onError: (error: string) => void;
}

const StripeCheckout: React.FC<StripeCheckoutProps> = ({
  customerInfo,
  onError,
}) => {
  const { items, getCartTotal, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createCheckoutSession = async (
    items: CartItem[],
    customerInfo: any
  ) => {
    const sessionData = {
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.title,
            description: `${item.experienceLevel} - ${item.goal}`,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100), // Stripe uses cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      customer_email: customerInfo.email,
      success_url: `${window.location.origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${window.location.origin}/cart`,
      metadata: {
        customer_name: `${customerInfo.firstName} ${customerInfo.lastName}`,
        customer_address: customerInfo.address,
        customer_city: customerInfo.city,
        customer_zip: customerInfo.zipCode,
        customer_country: customerInfo.country,
      },
    };

    // API call to backend
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sessionData),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    return response.json();
  };

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      // Create checkout session
      const session = await createCheckoutSession(items, customerInfo);

      // Check if this is a real Stripe session with URL or demo session
      if (session.url && !session.id.startsWith('cs_demo_')) {
        // Real Stripe redirect
        const stripe = await stripePromise;

        if (!stripe) {
          throw new Error('Stripe failed to load');
        }

        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          throw new Error(error.message);
        }
      } else {
        // Demo mode - simulate successful payment
        console.log('Demo checkout session created:', session.id);

        // Simulate processing time
        setTimeout(() => {
          // Clear cart and navigate to success page
          clearCart();
          navigate(`/order-success?session_id=${session.id}`, {
            state: {
              orderData: {
                id: session.id,
                items: items,
                total: getCartTotal(),
                billing: customerInfo,
                date: new Date().toISOString(),
              },
              paymentResult: {
                id: 'pi_demo_12345',
                status: 'succeeded',
              },
            },
          });
        }, 2000);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unexpected error occurred';
      onError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="stripe-checkout">
      <div className="checkout-summary">
        <h3>Order Summary</h3>
        <div className="order-items">
          {items.map((item) => (
            <div key={item.id} className="order-item">
              <img
                src={item.image}
                alt={item.title}
                className="order-item-image"
              />
              <div className="order-item-details">
                <h4>{item.title}</h4>
                <p>
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
              </div>
              <div className="order-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        <div className="order-total">
          <h3>Total: ${getCartTotal().toFixed(2)}</h3>
        </div>
      </div>

      <div className="payment-info">
        <h3>🔒 Secure Payment with Stripe</h3>
        <p>Processing your payment securely...</p>

        <div className="customer-info">
          <h4>Billing Information</h4>
          <p>
            <strong>
              {customerInfo.firstName} {customerInfo.lastName}
            </strong>
          </p>
          <p>{customerInfo.email}</p>
          <p>{customerInfo.address}</p>
          <p>
            {customerInfo.city}, {customerInfo.zipCode}
          </p>
          <p>{customerInfo.country}</p>
        </div>
      </div>

      <button
        className="stripe-checkout-btn"
        onClick={handleCheckout}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className="spinner"></span>
            Processing Payment...
          </>
        ) : (
          <>🔐 Complete Payment - ${getCartTotal().toFixed(2)}</>
        )}
      </button>

      <div className="security-badges">
        <p>
          🔒 Secured by Stripe | 🛡️ PCI Compliant | 💳 All major cards accepted
        </p>
      </div>
    </div>
  );
};

export default StripeCheckout;
