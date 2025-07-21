import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import burgerIcon from '../../assets/burger-menu-svgrepo-com.svg';
import logo from "../../assets/Dynamic 'L-Twins' Fitness Logo (1).png";
import searchIcon from '../../assets/icons8-search.gif';
import bagIcon from '../../assets/icons8-paper-bag-50.png';
import './NavBar.css';

const MOBILE_BREAKPOINT = 768;

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/training-programs', label: 'Training Programs' },
  { to: '/nutrition-plan', label: 'Nutrition Plan' },
  { to: '/muscle-ladder', label: 'The Muscle Ladder' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

const getDelay = (i: number) => `${0.1 + i * 0.08}s`;

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      <nav aria-label="Main navigation" className="navbar">
        <button
          className="navbar__toggle"
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          <img src={burgerIcon} alt="Menu" />
        </button>
        <img
          src={logo}
          alt="L-Twins Fitness Brand Logo"
          className="navbar__logo"
        />
        <ul
          className={`navbar__links navbar__links--center${
            menuOpen ? ' navbar__links--open' : ''
          }`}
        >
          {menuOpen && (
            <li className="navbar__close-wrapper">
              <button
                className="navbar__close"
                onClick={handleClose}
                aria-label="Close menu"
              >
                &times;
              </button>
            </li>
          )}
          {navLinks.map(({ to, label }, i) => (
            <li
              className="navbar__item"
              key={to}
              style={menuOpen ? { animationDelay: getDelay(i) } : {}}
            >
              <NavLink to={to} end={to === '/'} onClick={handleClose}>
                {label}
              </NavLink>
            </li>
          ))}
          {menuOpen && (
            <li
              className="navbar__logo--mobile"
              style={{ animationDelay: getDelay(navLinks.length) }}
            >
              <img src={logo} alt="L-Twins Fitness Brand Logo" />
            </li>
          )}
        </ul>
        <div className="navbar__icons">
          <img src={searchIcon} alt="Search" className="navbar__icon" />
          <img src={bagIcon} alt="Bag" className="navbar__icon" />
        </div>
        {menuOpen && (
          <div className="navbar__overlay" onClick={handleClose}></div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
