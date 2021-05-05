import React, { Component } from "react";
import img1 from "../assets/image/bcs-media/history.svg";
import img2 from "../assets/image/bcs-media/img-aboutus.svg";
import img3 from "../assets/image/bcs-media/values.svg";
import img4 from "../assets/image/bcs-media/what.svg";

export default class History extends Component {
  render() {
    return (
      <div className="service-tab section-padding relative">
        <br></br>
        <div />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div
                className="section-title wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                <div className="home-3-hero-title">
                <h1
                  className="wow fadeInUp"
                  data-wow-delay="0.5s"
                  data-wow-duration="1s"
                >
                  <strong className="font-primary color-primary">Historia</strong>
                  
                </h1>
                </div>
                <p>
                bcs-media nace dentro de la innovación de Batres Creative Solutions en la Ciudad de Nueva York. Desde 1996 fuimos evolucionando con los servicios que ofreciamos a nuestros clientes, comenzando en ser una agencia de diseño gráfico hasta llegar a ofrecer impresión, desarrollo de sitios web y aplicaciones móviles. En el 2006 decidimos darle un nuevo valor agregado por lo cual se creó bcs-media siendo una agencia de medios publicitarios para que nuestros clientes puedan dar a conocer sus servicios teniendo una diversidad de opciones para poder pautarse.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
