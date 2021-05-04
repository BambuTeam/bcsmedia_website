import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Services from "./components/Services";
import SectionTab from "./components/SectionTab";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./pages/about";
import CustomersPage from "./pages/CustomersPage";
import ServicesPage from "./pages/ServicesPage";

// import "./assets/css/main.css"
import "./assets/scss/app.scss";
import { Servicesnew } from "./components/Service-2";
import Homesection from "./pages/Homesection";
import ReactPlayer from 'react-player';


function Main() {
  return (
    <Fragment>
      {/* <Header /> */}
      <ReactPlayer
        url='https://crossmediaplus.com/s3/bcsvideos/Farmacia.MP4'
        width='100%'
        height='100%'
        playing
        loop
      />
      <Hero />
      <Homesection />
      <Servicesnew />

      {/* <Services /> */}

      <SectionTab />
      {/* <Testimonials /> */}
      <Contact />
      {/* <Footer /> */}
    </Fragment>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="home-3">
          <Header />

          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={ServicesPage} />

          <Route exact path="/contact" component={Contact} />
          <Route exact path="/clientes" component={CustomersPage} />

          <Route exact path="/home" component={Main} />
          <Route exact path="/" component={Main} />


          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
