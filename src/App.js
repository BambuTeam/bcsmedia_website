import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Services from './components/Services';
import SectionTab from './components/SectionTab';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import "./assets/css/main.css"
import "./assets/scss/app.scss"

function App() {
  return (
    <div className="home-3">
      <Header />

      <Hero />



      <Services />

      <SectionTab />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
