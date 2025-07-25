import React from "react";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import "./ProgramCard.css";
import type { ProgramCardProps } from "../../types";

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
      </div>
      <div className="program-card-info-below">
        <h3 className="program-card-title" style={{ fontFamily: 'Arial Narrow, Arial, sans-serif' }}>{program.title}</h3>
        <StarRating rating={program.rating} className="program-card-rating" />
        <div className="program-card-category">
          {program.experienceLevel.toUpperCase()}
        </div>
        <div className="program-card-price">${program.price.toFixed(2)}</div>
      </div>
    </Link>
  );
};

export default ProgramCard; 