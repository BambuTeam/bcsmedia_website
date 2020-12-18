import React, { Component, Fragment } from "react";

import logoBcsmedia from "../assets/image/bcs-media/logo_bcsmedia_white.png";
import topfooter from "../assets/image/bcs-media/footer-top.svg";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <img src={topfooter} />
        </div>

        <div className="footer-area white home-3-footer-area">
          <div className="pd-sm section-padding">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                  <div className="section-title">
                  <div className="home-3-hero-title footer-text">
                    <h1
                      className="wow fadeInUp"
                      data-wow-delay="0.5s"
                      data-wow-duration="1s"
                    >
                      ¿Tiene preguntas en mente? <strong>contáctanos</strong>
                    </h1>
                    </div>
                    <div
                      className="subscribe-form footer-subscribe-form wow fadeInUp"
                      data-wow-delay="0.4s"
                      data-wow-duration="1s"
                    >
                      <form id="mc-form-footer">
                        <input
                          className="mr-md-3"
                          type="email"
                          placeholder="Correo Electronico"
                          id="mc-email-footer"
                        />
                        <button type="submit" className="btn-footer">ENVIAR</button>
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
                  Copyright &copy; 2020 Bcs Media .
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
      </Fragment>
    );
  }
}

export default Footer;
