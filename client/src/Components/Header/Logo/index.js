import React from 'react';
import './styles.css';
import logoImg from './onePLace.png';

const Logo = () => {
  return (
    <div className="Logo">
      <div className='images'>
        <img
          className="Image_Logo"
          src="https://d33wubrfki0l68.cloudfront.net/e6fddcbea146f91d2f3c160f7d56a9391a4740b0/4e758/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png"
          alt=""
        />
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
