import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">Meet the L Twins</h1>
          <p className="about-hero-subtitle">
            Twin brothers on a mission to revolutionize natural bodybuilding and transform lives through the power of discipline, nutrition, and smart training.
          </p>
        </div>
        <div className="about-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop&crop=center" 
            alt="L Twins - Lazar and Milan Lazarov" 
            className="hero-image"
          />
        </div>
      </section>

      {/* Twins Transformation Story */}
      <section className="about-section transformation-story">
        <div className="section-content">
          <h2 className="section-title">Our Transformation Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                Our journey began like many others - two brothers looking to improve their physiques and health. 
                What started as a personal challenge quickly evolved into something much greater.
              </p>
              <p>
                Through years of dedication, countless hours of research, and unwavering commitment to natural 
                bodybuilding principles, we discovered that true transformation goes beyond physical appearance. 
                It's about building mental resilience, establishing discipline, and creating sustainable habits 
                that last a lifetime.
              </p>
              <p>
                Today, we've not only achieved our own transformation goals but have helped thousands of others 
                begin their own journeys. Our story proves that with the right approach, anyone can achieve 
                extraordinary results naturally.
              </p>
            </div>
            <div className="story-images">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center" 
                alt="Before transformation" 
                className="story-image"
              />
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=200&fit=crop&crop=center" 
                alt="After transformation" 
                className="story-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Natural Bodybuilding Mission */}
      <section className="about-section mission-section">
        <div className="section-content">
          <h2 className="section-title">Our Natural Bodybuilding Mission</h2>
          <div className="mission-content">
            <div className="mission-points">
              <div className="mission-point">
                <div className="mission-icon">🏋️</div>
                <h3>Science-Based Training</h3>
                <p>Every program is built on proven scientific principles, optimized for natural bodybuilders who want maximum results without shortcuts.</p>
              </div>
              <div className="mission-point">
                <div className="mission-icon">🥗</div>
                <h3>Sustainable Nutrition</h3>
                <p>We believe in nutrition plans that fuel your body properly while being practical and enjoyable for long-term success.</p>
              </div>
              <div className="mission-point">
                <div className="mission-icon">💪</div>
                <h3>Natural Excellence</h3>
                <p>Proving that incredible physiques are achievable through dedication, smart training, and proper nutrition - no shortcuts needed.</p>
              </div>
              <div className="mission-point">
                <div className="mission-icon">🎯</div>
                <h3>Individual Results</h3>
                <p>Every person is unique. Our programs adapt to your lifestyle, goals, and current fitness level for personalized success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project DENSE Intro */}
      <section className="about-section dense-section">
        <div className="section-content">
          <h2 className="section-title">Introducing Project DENSE</h2>
          <div className="dense-content">
            <div className="dense-text">
              <p className="dense-intro">
                <strong>DENSE</strong> isn't just an acronym - it's our philosophy for building the ultimate physique naturally.
              </p>
              <div className="dense-breakdown">
                <div className="dense-letter">
                  <span className="letter">D</span>
                  <div className="letter-meaning">
                    <h4>Discipline</h4>
                    <p>The foundation of every transformation - consistent action towards your goals</p>
                  </div>
                </div>
                <div className="dense-letter">
                  <span className="letter">E</span>
                  <div className="letter-meaning">
                    <h4>Efficiency</h4>
                    <p>Maximizing results through smart training and optimal time management</p>
                  </div>
                </div>
                <div className="dense-letter">
                  <span className="letter">N</span>
                  <div className="letter-meaning">
                    <h4>Nutrition</h4>
                    <p>Fueling your body with the right foods at the right times for peak performance</p>
                  </div>
                </div>
                <div className="dense-letter">
                  <span className="letter">S</span>
                  <div className="letter-meaning">
                    <h4>Strength</h4>
                    <p>Building both physical and mental strength through progressive overload</p>
                  </div>
                </div>
                <div className="dense-letter">
                  <span className="letter">E</span>
                  <div className="letter-meaning">
                    <h4>Evolution</h4>
                    <p>Continuously improving and adapting your approach for long-term success</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="dense-visual">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&crop=center" 
                alt="Project DENSE Philosophy" 
                className="dense-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="about-section behind-scenes">
        <div className="section-content">
          <h2 className="section-title">Behind the Scenes</h2>
          <p className="behind-scenes-intro">
            Get an exclusive look at our training, content creation, and the daily work that goes into building the L Twins brand.
          </p>
          <div className="behind-scenes-gallery">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=280&h=200&fit=crop&crop=center" alt="Training session" />
              <p>Training sessions</p>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=280&h=200&fit=crop&crop=center" alt="Content creation" />
              <p>Content creation</p>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=280&h=200&fit=crop&crop=center" alt="Meal preparation" />
              <p>Meal preparation</p>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=280&h=200&fit=crop&crop=center" alt="Program development" />
              <p>Program development</p>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=280&h=200&fit=crop&crop=center" alt="Client consultations" />
              <p>Client consultations</p>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=280&h=200&fit=crop&crop=center" alt="Research and development" />
              <p>Research & development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Transformation?</h2>
          <p className="cta-text">
            Join thousands of others who have transformed their lives with our proven natural bodybuilding approach.
          </p>
          <div className="cta-buttons">
            <a href="#newsletter" className="cta-button primary">
              Join Our Email List
            </a>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Follow on Instagram">
                📷 Instagram
              </a>
              <a href="#" className="social-link" aria-label="Follow on YouTube">
                📺 YouTube
              </a>
              <a href="#" className="social-link" aria-label="Follow on TikTok">
                📱 TikTok
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
