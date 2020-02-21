import React, { Component } from "react";

import screen from "../assets/image/home/screen.png";
import system from "../assets/image/bcs-media/system.svg";
import logosystem from "../assets/image/bcs-media/systembcs.svg";

export class SectionTab extends Component {
  render() {
    return (
      <div id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div
                className="home-3-section-title wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                <h3 className="txt-title-section">
                  <strong>
                    En cada proyecto han sido algunos de los valores <br></br>{" "}
                    con los que definimos nuestros años de trayectoria.
                  </strong>
                  <div className="line"></div>
                  <div className="new2"></div>
                </h3>
              </div>
            </div>
          </div>
          <br></br>

          <div className="row">
            <div className="col-lg-12">
              <div
                className="home-3-tab-list wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      <div className="tab-service">
                        <b>Pantallas digitales</b>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <b>Especificaciones</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <b>Bcs-media</b> system
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-lg-8 d-flex align-items-center">
                      <div className="text-title">
                        <h2>Pantallas digitales</h2>
                        <br></br>
                        <p className="txt-pdigitales">
                          Independientemente de la cantidad de pantallas
                          digtales que necesites manejar, ahora todo es más
                          fácil de administrar a través de las capacidades
                          optimizadas y centralizadas de la solición basada en
                          la red que reúne todo en un formato simplificado, y
                          ademásle brinda una administración de supervisión
                          completa de sus implementaciones de contenido.{" "}
                        </p>
                        <p className="txt-pdigitales">
                          Además, mejora la creación, gestión y dinámica del
                          contenido, que anteriormente era complejo, y procesa
                          todas esas funciones en una rutina. <br></br>
                          Básicamente nos permite involucrar a los clientes de
                          manera más rápida y con menos esfuerzo.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="home-3-tab-img">
                        <img src={screen} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="home-3-section-title">
                        <h2>
                          Video <strong>Especificaciones</strong>
                        </h2>
                        <br></br>
                        <p>
                          <p>
                            Formatos: <strong>.mp4, .avi, .mkv, .mpg</strong>{" "}
                          </p>
                          <p>
                            Resolución:{" "}
                            <strong>1920x1080 o 1080x1920 px</strong>
                          </p>
                          <p>
                            Duración: <strong>10 segundos</strong>
                          </p>
                          <p>
                            Peso máximo: <strong>15 Mb</strong>
                          </p>
                        </p>
                        <h2>
                          <strong>Imágenes</strong>
                        </h2>
                        <br></br>
                        <p>
                          <p>
                            Formatos: <strong>.png, jpg, .jpeg</strong>{" "}
                          </p>
                          <p>
                            Resolución:{" "}
                            <strong>1920x1080 o 1080x1920 px</strong>
                          </p>
                          <p>
                            Peso máximo: <strong> 5 Mb</strong>
                          </p>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6 animated zoomInUp delay-1s">
                      <div className="home-3-tab-img">
                        <img src={logosystem} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row">
                    <div className="col-lg-6 d-flex align-items-center">
                      <div className="home-3-section-title">
                        <h2>
                          bcs-<strong>media web</strong>
                        </h2>
                        <p>
                          Sistema avanzado, creado para facilitar la gestión de
                          pautas y llevar un control organizado y esquemático de
                          los clientes.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="home-3-tab-img">
                        <img src={system} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionTab;
