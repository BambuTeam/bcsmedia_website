import React, { Component } from "react";

import section1 from "../assets/image/bcs-media/section-1.svg";

export class Servicesnew extends Component {
  render() {
    return (
      <div className="features-area padding-100-50 service-3-bgi" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="home-2-section-title">
                <div className="home-4-icon"></div>
                <h2 className="nuestros">
                  Nuestros <strong>valores</strong>
                  <br></br>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div
              className="wow fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1s"
            >
              <div className="single-features-item">
                <div className="features-icon">
                  <img src={section1} className="features-icon-row" alt="" />
                  {/* <i className="far fa-layer-group" /> */}
                </div>
                <div className="features-content">
                  <h4>Creatividad</h4>
                  <p>
                    El proceso de tener ideas originales que aporten valor es lo
                    que nos caracteriza, resolviendo problemas de una manera
                    original.
                  </p>
                  <div className="new1"></div>
                </div>
              </div>
            </div>

            <div
              className="wow fadeInUp"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="single-features-item">
                <div className="features-icon">
                  <img src={section1} className="features-icon-row" alt="" />
                  {/* <i className="fal fa-bolt" /> */}
                </div>
                <div className="features-content">
                  <h4>Calidad</h4>
                  <p>
                    Lo que buscamos en cada uno de nuestros proyectos es exceder
                    las expectativas del cliente siendo muy exigentes con
                    nosotros mismos, incorporando los más altos estándares a
                    cada proyecto.
                  </p>
                  <div className="new1"></div>
                </div>
              </div>
            </div>

            <div
              className="wow fadeInUp"
              data-wow-delay="0.3s"
              data-wow-duration="1s"
            >
              <div className="single-features-item">
                <div className="features-icon">
                  <img src={section1} className="features-icon-row" alt="" />
                  {/* <i className="far fa-bullhorn" /> */}
                </div>
                <div className="features-content">
                  <h4>Pasión</h4>
                  <p>
                    Es el pilar de nuestra compañía y el motor de nuestro éxito,
                    con nuestro entusiasmo y pasión lograremos resultados
                    extraordinarios en tu empresa.
                  </p>
                  <div className="new1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="srv-4-img">
          <img src="assets/image/srv-4-l-t.png" alt="" />
          <img src="assets/image/srv-4-l-b.png" alt="" />
          <img src="assets/image/srv-4-t-r.png" alt="" />
          <img src="assets/image/srv-4-t-r.png" alt="" />
        </div> */}
      </div>
    );
  }
}

export default Servicesnew;
