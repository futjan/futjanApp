import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createContact } from "../actions/contactAction";
import Loader from "../../utils/Loader";
const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  // get state from store
  const contact = useSelector((state) => state.contact);
  // initialize hook
  const dispatch = useDispatch();

  const createContactFunc = (e) => {
    e.preventDefault();
    const obj = {
      name: name.toLowerCase(),
      email: email.toLowerCase(),
      description: description.toLowerCase(),
    };
    dispatch(createContact(obj, clearState));
  };

  const clearState = () => {
    setName("");
    setEmail("");
    setDescription("");
  };
  return (
    <div className="container">
      <div className="row">
        <div id="content" className="col-sm-12">
          <div className="info-contact row">
            <div className="col-sm-6 col-xs-12 info-store">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4296073.924893443!2d78.04994088272002!3d22.73370361492016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2s!4v1664474130440!5m2!1sen!2s"
                width="500"
                height="350"
                style={{ border: "0", marginTop: "30px" }}
                allowfullscreen=""
                loading="lazy"
                id="map-canvas"
              ></iframe>
            </div>

            <div className="col-sm-6 col-xs-12 contact-form">
              <form className="form-horizontal">
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        placeholder="Your Name *"
                      />
                    </div>
                  </div>
                  <div className="form-group required">
                    <div className="col-sm-12">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enquiry *"
                        className="form-control"
                      ></textarea>
                    </div>
                  </div>
                </fieldset>
                <div className="buttons">
                  <div className="pull-left">
                    <button
                      className="btn btn-info"
                      onClick={(e) => createContactFunc(e)}
                    >
                      <span>Submit </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {contact.loading === true ? <Loader /> : null}
    </div>
  );
};
export default Contactus;
