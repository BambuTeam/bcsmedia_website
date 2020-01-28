import React, { Component } from "react";

import img_quote from "../assets/image/bcs-media/quote.png";
import circle1 from "../assets/image/bcs-media/circle1.svg";
import circle2 from "../assets/image/bcs-media/circle2.svg";
import circle3 from "../assets/image/bcs-media/circle3.svg";
import circle4 from "../assets/image/bcs-media/circle4.svg";
import circle5 from "../assets/image/bcs-media/circle5.svg";








export class Testimonials extends Component {
  render() {
    return (
      <div
        className="section-padding testimonial-area home-3-testimonial-area ovr-h"
        id="testimonial"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 offset-lg-1 text-center">
              <div className="owl-carousel testimonial-carousel">
                <div className="single-testimonial-item">
                  <div className="testimonial-content">
                    <img src={img_quote} alt="" />
                    <p>
                      “ On first impression, the last sentence sounds patently
                      wrong. We all know about human collectives that regarded
                      human lives as dispensable, that murdered and tortured,
                      that cleansed and annihilated whole populations in
                      recurrent genocides. ”
                    </p>
                  </div>

                  <div className="testmonial-author-section">
                    <div className="author-image">
                      <img src="assets/image/team-1.jpg" alt="" />
                    </div>
                    <div className="author-text">
                      <h4>
                        Jay Barton <span>Co-ordinator, Picela</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial-item">
                  <div className="testimonial-content">
                    <img src={img_quote} alt="" />
                    <p>
                      “ On first impression, the last sentence sounds patently
                      wrong. We all know about human collectives that regarded
                      human lives as dispensable, that murdered and tortured,
                      that cleansed and annihilated whole populations in
                      recurrent genocides. ”
                    </p>
                  </div>

                  <div className="testmonial-author-section">
                    <div className="author-image">
                      <img src="assets/image/team-2.jpg" alt="" />
                    </div>
                    <div className="author-text">
                      <h4>
                        Jay Barton <span>Co-ordinator, Picela</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="single-testimonial-item">
                  <div className="testimonial-content">
                    <img src={img_quote} alt="" />
                    <p>
                      “ On first impression, the last sentence sounds patently
                      wrong. We all know about human collectives that regarded
                      human lives as dispensable, that murdered and tortured,
                      that cleansed and annihilated whole populations in
                      recurrent genocides. ”
                    </p>
                  </div>

                  <div className="testmonial-author-section">
                    <div className="author-image">
                      <img src="assets/image/team-3.jpg" alt="" />
                    </div>
                    <div className="author-text">
                      <h4>
                        Jay Barton <span>Co-ordinator, Picela</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="team-img">
                <img src={circle1} alt="" />
                <img src="assets/image/team-2.jpg" alt="" />
                <img src={circle5} alt="" />
                <img src={circle3} alt="" />
                <img src={circle2} alt="" />
                <img src="assets/image/team-6.jpg" alt="" />
                <img src={circle4} alt="" />
                <img src="assets/image/team-8.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
