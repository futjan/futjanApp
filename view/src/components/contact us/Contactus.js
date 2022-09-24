import React from "react";

const Contactus = () => {
  return (
    <div className="container">
      <div className="row">
        <div id="content" className="col-sm-12">
          <div className="info-contact row">
            <div className="col-sm-6 col-xs-12 info-store">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081603.29442044!2d-95.677068!3d37.06250000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1642089667354!5m2!1sen!2s"
                width="500"
                height="350"
                style={{ border: "0", marginTop: "30px" }}
                allowfullscreen=""
                loading="lazy"
                id="map-canvas"
              ></iframe>
              {/* <div id="map-canvas"></div> */}
            </div>

            <div className="col-sm-6 col-xs-12 contact-form">
              <form
                action="#"
                method="post"
                enctype="multipart/form-data"
                className="form-horizontal"
              >
                <fieldset>
                  <legend>
                    <h2>Contact Form </h2>
                  </legend>
                  <p>How can we help you?</p>

                  <div className="form-group required">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        name="name"
                        value=""
                        id="input-name"
                        className="form-control"
                        placeholder="Your Name *"
                      />
                    </div>
                  </div>
                  <div className="form-group required">
                    <div className="col-sm-12">
                      <input
                        type="text"
                        name="email"
                        value=""
                        id="input-email"
                        className="form-control"
                        placeholder="E-Mail Address *"
                      />
                    </div>
                  </div>
                  <div className="form-group required">
                    <div className="col-sm-12">
                      <textarea
                        name="enquiry"
                        rows="10"
                        id="input-enquiry"
                        placeholder="Enquiry *"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </fieldset>
                <div className="buttons">
                  <div className="pull-left">
                    <button className="btn btn-info">
                      <span>Submit </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contactus;
