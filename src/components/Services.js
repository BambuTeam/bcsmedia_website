import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div className="section-padding service-3-bgi" id="features">
        <div className="container service-3-bg">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div
                className="home-3-section-title wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                <h2>
                  We determined that you're our <strong>target audience</strong>
                </h2>
                <p>
                  Marketers usually focus their efforts responsible for making
                  the purchase.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="single-service-item home-3-single-service-item">
                <img src="assets/image/home-3-service-1.png" alt="" />
                <h4>We brainstormed</h4>
                <p>
                  Let’s find to them! My first and foremost form of traffic
                  comes from the higher ranked pages.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="1s"
            >
              <div className="single-service-item home-3-single-service-item">
                <img src="assets/image/home-3-service-2.png" alt="" />
                <h4>Made a prototype</h4>
                <p>
                  A gentleman from New York discovered what he calls an
                  “oversight” on the part of 99.9% of all marketers.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInRight sm-hidden"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="single-service-item home-3-single-service-item">
                <img src="assets/image/home-3-service-3.png" alt="" />
                <h4>Set up analytics</h4>
                <p>
                  Let’s find to them! My first and foremost form of traffic
                  comes from the higher ranked pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
