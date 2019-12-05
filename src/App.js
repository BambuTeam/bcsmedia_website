import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import SectionTab from './components/SectionTab';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import "./assets/css/main.css"

function App() {
  return (
    <div className="home-3">
      <Header />

      <Hero />

      <ClientLogos />

      <Services />

      <SectionTab />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
