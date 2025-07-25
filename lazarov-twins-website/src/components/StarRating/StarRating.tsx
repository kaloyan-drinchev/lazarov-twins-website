import React from "react";
import "./StarRating.css";

interface StarRatingProps {
  rating: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, className = "" }) => {
  return (
    <div className={`star-rating ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        if (i < fullStars) {
          return <span key={i} className="star filled">★</span>;
        } else if (i === fullStars && hasHalfStar) {
          return <span key={i} className="star half">★</span>;
        } else {
          return <span key={i} className="star">★</span>;
        }
      })}
    </div>
  );
};

export default StarRating; 