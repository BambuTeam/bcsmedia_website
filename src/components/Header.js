import React, { Component } from "react";

import "../assets/css/main.css"

export class Header extends Component {
  render() {
    return (
      <div id="mainmenu-area">
        <div className="header-area header-area-1 home-3-header-area">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-6 w-50">
                <div className="logo">
                  <a href="#">
                    <img src="assets/image/logo/sticky_logo_red.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-10 col-sm-6 w-50">
                <button id="menu-button">Menu</button>
                <div className="header-signup xs-hidden sm-hidden">
                  <a href="#" className="border-boxed-btn">
                    Sign Up
                  </a>
                </div>
                <div className="mainmenu sm-hidden xs-hidden">
                  <ul>
                    <li>
                      <a className="nav-link active" href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#services">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#testimonial">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="nav-link" href="#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;