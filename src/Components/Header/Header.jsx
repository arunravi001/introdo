import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.svg'
import LoginIcon from '../../assets/images/login-icon.svg'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header">
      <div className="header-textbar desktop-show">Happy Employees, Effortless HR: Experience the introdo Advantage. <b>Try it for Free!</b> </div>
      <div className="header-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <nav className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Pricing</a>
        <a href="#">Partner Program</a>
        <a href="#">Resources</a>
        <a href="#">About Us</a>
      </nav>
      <div className="header-right">
        <select className="language-select">
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
        <button className="login-btn">Login <img src={LoginIcon} alt="Logo" /></button>
      </div>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
      </button>
      </div>
      <div className="header-textbar mobile-show">Happy Employees, Effortless HR: Experience the introdo Advantage. <b>Try it for Free!</b> </div>
    </header>
  );
};

export default Header;