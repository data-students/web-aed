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

const TopBarItem = ({ id, children, menuOpen, setMenuOpen }) => (
  <a onClick={() => setMenuOpen(false)} className={`top-bar-item${menuOpen ? ' visible' : ''}`} href={`#${id}`}>
    {children}
  </a>
);
TopBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`top-bar ${menuOpen ? ' solid' : ''}`}>
      <div className='top-bar-left'>
        <img className='logo' src={aedLogo} alt='AED' width='161' height='72' />
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className='top-bar-right'>
        <TopBarItem id='nosaltres' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Qui som?</TopBarItem>
        <TopBarItem menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Projectes</TopBarItem>
        <TopBarItem id='unir-se' menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Uneix-te!</TopBarItem>
      </div>
    </div >
  );
}

export default TopBar;