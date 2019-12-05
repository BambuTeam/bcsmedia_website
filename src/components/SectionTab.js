import React, { Component } from "react";

export class SectionTab extends Component {
  render() {
    return (
      <div className="home-3-tab-section padding-bottom" id="services">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div
                className="home-3-section-title wow fadeInUp"
                data-wow-delay="0.2s"
                data-wow-duration="1s"
              >
                <h2>
                  We determined that you're our <strong>target audience</strong>
                </h2>
                <p>
                  Marketers usually focus their efforts responsible for making
                  the purchase.
                </p>
              </div>
            </div>
          </div>

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
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      1. Mobile Apps Development
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
                      2. Web Development
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
                      3. Digital Marketing
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
                    <div className="col-lg-6">
                      <div className="home-3-section-title">
                        <h2>
                          We turn your idea in <strong>mobile apps.</strong>
                        </h2>
                        <p>
                          If you are looking for great ways to decorate your
                          home or office, then you know as well as I do that you
                          have nearly countless options. There are so many ways
                          to decorate.
                        </p>
                        <a href="" className="white border-boxed-btn">
                          Get Estimated Price
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="home-3-tab-img">
                        <img src="assets/image/home-3-tab.png" alt="" />
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
                          We turn your idea in <strong>mobile apps.</strong>
                        </h2>
                        <p>
                          If you are looking for great ways to decorate your
                          home or office, then you know as well as I do that you
                          have nearly countless options. There are so many ways
                          to decorate.
                        </p>
                        <a href="" className="white border-boxed-btn">
                          Get Estimated Price
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="home-3-tab-img">
                        <img src="assets/image/home-3-tab.png" alt="" />
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
                    <div className="col-lg-6">
                      <div className="home-3-section-title">
                        <h2>
                          We turn your idea in <strong>mobile apps.</strong>
                        </h2>
                        <p>
                          If you are looking for great ways to decorate your
                          home or office, then you know as well as I do that you
                          have nearly countless options. There are so many ways
                          to decorate.
                        </p>
                        <a href="" className="white border-boxed-btn">
                          Get Estimated Price
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="home-3-tab-img">
                        <img src="assets/image/home-3-tab.png" alt="" />
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