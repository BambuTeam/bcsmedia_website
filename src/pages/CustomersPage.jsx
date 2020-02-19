import React, { Component } from "react";

export default class MediaPage extends Component {
  render() {
    return (
      <div className="about-6-area ovr-h section-padding">
        <div className="container">
          <div className="row aic">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="about-counterup">
                <div className="title-6">
                  <h4>Pantallas</h4>
                  <h2 className="font-primary">Farmacias Cruz Verde</h2>
                  <p className="text-justify txt-book-plain">
                    Contamos con un promedio de 4 a 5 pantallas digitales en
                    cada farmacia con uno de nuestros socios a nivel nacional.
                    Al ingresar al autoservicio los clientes esperan un promedio
                    de 3 a 4 minutos al realizar su compra lo cual nos permitirá
                    pautar distintos anuncios en donde las personas pondrán la
                    atención en las pantallas digitales. También se tendrán en
                    el interior de las farmacias cruz verde, esto hará que cada
                    farmacia tenga una imagen más innovadora y moderna.{" "}
                  </p>
                </div>

                <div className="row">
                  <div
                    className="col-sm-6 wow fadeInUp"
                    data-wow-delay="0.2s"
                    data-wow-duration="1s"
                  >
                    <div className="single-counter-box">
                      <i className="far fa-user-friends"></i>
                      <p className="counter-number txt-book-plain">
                        <span>500</span> nits
                      </p>
                      <h5>Project Completed</h5>
                    </div>
                  </div>
                  <div
                    className="col-sm-6 wow fadeInUp"
                    data-wow-delay="0.4s"
                    data-wow-duration="1s"
                  >
                    <div className="single-counter-box">
                      <i className="far fa-clone"></i>
                      <p className="counter-number txt-book-plain">
                        <span>42.5</span>"
                      </p>
                      <h5>Happy Clients</h5>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-sm-6 wow fadeInUp"
                    data-wow-delay="0.6s"
                    data-wow-duration="1s"
                  >
                    <div className="single-counter-box">
                      <i className="far fa-carrot"></i>
                      <p>
                        <span>Resolución</span> HD
                      </p>
                      <h5>1,920 x 1,080</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInRight"
              data-wow-delay="0.4s"
              data-wow-duration="1s"
            >
              <div className="about-6-img">
                <img src="assets/image/about-6-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
