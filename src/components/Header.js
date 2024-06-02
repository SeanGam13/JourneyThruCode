import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div id="header" className="fixed-header">
      <div className="container">
        <div className="header-text">
          <p>Journey Through Code: My Personal Portfolio</p>
          <h1>My Name is Sean Gambanou<br /><span>Make Yourselves at home</span><br /></h1>
        </div>
      </div>
    </div>
  );
}

export default Header;

