import React, { Component } from "react";

import logoBcsmedia from "../assets/image/bcs-media/logo_bcsmedia_white.png"

export class Footer extends Component {
  render() {
    return (
      <div className="footer-area white home-3-footer-area">
        <div className="pd-sm section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <h2
                    className="wow fadeInDown"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    Have questions in mind? Let us <strong>help you.</strong>
                  </h2>
                  <div
                    className="subscribe-form footer-subscribe-form wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="1s"
                  >
                    <form id="mc-form-footer">
                      <input
                        type="email"
                        placeholder="Email Address"
                        id="mc-email-footer"
                      />
                      <button type="submit">Get your Estimate</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-menu">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="footer-logo">
                  <a href="index.html">
                    <img src={logoBcsmedia} alt="" width="120" />
                  </a>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="footer-mainmenu">
                  <ul>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Customers</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                Copyright &copy; 2019 QuomodoTheme All Right Reserved.
              </div>
              <div className="col-lg-6">
                <div className="social-link">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-vimeo-v"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
