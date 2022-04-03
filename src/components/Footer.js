import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <span>Created By </span>
      <Link to="/about" className="footer-logo">
        Patryk Brzozowski
      </Link>
      <span> 2022 All rights reserved</span>
    </div>
  );
}

export default Footer;
