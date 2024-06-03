import React from 'react';
import './Header.css';

const Header = () => {
  console.log("Header component rendered"); // Add this line for debugging
  return (
    <div id="header" className="fixed-header">
  <div className="container">
    <div className="header-text">
      <p style={{ color: "rgb(0, 183, 255)",fontWeight: "bold", textTransform: "uppercase", display: "inline", textShadow: "-2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff, 2px 2px 0 #fff" }}>Journey Through Code: </p>
      <p style={{ color: "orange", fontStyle: "italic", display: "inline", textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000" }}>My Personal Portfolio</p>
      <h4 className="white-text">Welcome to the arena of greatness, where every challenge is met with unwavering determination.<br /> Here, we don't just strive for success, we embody it. Join us in our journey to conquer new heights and redefine what's possible.<br /> This is where dreams become reality, and we're ready to lead the charge. Are you ready to step into the spotlight?<br /> Let's make history together.</h4>
      <h1>My Name is <span className="blue-text">Sean</span> <span className="orange-text">Gambanou</span></h1>
      <span className="white-text">Make Yourselves at home</span>
    </div>
  </div>
</div>

  );
};

export default Header;
