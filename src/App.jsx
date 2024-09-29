import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Newsletter />
      <About />
      <Academics />
      <Gallery />
      <Contact />
      <ScrollToTop/>
    </div>
  );
};

export default App;
