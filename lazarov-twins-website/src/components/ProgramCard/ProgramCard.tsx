import React from "react";
import { Link } from "react-router-dom";
import "./ProgramCard.css";

interface TrainingProgram {
  id: number;
  title: string;
  body: string;
  image: string;
  experienceLevel: string;
  goal: string;
  price: number;
  rating: number;
  new: boolean;
  salesCount: number;
}

interface ProgramCardProps {
  program: TrainingProgram;
  className?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program, className = "" }) => {
  return (
    <Link 
      to={`/singleProgramView/${program.id}`} 
      className={`program-card-link ${className}`}
    >
      <div className="program-card">
        <img 
          src={program.image} 
          alt={program.title} 
          className="program-card-image" 
        />
        <div className="program-card-content">
          <h3 className="program-card-title">{program.title}</h3>
        </div>
      </div>
      <div className="program-card-info-below">
        <div className="program-card-rating">
          {Array.from({ length: 5 }).map((_, i) => {
            const fullStars = Math.floor(program.rating);
            const hasHalfStar = program.rating % 1 >= 0.5;
            if (i < fullStars) {
              return <span key={i} className="star filled">★</span>;
            } else if (i === fullStars && hasHalfStar) {
              return <span key={i} className="star half">★</span>;
            } else {
              return <span key={i} className="star">★</span>;
            }
          })}
        </div>
        <div className="program-card-category">
          {program.experienceLevel.toUpperCase()}
        </div>
        <div className="program-card-price">${program.price.toFixed(2)}</div>
      </div>
    </Link>
  );
};

export default ProgramCard; 