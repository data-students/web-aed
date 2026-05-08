import { useState } from 'react';
import PropTypes from 'prop-types';

import aedLogo from '/aed.webp'; 
import './TopBar.css';

const MenuButton = ({ menuOpen, setMenuOpen }) => (
  <div className={`mobile-menu${menuOpen ? ' menu-open' : ''}`} onClick={() => setMenuOpen((prev) => !prev)}>
    <div className='bar' /> 
    <div className='bar' />
    <div className='bar' />
  </div>
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

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Català');

  return (
    <div className={`top-bar ${menuOpen ? ' solid' : ''}`}>
      <div className='top-bar-left'>
        <img className='logo' src={aedLogo} alt='AED' width='161' height='72' />
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className='top-bar-right'>


        
        <TopBarItem id='' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Qui som?</TopBarItem>
        <TopBarItem id='objectius' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Objectius</TopBarItem>
        <TopBarItem id='projectes' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Projectes</TopBarItem>
        <TopBarItem id='equip' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Equip</TopBarItem>
        
        <TopBarItem id='unir-se' menuOpen={menuOpen} setMenuOpen={setMenuOpen} isHighlight>Uneix-te!</TopBarItem>
      </div>
    </div >
  );
}

export default TopBar;