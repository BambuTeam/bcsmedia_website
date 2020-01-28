import React, { Component } from "react";

import img_service_1 from "../assets/image/bcs-media/idea.svg";
import img_service_2 from "../assets/image/bcs-media/premium.svg";
import img_service_3 from "../assets/image/bcs-media/passion.svg";
import img_service_4 from "../assets/image/bcs-media/section.svg";
export class Services extends Component {
  render() {
    return (
      <div className="section-padding service-3-bgi" id="features">
        <div className="container service-3-bg">
          <img src={img_service_4} className="img-section" alt="" width="70px" />
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div
                className="home-3-section-title wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1s"

              >
                <div className="text-title">
                  <h2 className="text-title">
                    <a className="text-book">Nuestros</a> <strong>Valores</strong>
                  </h2>

                </div>
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
                <img src={img_service_1} alt="" />
                <h4>Creatividad</h4>
                <p>
                  El proceso de tener ideas originales que aporten valor es lo que nos caracteriza, resolviendo problemas de una manera original.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
              data-wow-delay="0.4s"
              data-wow-duration="1s"
            >
              <div className="single-service-item home-3-single-service-item">
                <img src={img_service_2} alt="" />
                <h4>Calidad</h4>
                <p>
                  Lo que buscamos en cada uno de nuestros proyectos es exceder las expectativas del cliente siendo muy exigentes con nosotros mismos, incorporando los más altos estándares a cada proyecto.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 wow fadeInRight sm-hidden"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="single-service-item home-3-single-service-item">
                <img src={img_service_3} alt="" />
                <h4>Pasión</h4>
                <p>
                  Es el pilar de nuestra compañía y el motor de nuestro éxito, con nuestro entusiasmo y pasión lograremos resultados extraordinarios en tu empresa.
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
