import React, { Component } from "react";
import bcsmediaicon from "../assets/image/home/bk-transparent.png";

export class Contact extends Component {
  render() {
    return (
      <div
        className="contact-area section-padding home-3-contact-area"
        id="contact-form"
      >
        <div className="container">
          <div className="row justify-content-center aic">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="home-3-contact-area-img">
                <img src={bcsmediaicon} alt="" />
                {/* <img src="assets/image/contact-img-3.png" alt="" /> */}
              </div>
            </div>
            <div
              className="col-lg-5 offset-lg-1 wow fadeInRight"
              data-wow-delay="0.4s"
              data-wow-duration="1s"
            >
              <div className="contact-form">
                <div className="home-3-section-title">
                  <h2>
                    Need a help? Don’t worry just <strong>contact us.</strong>
                  </h2>
                </div>
                <form id="contactForm" data-toggle="validator" className="shake">
                  <p>
                    <label>Name*</label>
                    <input type="text" id="name" placeholder="Gary Roberson*" />
                  </p>
                  <p>
                    <label>Email*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="noah_cremin@yahoo.com"
                    />
                  </p>
                  <p>
                    <label>Messages*</label>
                    <textarea
                      name="name"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Messages"
                    ></textarea>
                    <button type="submit" id="submit" className="boxed-btn">
                      Get Estimated Price
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
