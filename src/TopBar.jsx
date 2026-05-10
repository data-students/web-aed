import { useState } from 'react';
import PropTypes from 'prop-types';

import aedLogo from '/aed.webp';
import './TopBar.css';

const MenuButton = ({ menuOpen, setMenuOpen }) => (
  <button
    type="button"
    className={`mobile-menu${menuOpen ? ' menu-open' : ''}`}
    onClick={() => setMenuOpen((prev) => !prev)}
    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={menuOpen}
  >
    <span className="bar" />
    <span className="bar" />
    <span className="bar" />
  </button>
);
MenuButton.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

const TopBarItem = ({ id, children, menuOpen, setMenuOpen, isHighlight = false }) => (
  <a
    onClick={() => setMenuOpen(false)}
    className={`top-bar-item${menuOpen ? ' visible' : ''}${isHighlight ? ' btn-highlight' : ''}`}
    href={`#${id}`}
  >
    {children}
  </a>
);
TopBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  isHighlight: PropTypes.bool,
};

const languageLabels = {
  ca: 'CA',
  en: 'EN',
};

const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="globe-icon"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

function TopBar({ language, setLanguage, t }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const alternativeLanguage = language === 'ca' ? 'en' : 'ca';

  const handleLanguageChange = () => {
    setLanguage(alternativeLanguage);
    setLanguageOpen(false);
  };

  return (
    <div className={`top-bar ${menuOpen ? ' solid' : ''}`}>
      <div className="top-bar-left">
        <img className="logo" src={aedLogo} alt="AED" width="161" height="72" />
        <div className="language-selector">
          <button
            type="button"
            className={`language-button current${languageOpen ? ' open' : ''}`}
            onClick={() => setLanguageOpen((prev) => !prev)}
            aria-label={t.languageLabel}
            aria-expanded={languageOpen}
            aria-haspopup="menu"
          >
            <GlobeIcon />
            <span>{languageLabels[language]}</span>
          </button>
          {languageOpen && (
            <div className="language-dropdown">
              <button
                type="button"
                className="language-button language-option"
                onClick={handleLanguageChange}
                role="menuitem"
              >
                {languageLabels[alternativeLanguage]}
              </button>
            </div>
          )}
        </div>
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className="top-bar-right">
        <TopBarItem id="nosaltres" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>{t.about}</TopBarItem>
        <TopBarItem id="objectius" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>{t.goals}</TopBarItem>
        <TopBarItem id="projectes" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>{t.projects}</TopBarItem>
        <TopBarItem id="equip" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>{t.team}</TopBarItem>
        <TopBarItem id="unir-se" menuOpen={menuOpen} setMenuOpen={setMenuOpen} isHighlight>{t.join}</TopBarItem>
      </div>
    </div>
  );
}

TopBar.propTypes = {
  language: PropTypes.oneOf(['ca', 'en']).isRequired,
  setLanguage: PropTypes.func.isRequired,
  t: PropTypes.shape({
    about: PropTypes.string.isRequired,
    goals: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    join: PropTypes.string.isRequired,
    languageLabel: PropTypes.string.isRequired,
  }).isRequired,
};

export default TopBar;
