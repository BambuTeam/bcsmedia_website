import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Services from "./components/Services";
import SectionTab from "./components/SectionTab";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import "./assets/css/main.css"
import "./assets/scss/app.scss";

function Main() {
  return (
    <Fragment>
      {/* <Header /> */}

      <Hero />

      <Services />

      <SectionTab />
      <Testimonials />
      <Contact />
      {/* <Footer /> */}
    </Fragment>
  );
}

function About() {
  return (
    <Fragment>
      {/* <Header /> */}
      <div>
        <h1>Hello</h1>
      </div>
      {/* <Footer /> */}
    </Fragment>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="home-3">
          <Header />

          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />

          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
