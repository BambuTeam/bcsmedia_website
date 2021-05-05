import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
// Assets
import logosvg from "../assets/image/bcs-media/logo.svg";

export class Header extends Component {
  render() {
    return (
      <div id="mainmenu-area">
        <div className="header-area header-area-1 home-3-header-area">
          <div className="container">
            <div className="row">
              <div className="col-md-2 col-sm-6 w-50">
                <div className="logo">
                  <Link to="/">
                    <img src={logosvg} alt="" width="70px" />
                  </Link>
                </div>
              </div>
              <div className="col-md-10 col-sm-6 w-50">
                <button id="menu-button">Menu</button>
                <div className="header-signup xs-hidden sm-hidden">
                  <a
                    href="http://system.bcs-media.com/login"
                    className="border-boxed-btn"
                  >
                    Sign Up
                  </a>
                </div>
                <div className="mainmenu sm-hidden xs-hidden">
                  <ul>
                    <li>
                      <NavLink  activeClassName="selected"  to="/home">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink  activeClassName="selected" to="/about">
                        Nosotros
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="selected"  to="/services">
                        Servicios
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="selected" to="/clientes">
                        Clientes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="selected" to="/contact">
                        Contactenos
                      </NavLink>
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
