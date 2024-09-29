import React from 'react';
import Slider from "react-slick";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="gallery" className="gallery-section">
        <div className='gallary-head'>
            <h2>FLS AT A GLANCE</h2>
        </div>
      
      <Slider {...settings}>
        <div>
          <img src="src\images\asse.jpg" alt="School Event 1" />
        </div>
        <div>
          <img src="src\images\g2.jpeg" alt="School Event 2" />
        </div>
        <div>
          <img src="src\images\g3.jpg" alt="School Event 3" />
        </div>
      </Slider>
    </section>
  );
};

export default Gallery;
