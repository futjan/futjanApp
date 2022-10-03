import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countries from "../../utils/Countries";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import Loader from "../../utils/Loader";
import { createNoc } from "../actions/reportAction";
const Index = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [owner, setOwner] = useState("");
  const [emailAdPoster, setEmailAdPoster] = useState("");
  const [emailFutjan, setEmailFutjan] = useState("");

  const [city, setCity] = useState({
    name: "",
    stateCode: "",
    countryCode: "",
  });
  const [country, setCountry] = useState({
    name: "",
    isoCode: "",
    phonecode: "",
  });
  const [county, setCounty] = useState({
    name: "",
    isoCode: "",
  });
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState({});
  // initialize hook
  const dispatch = useDispatch();
  const errorState = useSelector((state) => state.error);
  const report = useSelector((state) => state.report);
  useEffect(() => {
    setErrors(errorState);
  }, [errorState]);

  const createNocFunc = (e) => {
    e.preventDefault();
    const date = new Date();
    const obj = {
      title: name.toLowerCase(),
      owner: owner.toLowerCase(),
      contact,
      address: address.toLowerCase(),
      postCode,
      city: city.name.toLowerCase(),
      emailAdPoster: emailAdPoster.toLowerCase(),
      emailFutjan: emailFutjan.toLowerCase(),
      county: county.name.toLowerCase(),
      country: country.name.toLowerCase(),
      website: website.toLowerCase(),
      noc_id: date.getTime(),
    };
    dispatch(createNoc(obj, clearState));
  };

  const clearState = () => {
    setName("");
    setContact("");
    setAddress("");
    setWebsite("");
    setEmailAdPoster("");
    setEmailFutjan("");
    setPostCode("");
    setCity({ name: "", stateCode: "", countryCode: "" });
    setCountry({ name: "", isoCode: "", phonecode: "" });
    setCounty({ name: "", isoCode: "" });
    setErrors({});
  };

  return (
    // <!-- Main Container  -->
    <div className="main-container container mt-6 mb-6 position-relative  p-6">
      {/* {successMsgModal === true ? <SuccessMsg /> : null} */}
      <div className="row">
        <div id="content" className="col-md-11">
          <h2 className="title m-0">NOTICE OF CLAIMED INFRINGEMENT</h2>

          <form
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal account-register clearfix"
          >
            <fieldset id="account">
              <h4 className="post-ad-heading">
                ATTN: FutJan Notice and Take down Program
              </h4>
              {/* <legend></legend> */}
              {/* <div className="col-sm-2"></div> */}
              {errors && errors.message && (
                <div className="form-group">
                  <div className="col-sm-12">
                    <div className="alert alert-danger" role="alert">
                      {errors.message}
                    </div>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-company"
                >
                  Intellectual Property Owner:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="owner"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
                    placeholder="owner"
                    id="input-company"
                    className={
                      errors && errors.validation && errors.validation.company
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.company && (
                    <div className="invalid-feedback">
                      {errors.validation.company}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-company"
                >
                  Name / Title
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="company"
                    id="input-company"
                    className={
                      errors && errors.validation && errors.validation.company
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.company && (
                    <div className="invalid-feedback">
                      {errors.validation.company}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-telephone"
                >
                  Contact
                </label>
                <div className="col-sm-10">
                  <input
                    type="tel"
                    name="telephone"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Contact"
                    id="input-telephone"
                    className={
                      errors && errors.validation && errors.validation.contact
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.contact && (
                    <div className="invalid-feedback">
                      {errors.validation.contact}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-address"
                >
                  Address
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    id="input-telephone"
                    className={
                      errors && errors.validation && errors.validation.address
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.address && (
                    <div className="invalid-feedback">
                      {errors.validation.address}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-postCode"
                >
                  Post Code
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="postcode"
                    value={postCode}
                    onChange={(e) => setPostCode(e.target.value)}
                    placeholder="Post code"
                    id="input-postcode"
                    className={
                      errors && errors.validation && errors.validation.postCode
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors &&
                    errors.validation &&
                    errors.validation.postCode && (
                      <div className="invalid-feedback">
                        {errors.validation.postCode}
                      </div>
                    )}
                </div>
              </div>
              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-country"
                >
                  Country
                </label>
                <div className="col-sm-10 position-relative">
                  <Countries setCountry={setCountry} country={country} />
                  {errors && errors.validation && errors.validation.country && (
                    <div className="invalid-feedback">
                      {errors.validation.country}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-city">
                  State / County
                </label>
                <div className="col-sm-10">
                  <County
                    country={country}
                    setCounty={setCounty}
                    county={county}
                  />
                  {errors && errors.validation && errors.validation.county && (
                    <div className="invalid-feedback">
                      {errors.validation.county}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-city">
                  City
                </label>
                <div className="col-sm-10">
                  <Cities
                    setCity={setCity}
                    county={county}
                    country={country}
                    city={city}
                  />
                  {errors && errors.validation && errors.validation.city && (
                    <div className="invalid-feedback">
                      {errors.validation.city}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Email (for correspondence with FutJan):
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="emailFutjan"
                    value={emailFutjan}
                    onChange={(e) => setEmailFutjan(e.target.value)}
                    placeholder="email"
                    className={
                      errors && errors.validation && errors.validation.website
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.website && (
                    <div className="invalid-feedback">
                      {errors.validation.website}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Email (to be given to FutJan ad poster):
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="emailAdPoster"
                    value={emailAdPoster}
                    onChange={(e) => setEmailAdPoster(e.target.value)}
                    placeholder="email"
                    className={
                      errors && errors.validation && errors.validation.website
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.website && (
                    <div className="invalid-feedback">
                      {errors.validation.website}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  website
                </label>
                <div className="col-sm-10">
                  <input
                    type="url"
                    name="city"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="website"
                    id="input-website"
                    className={
                      errors && errors.validation && errors.validation.website
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.website && (
                    <div className="invalid-feedback">
                      {errors.validation.website}
                    </div>
                  )}
                </div>
              </div>
            </fieldset>

            <div className="buttons">
              <div className="pull-right">
                {/* <Payment /> */}
                <input
                  type="button"
                  value="Submit"
                  className="btn btn-primary post-free-ad-btn"
                  onClick={(e) => createNocFunc(e)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {report.loading === true ? <Loader /> : null}
    </div>
  );
};
export default Index;
