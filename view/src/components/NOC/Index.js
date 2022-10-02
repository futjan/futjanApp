import React from "react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countries from "../../utils/Countries";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import Loader from "../../utils/Loader";
const Index = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [featureRate, setFeatureRate] = useState(100);
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

  const errorState = useSelector((state) => state.error);

  useEffect(() => {
    setErrors(errorState);
  }, [errorState]);
  return (
    // <!-- Main Container  -->
    <div className="main-container container mt-6 position-relative">
      {/* {successMsgModal === true ? <SuccessMsg /> : null} */}
      <div className="row">
        <div id="content" className="col-md-11">
          <h2 className="title m-0">Create Surplus with us</h2>

          <form
            action=""
            method="post"
            encType="multipart/form-data"
            className="form-horizontal account-register clearfix"
          >
            <fieldset id="account">
              <h4 className="post-ad-heading">Surplus Business Details</h4>
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
                  Name / Company
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
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

              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-businessType"
                >
                  Business Type
                </label>
                <div className="col-sm-10">
                  <select
                    className={
                      errors &&
                      errors.validation &&
                      errors.validation.businessType
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    onChange={(e) => setBusinessType(e.target.value)}
                    value={businessType}
                  >
                    <option value="">Choose type</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Beverage Shop">Beverage Shop</option>
                    <option value="Convenience store">Convenience store</option>
                    <option value="Cafe">Cafe</option>
                    <option value="Fruit/Vegetable store">
                      Fruit/Vegetable store
                    </option>
                    <option value="Hotel">Hotel</option>
                    <option value="Pastry shop">Pastry shop</option>
                    <option value="Producers/Manufacturers">
                      Producers/Manufacturers
                    </option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Supermarkets">Supermarkets</option>
                    <option value="Takeaway">Takeaway</option>
                    <option value="Wholesalers">Wholesalers</option>
                    <option value="Cafe">Cafe</option>
                    <option value="Other">Other </option>
                  </select>

                  {errors &&
                    errors.validation &&
                    errors.validation.businessType && (
                      <div className="invalid-feedback">
                        {errors.validation.businessType}
                      </div>
                    )}
                </div>
              </div>

              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-category"
                >
                  Category
                </label>

                <div className="col-sm-10">
                  <select
                    className={
                      errors && errors.validation && errors.validation.category
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  >
                    <option value="">Choose Category</option>
                    <option value="Baked Goods">Baked Goods</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Meals">Meals</option>
                    <option value="Other">Other</option>
                  </select>

                  {errors &&
                    errors.validation &&
                    errors.validation.category && (
                      <div className="invalid-feedback">
                        {errors.validation.category}
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
              <h4 className="post-ad-heading">Surplus Details</h4>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Title Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Title Name"
                    id="input-name"
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
            </fieldset>

            <div className="buttons">
              <div className="pull-right">
                {/* <Payment /> */}
                <input
                  type="button"
                  value="Post Free Ad"
                  className="btn btn-primary post-free-ad-btn"
                  onClick={(e) => createSurplusFunction(e)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {surplus.loading === true ? <Loader /> : null}
    </div>
  );
};
export default Index;
