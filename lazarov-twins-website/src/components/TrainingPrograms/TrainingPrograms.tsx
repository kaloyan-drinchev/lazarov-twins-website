import React, { useState } from "react";
import "./TrainingPrograms.css";
import searchIcon from "../../assets/icons8-search.gif";
// @ts-ignore
import trainingProgramsData from "../../data/trainingProgram";

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

const trainingPrograms: TrainingProgram[] = trainingProgramsData as TrainingProgram[];

const experienceLevels = ["beginner", "intermediate", "advanced"];
const goals = ["gain muscle", "gain strength", "both"];
const sortOptions = [
  { value: "bestSelling", label: "Best Selling" },
  { value: "az", label: "A-Z" },
  { value: "za", label: "Z-A" },
  { value: "priceLowHigh", label: "Price: Low to High" },
  { value: "priceHighLow", label: "Price: High to Low" },
];

const featuredProgram = trainingPrograms.find((p) => p.new);

const TrainingPrograms: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  // Handler for radio filters that allows deselection
  const handleRadioFilter = (
    value: string,
    selected: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (selected === value) {
      setter("");
    } else {
      setter(value);
    }
  };

  return (
    <div className="training-programs-page">
      <div className="training-programs-flex-row training-programs-header">
        <div className="header-left">
          <h2 className="tab-title">Training Programs</h2>
          <div className="search-bar-wrapper">
            <input
              className="programs-search-bar"
              type="text"
              placeholder="Search programs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-bar-icon-btn" tabIndex={-1} type="button">
              <img src={searchIcon} alt="Search" className="search-bar-icon" />
            </button>
          </div>
        </div>
        {featuredProgram && (
          <div className="header-featured-image-center">
            <img
              src={featuredProgram.image}
              alt={featuredProgram.title}
              className="header-featured-image"
            />
          </div>
        )}
      </div>
      <div className="programs-section-divider" />
      <div className="training-programs-flex-row">
        <aside className="training-programs-filter">
          <div className="filter-section filter-section-sort">
            <span className="filter-section-heading">
              Sort By
              {selectedSort && (
                <span className="selected-filter-value">: {sortOptions.find(o => o.value === selectedSort)?.label}</span>
              )}
            </span>
            {sortOptions.map((option) => (
              <label key={option.value} className="filter-label">
                <input
                  type="radio"
                  name="sort"
                  value={option.value}
                  checked={selectedSort === option.value}
                  onClick={() => handleRadioFilter(option.value, selectedSort, setSelectedSort)}
                  readOnly
                />
                {option.label}
              </label>
            ))}
          </div>
          <div className="filter-divider" />
          <div className="filter-section">
            <span className="filter-section-heading">Experience Level</span>
            {experienceLevels.map((level) => (
              <label key={level} className="filter-label">
                <input
                  type="radio"
                  name="experience"
                  value={level}
                  checked={selectedExperience === level}
                  onClick={() => handleRadioFilter(level, selectedExperience, setSelectedExperience)}
                  readOnly
                />
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </label>
            ))}
          </div>
          <div className="filter-divider" />
          <div className="filter-section">
            <span className="filter-section-heading">Goal</span>
            {goals.map((goal) => (
              <label key={goal} className="filter-label">
                <input
                  type="radio"
                  name="goal"
                  value={goal}
                  checked={selectedGoal === goal}
                  onClick={() => handleRadioFilter(goal, selectedGoal, setSelectedGoal)}
                  readOnly
                />
                {goal.charAt(0).toUpperCase() + goal.slice(1)}
              </label>
            ))}
          </div>
        </aside>
        <div className="training-programs-container">
          {trainingPrograms.map((program: TrainingProgram) => (
            <div className="training-program-card" key={program.id}>
              <img src={program.image} alt={program.title} className="training-program-image" />
              <h3 className="training-program-title">{program.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;
