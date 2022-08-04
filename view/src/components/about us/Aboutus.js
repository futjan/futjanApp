import React from "react";
import { Link } from "react-router-dom";
function Aboutus() {
  return (
    <div
      id="wrapper"
      className="wrapper-fluid banners-effect-5"
      style={{ margin: "30px 0" }}
    >
      <div className="main-container container">
        <ul className="breadcrumb">
          <li>
            <Link to="/">
              <i className="fa fa-home"></i>
            </Link>
          </li>

          <li>
            <Link to="/about-us" href="#">
              About Us
            </Link>
          </li>
        </ul>

        <div className="row">
          <div id="content" className="col-sm-12">
            <div className="about-us about-demo-4">
              <div className="row">
                <div className="col-lg-6 col-md-6 about-us-content">
                  <div className="content-about">
                    <h2 className="about-title">About Us</h2>
                    {/* <img src="image/catalog/demo/about/about-us-demo4.jpg" alt="About Us"> */}
                    <p className="description-about">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim. Donec pede justo, fringilla vel, aliquet nec,
                      vulputate eget, arcu.
                      <br /> Lorem ipsum dolor sit amet, consectetuer adipiscing
                      elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
                      sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem. Nulla consequat massa
                      quis enim. Donec pede justo, fringilla vel, aliquet nec
                      vulputate{" "}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 faq-about-us">
                  <h2 className="about-title">Faqs</h2>
                  <div className="content-faq">
                    <div
                      id="accordion"
                      role="tablist"
                      aria-multiselectable="true"
                    >
                      <div className="panel">
                        <div className="panel-head" role="tab" id="headingOne">
                          <h4 className="panel-title">
                            {" "}
                            <a
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                              className="collapsed"
                            >
                              {" "}
                              <span>Etharums ser quidem rerum?</span>{" "}
                            </a>{" "}
                          </h4>{" "}
                        </div>
                        <div
                          id="collapseOne"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                          aria-expanded="false"
                          style={{ height: "0px" }}
                        >
                          <div className="panel-body">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu.Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="panel-head" role="tab" id="headingTwo">
                          <h4 className="panel-title">
                            {" "}
                            <a
                              className=""
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseTwo"
                              aria-expanded="true"
                              aria-controls="collapseTwo"
                            >
                              {" "}
                              <span>Lorem ipsum dolor sit amet?</span>{" "}
                            </a>{" "}
                          </h4>{" "}
                        </div>
                        <div
                          id="collapseTwo"
                          className="panel-collapse collapse in"
                          role="tabpanel"
                          aria-labelledby="headingTwo"
                          aria-expanded="true"
                        >
                          <div className="panel-body">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu.Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div
                          className="panel-head"
                          role="tab"
                          id="headingThree"
                        >
                          <h4 className="panel-title">
                            {" "}
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              {" "}
                              <span>
                                Nam vitae felis pretium, euismod ipsum nec?
                              </span>{" "}
                            </a>{" "}
                          </h4>{" "}
                        </div>
                        <div
                          id="collapseThree"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingThree"
                          aria-expanded="false"
                          style={{ height: "0px" }}
                        >
                          <div className="panel-body">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu.Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="panel-head" role="tab" id="headingFour">
                          <h4 className="panel-title">
                            {" "}
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              {" "}
                              <span>
                                Quisque posuere dolor in malesuada?
                              </span>{" "}
                            </a>{" "}
                          </h4>{" "}
                        </div>
                        <div
                          id="collapseFour"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingFour"
                          aria-expanded="false"
                          style={{ height: "0px" }}
                        >
                          <div className="panel-body">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu.Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="panel-head" role="tab" id="headingFive">
                          <h4 className="panel-title">
                            {" "}
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              {" "}
                              <span>
                                Quisque posuere dolor in malesuada?
                              </span>{" "}
                            </a>{" "}
                          </h4>{" "}
                        </div>
                        <div
                          id="collapseFive"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingFive"
                          aria-expanded="false"
                          style={{ height: "0px" }}
                        >
                          <div className="panel-body">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu.Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus.{" "}
                          </div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="panel-head" role="tab" id="headingSix">
                          <h4 className="panel-title">
                            {" "}
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              {" "}
                              <span>Lorem ipsum dolor sit amet?</span>{" "}
                            </a>{" "}
                          </h4>{" "}
                        </div>
                        <div
                          id="collapseSix"
                          className="panel-collapse collapse"
                          role="tabpanel"
                          aria-labelledby="headingSix"
                          aria-expanded="false"
                          style={{ height: "0px" }}
                        >
                          <div className="panel-body">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu.Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis
                            dis parturient montes, nascetur ridiculus mus.{" "}
                          </div>
                        </div>
                      </div>
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
export default Aboutus;
