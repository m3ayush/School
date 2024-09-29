import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
        <div className='gallary-head'>
        <h2>Contact Us</h2>
        </div>
      
      <form className='form-color'>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className='contactdiv'>
        <div className="contact-details">
            <p>Vasant Vihar, New Delhi, India</p>
            <p>Phone: (+91) 9131478836</p>
            <p>Email: FLSchool@gmail.com</p>
        </div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.106169292932!2d77.160071!3d28.56145745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1daf885ea341%3A0x7d8bdb6b1922f23a!2sVasant%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1727625268702!5m2!1sen!2sin"
            width="300" 
            height="300" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </section>
  );
};

export default Contact;
