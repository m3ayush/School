import React from 'react';

const Navbar = () => {
  return (
    <div className='nav-div'>
        <div className='nav-div2'>
        <img src="/src/images/logo.png" alt="School Logo" className='logo-main' />
        <h1 >Future Leaders School</h1>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#academics">Academics</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
     
    </div>
  );
};

export default Navbar;
