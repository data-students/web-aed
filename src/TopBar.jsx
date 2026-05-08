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

const languages = ['ca', 'en'];

function TopBar({ language, setLanguage, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`top-bar ${menuOpen ? ' solid' : ''}`}>
      <div className="top-bar-left">
        <img className="logo" src={aedLogo} alt="AED" width="161" height="72" />
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className="top-bar-right">
        <TopBarItem id="nosaltres" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>{t.about}</TopBarItem>
        <TopBarItem id="objectius" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>{t.goals}</TopBarItem>
        <TopBarItem id="projectes" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>{t.projects}</TopBarItem>
        <TopBarItem id="equip" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>{t.team}</TopBarItem>
        <TopBarItem id="unir-se" menuOpen={menuOpen} setMenuOpen={setMenuOpen} isHighlight>{t.join}</TopBarItem>
        <div className={`language-selector${menuOpen ? ' visible' : ''}`} aria-label={t.languageLabel}>
          {languages.map((languageCode) => (
            <button
              key={languageCode}
              type="button"
              className={`language-button${language === languageCode ? ' active' : ''}`}
              onClick={() => setLanguage(languageCode)}
              aria-pressed={language === languageCode}
            >
              {languageCode.toUpperCase()}
            </button>
          ))}
        </div>
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
