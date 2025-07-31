/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import './OrderSuccess.css';

interface StripeSession {
  id: string;
  customer_email: string;
  amount_total: number;
  payment_status: string;
  metadata?: {
    customer_name?: string;
    customer_address?: string;
  };
}

const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { clearCart } = useCart();
  const [sessionData, setSessionData] = useState<StripeSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get session_id from URL parameters
  const urlParams = new URLSearchParams(location.search);
  const sessionId = urlParams.get('session_id');

  // Get order data from location state (fallback)
  const { orderData, paymentResult } = location.state || {};

  useEffect(() => {
    const fetchSessionData = async () => {
      if (sessionId) {
        try {
          const response = await fetch(`/api/checkout-session/${sessionId}`);
          if (response.ok) {
            const session = await response.json();
            setSessionData(session);

            // Clear cart after successful payment
            clearCart();
          } else {
            console.error('Failed to fetch session data');
          }
        } catch (error) {
          console.error('Error fetching session data:', error);
        }
      }
      setIsLoading(false);
    };

    fetchSessionData();
  }, [sessionId]);

  const handleDownload = (programTitle: string, programId?: number) => {
    // Map program titles/IDs to PDF filenames
    const pdfMapping: { [key: string]: string } = {
      "Beginner's Full-Body Foundation":
        'program-1-beginner-s-full-body-foundation.html',
      'Intermediate Strength Focus: Powerlifting Basics':
        'program-2-intermediate-strength-focus--powerlifting-basics.html',
      'Advanced Muscle Building: High Volume Training':
        'program-3-advanced-muscle-building--high-volume-training.html',
      'Beginner Strength & Size: Best of Both Worlds':
        'program-4-beginner-strength---size--best-of-both-worlds.html',
      'Intermediate Muscle Building: Progressive Overload Focus':
        'program-5-intermediate-muscle-building--progressive-overload-focus.html',
      'Advanced Powerlifting: Competition Prep':
        'program-6-advanced-powerlifting--competition-prep.html',
      'Intermediate Strength & Muscle: Dual Phase Training':
        'program-7-intermediate-strength---muscle--dual-phase-training.html',
      'Advanced Functional Strength & Aesthetics':
        'program-8-advanced-functional-strength---aesthetics.html',
      'Beginner Muscle Building: Volume & Consistency':
        'program-9-beginner-muscle-building--volume---consistency.html',
      'Starting Strength: The Foundational Program':
        'program-10-starting-strength--the-foundational-program.html',
    };

    // Get PDF filename
    let pdfFileName = pdfMapping[programTitle];

    // Fallback: if we have program ID, construct filename
    if (!pdfFileName && programId) {
      pdfFileName = `program-${programId}-${programTitle
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')}.html`;
    }

    if (pdfFileName) {
      // Create download link
      const pdfUrl = `/pdfs/${pdfFileName}`;
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = `${programTitle}.html`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert(`PDF not found for: ${programTitle}`);
    }
  };

  const getOrderItems = () => {
    if (orderData?.items) {
      return orderData.items;
    }

    // Mock items if we don't have order data but have session
    if (sessionData) {
      return [
        {
          id: 1,
          title: 'Premium Training Program',
          price: sessionData.amount_total / 100, // Convert from cents
        },
      ];
    }

    return [];
  };

  if (isLoading) {
    return (
      <div className="order-success-container">
        <div className="order-success-content">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Processing your order...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-success-container">
      <div className="order-success-content">
        {/* Success Header */}
        <div className="success-header">
          <div className="success-icon">
            <span className="checkmark">✓</span>
          </div>
          <h1>Payment Successful!</h1>
          <p className="success-message">
            Thank you for your purchase. Your order has been confirmed and
            you'll receive an email confirmation shortly.
          </p>
        </div>

        {/* Order Details */}
        {(sessionData || orderData) && (
          <div className="order-details">
            <h2>Order Details</h2>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Order ID:</span>
                <span className="detail-value">
                  {sessionData?.id || orderData?.id || 'N/A'}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">
                  {sessionData?.customer_email ||
                    orderData?.billing?.email ||
                    'N/A'}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Amount Paid:</span>
                <span className="detail-value">
                  $
                  {sessionData
                    ? (sessionData.amount_total / 100).toFixed(2)
                    : orderData?.total?.toFixed(2) || '0.00'}
                </span>
              </div>

              <div className="detail-item">
                <span className="detail-label">Payment Status:</span>
                <span className="detail-value status-paid">
                  {sessionData?.payment_status ||
                    paymentResult?.status ||
                    'Paid'}
                </span>
              </div>

              {(sessionData?.metadata?.customer_name || orderData?.billing) && (
                <div className="detail-item">
                  <span className="detail-label">Billing Name:</span>
                  <span className="detail-value">
                    {sessionData?.metadata?.customer_name ||
                      `${orderData?.billing?.firstName} ${orderData?.billing?.lastName}`}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Download Section */}
        <div className="download-section">
          <h2>Your Training Programs</h2>
          <p>Your digital content is ready for download:</p>

          <div className="download-items">
            {getOrderItems().length > 0 ? (
              getOrderItems().map((item: any, index: number) => (
                <div key={item.id || index} className="download-item">
                  <div className="download-info">
                    <h3>{item.title}</h3>
                    <p>Digital Training Program</p>
                  </div>
                  <button
                    className="download-btn"
                    onClick={() => handleDownload(item.title)}
                  >
                    📥 Download
                  </button>
                </div>
              ))
            ) : (
              // Fallback downloads
              <>
                <div className="download-item">
                  <div className="download-info">
                    <h3>Premium Training Program</h3>
                    <p>Digital Training Program</p>
                  </div>
                  <button
                    className="download-btn"
                    onClick={() => handleDownload('Premium Training Program')}
                  >
                    📥 Download
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Next Steps */}
        <div className="next-steps">
          <h2>What's Next?</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Check Your Email</h3>
                <p>
                  You'll receive a confirmation email with your receipt and
                  download links.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Download Your Programs</h3>
                <p>
                  Access your training programs using the download buttons
                  above.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Start Training</h3>
                <p>
                  Begin your fitness journey with your new training programs!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="success-actions">
          <button
            onClick={() => navigate('/training-programs')}
            className="browse-more-btn"
          >
            Browse More Programs
          </button>
          <button onClick={() => navigate('/')} className="home-btn">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
