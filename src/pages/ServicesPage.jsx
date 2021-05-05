import React, { Component } from "react";
import img1 from "../assets/image/bcs-media/medios.svg";
import img2 from "../assets/image/bcs-media/arrow.svg";
import img3 from "../assets/image/bcs-media/clock.svg";

export default class ServicesPage extends Component {
  render() {
    return (
      <div>
        {/* Start Asset area */}
        {/* <div className="start-section"></div> */}
        <div className="asset-area section-padding asset-bg ovr-h">
          <div className="asset-area-1">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-md-6 col-lg-5 wow fadeInLeft"
                  data-wow-delay="0.2s"
                  data-wow-duration="1s"
                >
                  <div className="home-2-section-title">
                    <div className="home-4-icon">
                      <i className="fal fa-tv" />
                    </div>
                    <h2 className="font-primary">Medios digitales</h2>
                    <p className="txt-book">
                      Estados Unidos Contamos con la exclusividad de diferentes
                      medios en los sectores más comerciales de Nueva York
                      (Brooklyn, Queens, Bronx, Manhattan, Staten Island) y New
                      Jersey, entre otros. Los famosos Coffee Carts de Nueva
                      York son un medio ideal para llegar al consumidor, por lo
                      que contamos con carteleras en el punto de venta, así como
                      de pantallas digitales en “groceries” que son tiendas al
                      por menor en la ciudad de Nueva York. Es así como
                      bcs-media ofrece una estrategia efectiva y directa al
                      consumidor para mostrar tu marca, llegando a miles de
                      consumidores que visitan los groceries diariamente.
                      Guatemala Te ofrecemos una amplia red de pantallas
                      digitales en distintas ubicaciones del país con una gran
                      visión de expansión a corto plazo en centros comerciales,
                      paradas de bus, gasolineras y autofarmacias. Se cuenta con
                      mupis digitales en centros comerciales, así como urban
                      self-service diseñado para exteriores, pantallas digitales
                      (vertical y horizontal) para el interior de farmacias,
                      negocios locales, entre otros.
                    </p>
                    <p>
                      Look at it, but if you have successfully reached your
                      target market, the payoffs will be worth it.
                    </p>
                    <a href="/contact" className="border-boxed-btn">
                      Obtenga su presupuesto <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
                <div
                  className="col-md-6 col-lg-6 offset-lg-1 wow fadeInRight"
                  data-wow-delay="0.4s"
                  data-wow-duration="1s"
                >
                  <div className="asset-img-1">
                    <img src={img1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="asset-area-2 ovr-h">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-delay="0.2s"
                  data-wow-duration="1s"
                >
                  <div className="asset-img-2">
                    <img src={img2} />
                  </div>
                </div>
                <div
                  className="col-lg-5 offset-lg-1 wow fadeInRight"
                  data-wow-delay="0.4s"
                  data-wow-duration="1s"
                >
                  <div className="home-2-section-title">
                    <div className="home-4-icon">
                      <i className="fas fa-play" />
                    </div>
                    <h2 className="font-primary">Diseño y animación</h2>
                    <p>
                      Fuera de los servicios que ofrece nuestra sede central
                      batrescs.com los cuales abarcan diseño gráfico, desarrollo
                      de sitios web, aplicaciones móviles, impresión y otros
                      servicios, en BCS Media nos centramos en diseño gráfico y
                      animación para enfocarnos en que los anuncios de nuestros
                      clientes sean creativos e innovadores lo cual pueda crear
                      una mejor interacción con el consumidor y de esta manera
                      desarrollar un mejor retorno en la inversión de nuestros
                      clientes.
                    </p>
                    <p>
                      Pautas en pantallas digitales Diseño gráfico Animación 3D
                      Animación 2D
                    </p>
                    <a href="/contact" className="border-boxed-btn">
                      Obtenga su presupuesto <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/* asset-area-2 */}

          <div className="asset-area-2 ovr-h">
            <div className="container">
              <div className="row justify-content-center">
                {/* Section3 */}
                <div className="col-md-6 col-lg-5 wow fadeInLeft">
                  <div className="home-2-section-title">
                    <div className="home-4-icon">
                      <i className="far fa-clock" />
                    </div>
                    <h2 className="font-primary">Tiempos de pautas</h2>
                    <p>
                      10 segundos por Spot. 24 Spot por hora. Spot cada 2:50
                      minutos. Máximo 15 clientes en cada pantalla.
                    </p>

                    <a href="/contact" className="border-boxed-btn">
                      Obtenga su presupuesto <i className="far fa-angle-right" />
                    </a>
                  </div>
                </div>

                <div
                  className="col-md-6 col-lg-6 offset-lg-1 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  data-wow-duration="1s"
                >
                  <div className="asset-img-1">
                    <img src={img3} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
      </div>
    );
  }
}
