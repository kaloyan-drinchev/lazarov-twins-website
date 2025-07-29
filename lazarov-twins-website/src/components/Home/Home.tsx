import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ProgramCard from '../ProgramCard/ProgramCard';
import { useTrainingPrograms } from '../../hooks/useTrainingPrograms';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAppSectionVisible, setIsAppSectionVisible] = useState(false);
  const { programs: trainingPrograms, loading, error } = useTrainingPrograms();
  const sectionRef = useRef<HTMLElement>(null);
  const appSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation is triggered
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAppSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (appSectionRef.current) {
      observer.observe(appSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Get top 5 best-selling programs
  const bestSellingPrograms = trainingPrograms
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, 5);

  return (
    <div className="home-page">
      <div className="home-page__overlay-content">
        <h1 className="home-page__title">Welcome to L-Twins Fitness</h1>
        <Link to="/training-programs" className="home-page__button">
          View Programs
        </Link>
      </div>
      <video
        className="home-page__video"
        src={'/src/assets/home-page-video.mov'}
        autoPlay
        loop
        muted
        playsInline
      />

      <section className="home-best-selling" ref={sectionRef}>
        <div className="home-best-selling-container">
          <h2 className="home-best-selling-title">Best Selling Programs</h2>
          <div
            className={`home-best-selling-grid ${
              isVisible ? 'animate-in' : ''
            }`}
          >
            {loading ? (
              <p>Loading programs...</p>
            ) : error ? (
              <p>Error loading programs: {error}</p>
            ) : (
              bestSellingPrograms.map((program) => (
                <ProgramCard
                  key={program.id}
                  program={program}
                  className="home-program-card"
                />
              ))
            )}
          </div>
          <Link to="/training-programs" className="home-view-all-button">
            View All Programs
          </Link>
        </div>
      </section>

      <section className="home-app-download" ref={appSectionRef}>
        <div className="home-app-download-container">
          <div
            className={`home-app-download-content ${
              isAppSectionVisible ? 'animate-in' : ''
            }`}
          >
            <h2 className="home-app-download-title">
              Take L-Twins Fitness With You
            </h2>
            <p className="home-app-download-description">
              Download our mobile app for the ultimate fitness experience. Track
              your workouts, access programs offline, and stay motivated
              wherever you are.
            </p>

            <div className="home-app-download-features">
              <div className="feature-item">
                <span className="feature-icon">📱</span>
                <span className="feature-text">Offline Access</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <span className="feature-text">Progress Tracking</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔔</span>
                <span className="feature-text">Smart Reminders</span>
              </div>
            </div>

            <div className="home-app-download-buttons">
              <a
                href="#"
                className="app-download-btn app-download-btn-android"
                onClick={(e) => e.preventDefault()}
              >
                <div className="app-btn-content">
                  <div className="app-btn-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="app-btn-text">
                    <span className="app-btn-subtitle">Get it on</span>
                    <span className="app-btn-title">Google Play</span>
                  </div>
                </div>
              </a>

              <a
                href="#"
                className="app-download-btn app-download-btn-ios"
                onClick={(e) => e.preventDefault()}
              >
                <div className="app-btn-content">
                  <div className="app-btn-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div className="app-btn-text">
                    <span className="app-btn-subtitle">Download on the</span>
                    <span className="app-btn-title">App Store</span>
                  </div>
                </div>
              </a>
            </div>

            <p className="home-app-download-note">
              Coming Soon! Sign up for early access notifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
