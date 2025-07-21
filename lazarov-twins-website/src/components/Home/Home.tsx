import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
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
