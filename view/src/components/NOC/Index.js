import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Countries from "../../utils/Countries";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import Loader from "../../utils/Loader";
import { createNoc } from "../actions/reportAction";
const Index = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [owner, setOwner] = useState("");
  const [reason, setReason] = useState("");
  const [item_id, setItem_id] = useState("");
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
      reason: reason.toLowerCase(),
      item_id: item_id,
      noc_id: date.getTime().toString(),
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
    setReason("");
    setItem_id("");
    setCity({ name: "", stateCode: "", countryCode: "" });
    setCountry({ name: "", isoCode: "", phonecode: "" });
    setCounty({ name: "", isoCode: "" });
    setErrors({});
    setReason("");
    setOwner("");
    setItem_id("");
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
                      errors && errors.validation && errors.validation.owner
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.owner && (
                    <div className="invalid-feedback">
                      {errors.validation.owner}
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
                    placeholder="name"
                    id="input-company"
                    className={
                      errors && errors.validation && errors.validation.title
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.title && (
                    <div className="invalid-feedback">
                      {errors.validation.title}
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
                      errors &&
                      errors.validation &&
                      errors.validation.emailFutjan
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors &&
                    errors.validation &&
                    errors.validation.emailFutjan && (
                      <div className="invalid-feedback">
                        {errors.validation.emailFutjan}
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
                      errors &&
                      errors.validation &&
                      errors.validation.emailAdPoster
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors &&
                    errors.validation &&
                    errors.validation.emailAdPoster && (
                      <div className="invalid-feedback">
                        {errors.validation.emailAdPoster}
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
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-2 control-label required"
                  htmlFor="input-website"
                >
                  Item id (Ad id)
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="item_id"
                    value={item_id}
                    onChange={(e) => setItem_id(e.target.value)}
                    placeholder="Ad id"
                    id="input-item_id"
                    className={
                      errors && errors.validation && errors.validation.item_id
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.item_id && (
                    <div className="invalid-feedback">
                      {errors.validation.item_id}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Reason
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="reason"
                    id="input-reason"
                    className={
                      errors && errors.validation && errors.validation.reason
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.reason && (
                    <div className="invalid-feedback">
                      {errors.validation.reason}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p>
                  I, the undersigned, declare<b> UNDER PENALTY OF PERJURY </b>
                  that:
                </p>
                <ul>
                  <li>
                    <p>
                      {" "}
                      I am the owner, or an agent authorised to act on behalf of
                      the owner, of certain intellectual property rights (“IP
                      Owner”);
                    </p>
                  </li>
                  <li>
                    <p>
                      {" "}
                      I have good faith belief that the listings identified (by
                      item number) above, offer items or contain materials that
                      are not authorised by the IP Owner, its agent, or the law,
                      and therefore infringe the IP Owner’s rights; and
                    </p>
                  </li>
                  <li>
                    <p> The information in this notice is accurate.</p>
                  </li>
                </ul>
                <p>
                  I understand that, when removing items from the site, FutJan
                  will inform ad posters of the specific reason for the removal
                  of their items. FutJan reserves the right to share, in
                  accordance with applicable law, this completed Notice with the
                  third party that originally posted the potentially infringing
                  listing.
                </p>
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
      {/* {report.loading === true ? <Loader /> : null} */}
    </div>
  );
};
export default Index;
