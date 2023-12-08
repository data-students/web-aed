import { useState } from 'react';
import PropTypes from 'prop-types';

import aedLogo from '/aed.webp';
import './App.css';

function TopBarItem({ children, menuOpen }) {
  return <a className={`top-bar-item${menuOpen ? ' visible' : ''}`} href='#'>{children}</a>;
}
TopBarItem.propTypes = {
  children: PropTypes.string.isRequired,
  menuOpen: PropTypes.bool.isRequired,
};

function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log('menuOpen', menuOpen);

  return (
    <div className='top-bar'>
      <div className='top-bar-left'>
        <img className='logo' src={aedLogo} alt="AED" />
        <div className={`mobile-menu${menuOpen ? ' menu-open' : ''}`} onClick={() => setMenuOpen((prev) => !prev)}>Menu</div>
      </div>
      <div className='top-bar-right'>
        <TopBarItem menuOpen={menuOpen}>About</TopBarItem>
        <TopBarItem menuOpen={menuOpen}>Projects</TopBarItem>
        <TopBarItem menuOpen={menuOpen}>Join us</TopBarItem>
      </div>
    </div >
  );
}

function App() {
  return <TopBar />;
}

export default App;
