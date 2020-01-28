import React, { Component } from "react";

export class ClientLogos extends Component {
  render() {
    return (
      <div className="section-padding client-logo-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >

              </h6>
              <div className="owl-carousel client-logo-carousel">
                <div className="single-client-item">
                  <div className="single-client-item-cell">
                    <img src="assets/image/bcs-media/client-logo-1.png" alt="" />
                  </div>
                </div>
                <div className="single-client-item">
                  <div className="single-client-item-cell">
                    <img src="assets/image/bcs-media/client-logo-2.png" alt="" />
                  </div>
                </div>
                <div className="single-client-item">
                  <div className="single-client-item-cell">
                    <img src="assets/image/bcs-media/client-logo-3.png" alt="" />
                  </div>
                </div>
                <div className="single-client-item">
                  <div className="single-client-item-cell">
                    <img src="assets/image/bcs-media/client-logo-4.png" alt="" />
                  </div>
                </div>
                <div className="single-client-item">
                  <div className="single-client-item-cell">
                    <img src="assets/image/bcs-media/client-logo-5.png" alt="" />
                  </div>
                </div>
                <div className="single-client-item">
                  <div className="single-client-item-cell">
                    <img src="assets/image/bcs-media/client-logo-1.png" alt="" />
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

export default ClientLogos;
