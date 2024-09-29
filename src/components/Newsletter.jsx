import React, { useState } from 'react';

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(true); 
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="newsletter-popup">
        <div className="newsletter-content">
          <h2>Subscribe to our Newsletter</h2>
          <p>Stay updated with the latest news and events from our school!</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <button className="close-button" onClick={closePopup}>
            &times;
          </button>
        </div>
      </div>
    )
  );
};

export default Newsletter;
