import React, { useState, useEffect } from "react";
import "./TrainingPrograms.css";
import searchIcon from "../../assets/icons8-search.gif";
import filterIcon from "../../assets/icons8-filter-50.png";
import arrowDownIcon from "../../assets/icons8-chevron-down-24.png";
import { Link } from "react-router-dom";
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

const TrainingPrograms: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>("");
  const [selectedGoal, setSelectedGoal] = useState<string>("");
  const [selectedSort, setSelectedSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showMobileSort, setShowMobileSort] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Listen for custom events dispatched by the NavBar when menu opens/closes
    const handleNavOpen = () => setIsNavOpen(true);
    const handleNavClose = () => setIsNavOpen(false);
    window.addEventListener("nav-open", handleNavOpen);
    window.addEventListener("nav-close", handleNavClose);
    return () => {
      window.removeEventListener("nav-open", handleNavOpen);
      window.removeEventListener("nav-close", handleNavClose);
    };
  }, []);

  // Handler for radio filters that allows deselection
  const handleRadioFilter = (
    value: string,
    selected: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    closeDrawer?: () => void
  ) => {
    if (selected === value) {
      setter("");
    } else {
      setter(value);
    }
    if (closeDrawer) closeDrawer();
  };

  // Filtering, searching, and sorting logic
  const filteredPrograms = trainingPrograms
    .filter((program) => {
      if (selectedExperience && program.experienceLevel !== selectedExperience) return false;
      if (selectedGoal && program.goal !== selectedGoal) return false;
      if (search.trim()) {
        const searchLower = search.trim().toLowerCase();
        if (
          !program.title.toLowerCase().includes(searchLower) &&
          !program.body.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }
      return true;
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case "bestSelling":
          return b.salesCount - a.salesCount;
        case "az":
          return a.title.localeCompare(b.title);
        case "za":
          return b.title.localeCompare(a.title);
        case "priceLowHigh":
          return a.price - b.price;
        case "priceHighLow":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  // Mobile drawer content
  const mobileFilterDrawer = (
    <div className="mobile-drawer">
      <button className="mobile-drawer-close" onClick={() => setShowMobileFilter(false)}>&times;</button>
      <div className="filter-section">
        <span className="filter-section-heading">Experience Level</span>
        {experienceLevels.map((level) => (
          <label key={level} className="filter-label">
            <input
              type="radio"
              name="experience-mobile"
              value={level}
              checked={selectedExperience === level}
              onClick={() => handleRadioFilter(level, selectedExperience, setSelectedExperience, () => setShowMobileFilter(false))}
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
              name="goal-mobile"
              value={goal}
              checked={selectedGoal === goal}
              onClick={() => handleRadioFilter(goal, selectedGoal, setSelectedGoal, () => setShowMobileFilter(false))}
              readOnly
            />
            {goal.charAt(0).toUpperCase() + goal.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );

  const mobileSortDrawer = (
    <div className="mobile-drawer">
      <button className="mobile-drawer-close" onClick={() => setShowMobileSort(false)}>&times;</button>
      <div className="filter-section filter-section-sort">
        <span className="filter-section-heading">Sort By</span>
        {sortOptions.map((option) => (
          <label key={option.value} className="filter-label">
            <input
              type="radio"
              name="sort-mobile"
              value={option.value}
              checked={selectedSort === option.value}
              onClick={() => handleRadioFilter(option.value, selectedSort, setSelectedSort, () => setShowMobileSort(false))}
              readOnly
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="training-programs-page">
      {/* Mobile filter/sort bar - now on top */}
      {!isNavOpen && (
        <div className="mobile-bar styled-bar">
          <button className="mobile-bar-btn styled-bar-btn" onClick={() => setShowMobileFilter(true)}>
            <img src={filterIcon} alt="Filter" className="bar-btn-icon" />
            Filters
            <img src={arrowDownIcon} alt="Open" className="bar-btn-arrow" />
          </button>
          <button className="mobile-bar-btn styled-bar-btn" onClick={() => setShowMobileSort(true)}>
            Sort by
            <img src={arrowDownIcon} alt="Open" className="bar-btn-arrow" />
          </button>
        </div>
      )}
      <div className="training-programs-flex-row training-programs-header">
        <div className="header-left styled-header-left">
          <h2 className="tab-title styled-tab-title">{`TRAINING\nPROGRAMS`}</h2>
          <div className="product-count">{filteredPrograms.length} products</div>
          <div className="search-bar-wrapper styled-search-bar-wrapper">
            <input
            className="programs-search-bar styled-search-bar"
              type="text"
              placeholder="Search programs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-bar-icon-btn styled-search-bar-icon-btn" tabIndex={-1} type="button">
              <img src={searchIcon} alt="Search" className="search-bar-icon styled-search-bar-icon" />
            </button>
          </div>
        </div>
        {trainingPrograms.find(program => program.new) && (
          <div className="header-featured-image-wrapper">
            <div className="header-featured-image-center">
              <img
                src={trainingPrograms.find(program => program.new)?.image}
                alt={trainingPrograms.find(program => program.new)?.title}
                className="header-featured-image"
              />
            </div>
          </div>
        )}
    </div>

      {!isNavOpen && <div className="programs-section-divider" />}
      {showMobileFilter && <div className="mobile-drawer-overlay" onClick={() => setShowMobileFilter(false)} />}
      {showMobileSort && <div className="mobile-drawer-overlay" onClick={() => setShowMobileSort(false)} />}
      {showMobileFilter && mobileFilterDrawer}
      {showMobileSort && mobileSortDrawer}
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
        <div
          className="training-programs-container"
          key={selectedExperience + selectedGoal + selectedSort + search}
        >
          {filteredPrograms.map((program: TrainingProgram) => (
            <Link to={`/singleProgramView/${program.id}`} key={program.id} className="training-program-card-link">
              <div className="training-program-card">
                <img src={program.image} alt={program.title} className="training-program-image" />
                <h3 className="training-program-title">{program.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;

