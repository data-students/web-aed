import { useState } from 'react';
import PropTypes from 'prop-types';

import aedLogo from '/aed.webp';
import './App.css';

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

const TopBarItem = ({ children, menuOpen, setMenuOpen }) => (
  <a onClick={() => setMenuOpen(false)} className={`top-bar-item${menuOpen ? ' visible' : ''}`} href='#'>
    {children}
  </a>
);
TopBarItem.propTypes = {
  children: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <img className='logo' src={aedLogo} alt="AED" />
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className='top-bar-right'>
        <TopBarItem menuOpen={menuOpen} setMenuOpen={setMenuOpen}>About</TopBarItem>
        <TopBarItem menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Projects</TopBarItem>
        <TopBarItem menuOpen={menuOpen} setMenuOpen={setMenuOpen}>Join us</TopBarItem>
      </div>
    </div >
  );
}

function App() {
  return <TopBar />;
}

export default App;
