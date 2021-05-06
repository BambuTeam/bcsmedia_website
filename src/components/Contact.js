import React from "react";
import bcsbk from "../assets/image/bcs-media/contact-bk.svg";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import { Link } from "react-router-dom";

export default function Contact() {


  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_9w8b5b8', 'template_sxqpx16', e.target, 'user_5bDIgYddipK9ipPSncbgw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }
  const mostarAlert = () => {

    swal({
      title: "Gracias por realizar tu contancto",
      text: "Pronto se estaran comunicando contigo, somos Bsc-Media",
      icon: "success",
      timer: 4000
    });

  }
  return (
    <div className="section-padding client-logo-area">
      <div className="contact-area  home-3-contact-area" id="contact-form">
        <div className="container">
          <div className="row justify-content-center aic">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-delay="0.2s"
              data-wow-duration="1s"
            >
              <div className="home-3-contact-area-img">
                <img src={bcsbk} alt="" />
                {/* <img src="assets/image/contact-img-3.png" alt="" /> */}
              </div>
            </div>
            <div
              className="col-lg-5 offset-lg-1 wow fadeInRight"
              data-wow-delay="0.4s"
              data-wow-duration="1s"
            >
              <div className="contact-form">
                <div className="home-3-section-title">
                  <h2>
                    <strong className="font-primary"> Contacto </strong>
                    <p className="font-txt">
                      ¡TRABAJEMOS JUNTOS! <br></br>CONTÁCTANOS{" "}
                    </p>
                  </h2>
                </div>
                <form
                  id="contactForm"
                  data-toggle="validator"
                  className="shake" onSubmit={sendEmail}

                >
                  <p>
                    <label> Name * </label>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Nombre Completo*"
                    />
                  </p>
                  <p>
                    <label> Email * </label>{" "}
                    <input
                      name="email"
                      type="email"
                      id="email"
                      placeholder="contacto@dominio.com*"
                    />
                  </p>{" "}
                  <p>
                    <label> Messages * </label>{" "}
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Messages"
                    ></textarea>{" "}

                    <button
                      type="submit"
                      id="submit"
                      className="boxed-btn font-txt"
                      onClick={() => mostarAlert()}
                      Link='/home'
                    >
                      ENVIAR{" "}
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

