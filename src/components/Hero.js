import React, { Component } from "react";

import hero from "../assets/image/home/sistema.png";

export class Hero extends Component {
  render() {
    return (
      <div className="hero-area home-3-hero-bg ovr-h">
        <div className="container">
          <div className="row aic">
            <div
              className="col-lg-6 col-md-12 wow fadeInLeft"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="home-3-hero-title">
                <h1
                  className="wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="1s"
                >
                  <strong className="font-primary color-primary">bcs</strong>-media
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.3s">
                  Like any great agency we are only as good as the results we
                  deliver of our recent work.
                </p>
                <div
                  className="subscribe-form home-3-subscribe-form wow fadeInUp"
                  data-wow-delay="0.4s"
                  data-wow-duration="1s"
                >
                  <form id="mc-form">
                    <input
                      type="email"
                      placeholder="Email address"
                      id="mc-email"
                    />
                    <button type="submit">Get Quotes</button>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-delay="0.5s"
              data-wow-duration="1s"
            >
              <div className="home-3-hore-img">
                <img src={hero} alt="" />
                {/* <img src="/assets/image/home-3-hero-img.png" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
