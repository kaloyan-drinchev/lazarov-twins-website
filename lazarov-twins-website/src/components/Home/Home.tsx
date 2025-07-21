import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
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
    </div>
  );
};

export default Home;
