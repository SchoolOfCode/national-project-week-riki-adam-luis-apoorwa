import React from 'react';
import Logo from './Logo';
import CurrentDate from './CurrentDate';
import NavBar from './NavBar';
import './styles.css';

const Header = () => {
  return (
    <div className="Header">
      <Logo />
      <div className="Header_Rigth_Side">
        <CurrentDate />
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
