import React from 'react';
import './styles.css';
import logoImg from './onePLace.png';

const Logo = () => {
  return (
    <div className="Logo">
      <div className='images'>
        
        <img className="Image_Logo2" src={logoImg} alt="" />
      </div>
      <div className='Logo_Name'>
        <div>
          <p className="App_Name">onePlace</p>
        </div>

        <div className="Underline_Logo_Name"></div>
      </div>
    </div>
  );
};

export default Logo;
