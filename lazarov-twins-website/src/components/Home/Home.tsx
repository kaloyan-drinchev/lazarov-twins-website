import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ProgramCard from '../ProgramCard/ProgramCard';
import type { TrainingProgram } from '../../types';
// @ts-ignore
import trainingProgramsData from '../../data/trainingProgram';

const trainingPrograms: TrainingProgram[] = trainingProgramsData as TrainingProgram[];

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
          <div className={`home-best-selling-grid ${isVisible ? 'animate-in' : ''}`}>
            {bestSellingPrograms.map((program) => (
              <ProgramCard 
                key={program.id} 
                program={program} 
                className="home-program-card" 
              />
            ))}
          </div>
          <Link to="/training-programs" className="home-view-all-button">
            View All Programs
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
