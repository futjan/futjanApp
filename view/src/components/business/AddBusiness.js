import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countries from "../../utils/Countries";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import Loader from "../../utils/Loader";
// import SuccessMsg from "../../utils/SuccessMsg";
import Currency from "../../utils/Currency";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createBusiness } from "../actions/businessAction";

const adpromotionType = [
  { promote: "FEATURED", numberSort: 1 },
  { promote: "URGENT", numberSort: 2 },
  { promote: "SPOTLIGHT", numberSort: 3 },
  //{ promote: "ALL", numberSort: 4 },
];

const draftId = new Date();
const AddBusiness = (props) => {
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
  const [businessType, setBusinessType] = useState("");
  const [description, setDescription] = useState("");
  const [offeredPrice, setOfferedPrice] = useState("");
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [promoteType, setPromoteType] = useState([]);
  const [currency, setCurrency] = useState("₹");
  const [draft_id, setDraft_id] = useState(draftId.getTime());
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const errorState = useSelector((state) => state.error);
  const business = useSelector((state) => state.business);
  const draftAd = useSelector((state) => state.draft.draftAd);
  // useEffect
  useEffect(() => {
    setErrors(errorState);
  }, [errorState]);
  // useEffect(() => {
  //   dispatch(getSurplusKeywords());
  // }, []);

  // useEffect save draft run
  useEffect(() => {
    if (draftAd && draftAd.draft_id) {
      if (draftAd && draftAd.country)
        setCountry({
          name: draftAd && draftAd.country,
          isoCode: "",
          phonecode: "",
        });
      if (draftAd && draftAd.county)
        setCounty({
          name: draftAd && draftAd.county,

          isoCode: "",
        });
      if (draftAd && draftAd.city)
        setCity({
          name: draftAd && draftAd.city,
          stateCode: "",
          countryCode: "",
        });
      if (draftAd && draftAd.draft_id) setDraft_id(draftAd && draftAd.draft_id);
      if (draftAd && draftAd.title) setName(draftAd && draftAd.title);
      if (draftAd && draftAd.contact) setContact(draftAd && draftAd.contact);
      if (draftAd && draftAd.address) setAddress(draftAd && draftAd.address);
      if (draftAd && draftAd.postCode) setPostCode(draftAd && draftAd.postCode);
      if (draftAd && draftAd.businessType)
        setBusinessType(draftAd && draftAd.businessType);
      if (draftAd && draftAd.description)
        setDescription(draftAd && draftAd.description);
      if (draftAd && draftAd.promoteType)
        setPromoteType(draftAd && draftAd.promoteType);

      if (draftAd && draftAd.offeredPrice)
        setOfferedPrice(draftAd && draftAd.offeredPrice);
      if (draftAd && draftAd.currency) setCurrency(draftAd && draftAd.currency);
    }
  }, [draftAd && draftAd.draft_id]);
  // set currency when country change
  useEffect(() => {
    if (country.name === "india") {
      setCurrency("₹");
    } else if (country.name === "united kingdom") {
      setCurrency("£");
    }
  }, [country.name]);
  // handle promotion checkBox
  const promoteCheckBoxHandler = (checked, value) => {
    if(checked !== true) setPromoteType([]); else setPromoteType([value]);

    // if (checked !== true) {
      // if (value.promote === "ALL") {
      //   setPromoteType([]);
      // } else {
        // const tempArr = promoteType.filter(
        //   (promote) => promote.promote !== value.promote
        // );
        // setPromoteType([...tempArr]);
        // setPromoteType([]);
      // }
    // } else {
      // if (value.promote === "ALL") {
      //   setPromoteType([
      //     { promote: "FEATURED", numberSort: 1 },
      //     { promote: "URGENT", numberSort: 2 },
      //     { promote: "SPOTLIGHT", numberSort: 3 },
      //     { promote: "ALL", numberSort: 4 },
      //   ]);
      // } else {
        // const tempArr = [...promoteType];
        // tempArr.push(value);

        // setPromoteType([value]);


        // setPromoteType([
        //   ...tempArr.filter((value, index, self) => {
        //     return self.indexOf(value) === index;
        //   }),
        // ]);
      // }
    // }
  };
  // create surplux function
  const createBusinessFunction = (e) => {
    e.preventDefault();
    const date = new Date();
    const obj = {
      title: name.toLowerCase(),

      contact,
      address: address.toLowerCase(),
      postCode,
      files,
      businessType: businessType.toLowerCase(),
      description: description.toLowerCase(),

      city: city.name.toLowerCase(),
      county: county.name.toLowerCase(),
      country: country.name.toLowerCase(),
      keyword: keyword.toLowerCase(),

      promoteType: promoteType.filter((type) => type.promote !== "ALL"),

      offeredPrice: (offeredPrice * 1).toFixed(2),
      currency,
      ad_id: date.getTime(),
      draft_id: draft_id,
      ad_Type: "business",
    };

    dispatch(createBusiness(obj, clearState, setSuccess));
  };
  // save Draft
  // const saveDrafts = () => {
  //   const date = new Date();
  //   const obj = {
  //     title: name.toLowerCase(),
  //     company: company.toLowerCase(),
  //     contact,
  //     address: address.toLowerCase(),
  //     postCode,
  //     businessType: businessType.toLowerCase(),
  //     description: description.toLowerCase(),
  //     category: category.toLowerCase(),
  //     city: city.name.toLowerCase(),
  //     county: county.name.toLowerCase(),
  //     country: country.name.toLowerCase(),
  //     keyword: keyword.toLowerCase(),
  //     website,
  //     promoteType: promoteType.filter((type) => type.promote !== "ALL"),
  //     originalPrice: (originalPrice * 1).toFixed(2),
  //     offeredPrice: (offeredPrice * 1).toFixed(2),
  //     currency,
  //     discount:
  //       offeredPrice > 0
  //         ? Math.round(((originalPrice - offeredPrice) / originalPrice) * 100)
  //         : 0,
  //     draft_id: date.getTime(),
  //     adType: "surplus",
  //   };
  //   dispatch(createDraft(obj));
  // };
  // fileUploadHandler
  const uploadFilesHandler = (e) => {
    if (e.target.files) {
      if (files.length < 5) {
        const tempFiles = [...files];
        for (let i = 0; i < e.target.files.length; i++) {
          tempFiles.push(e.target.files[i]);
        }
        setFiles([
          ...tempFiles.filter(
            (file, i, filesArray) => filesArray.indexOf(file) === i
          ),
        ]);
      }
    }
  };

  // deleteFileHandler
  const deleteFileHandler = (index) => {
    setFiles([...files.filter((file, i) => i !== index)]);
  };
  // clear state function
  const clearState = () => {
    setName("");

    setContact("");
    setAddress("");
    setPostCode("");
    setBusinessType("");
    setCity({ name: "", stateCode: "", countryCode: "" });
    setCountry({ name: "", isoCode: "", phonecode: "" });
    setCounty({ name: "", isoCode: "" });

    setDescription("");

    setErrors({});
    setOfferedPrice("");

    setKeyword("");
    setPromoteType([]);
    setFiles([]);
    setCurrency("");
    const time = new Date();
    setDraft_id(time.getTime());
  };

  const setSuccess = (tit, id) => {
    props.setTitle(tit);
    props.setAdId(id);
    props.successModalFunc();
  };
  return (
    // <!-- Main Container  -->
    <div
      className="main-container container"
      style={{ position: "relative", marginTop: "30px" }}
    >
      {/* {successMsgModal === true ? <SuccessMsg /> : null} */}
      <div className="row">
        <div id="content" className="col-md-11">
          <h2 className="title" style={{ margin: "0" }}>
            Create Business with us
          </h2>

          <form
            method="post"
            encType="multipart/form-data"
            className="form-horizontal account-register clearfix"
          >
            <fieldset id="account">
              <h4 className="post-ad-heading">Contact Details</h4>

              {errors && errors.message && (
                <div className="form-group">
                  <div className="col-sm-12">
                    <div className="alert alert-danger" role="alert">
                      {errors.message}
                    </div>
                  </div>
                </div>
              )}

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
                <div className="col-sm-10" style={{ position: "relative" }}>
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

              <h4 className="post-ad-heading">Business Details</h4>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Name / Company
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
                  htmlFor="input-description"
                >
                  Description
                </label>
                <div className="col-sm-10">
                  <textarea
                    name="city"
                    id="input-description"
                    rows="5"
                    placeholder="Description"
                    className={
                      errors &&
                      errors.validation &&
                      errors.validation.description
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  {errors &&
                    errors.validation &&
                    errors.validation.description && (
                      <div className="invalid-feedback">
                        {errors.validation.description}
                      </div>
                    )}
                </div>
              </div>
              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Keyword
                </label>
                <div className="col-sm-10">
                  <input
                    type="url"
                    name="city"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="keyword (Trending or Top business)"
                    id="input-website"
                    className={
                      errors && errors.validation && errors.validation.keyword
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.keyword && (
                    <div className="invalid-feedback">
                      {errors.validation.keyword}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-currency"
                >
                  Currency
                </label>
                <div className="col-sm-10 col-md-5">
                  <Currency
                    currency={currency}
                    setCurrency={setCurrency}
                    country={country.name}
                    errors={errors}
                  />

                  {errors &&
                    errors.validation &&
                    errors.validation.currency && (
                      <div className="invalid-feedback">
                        {errors.validation.currency}
                      </div>
                    )}
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Offered Price
                </label>
                <div
                  className="col-sm-10 col-md-5"
                  style={{ position: "relative" }}
                >
                  <span className="currency-icon">{currency}</span>
                  <input
                    type="number"
                    name="city"
                    value={offeredPrice}
                    onChange={(e) => setOfferedPrice(e.target.value)}
                    placeholder="Offered Price "
                    className={
                      errors &&
                      errors.validation &&
                      errors.validation.offeredPrice
                        ? "form-control is-invalid currency-container"
                        : "form-control currency-container"
                    }
                  />
                  {errors &&
                    errors.validation &&
                    errors.validation.offeredPrice && (
                      <div className="invalid-feedback">
                        {errors.validation.offeredPrice}
                      </div>
                    )}
                </div>
              </div>
              <div className="form-group ">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Upload image
                </label>
                <div className="col-sm-10">
                  <label
                    className="control-label"
                    style={{
                      fontSize: "15px",
                      marginBottom: "15px",
                      width: "100%",
                      padding: "10px",
                      background: "#fafafa",
                      textDecoration: "underline",
                      border: "1px solid #ddd",
                    }}
                  >
                    <span style={{ fontWeight: "600", fontSize: "16px" }}>
                      Note:{" "}
                    </span>
                    You can add upto 5 images
                  </label>
                  <div>
                    <div
                      className={
                        errors && errors.validation && errors.validation.files
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      style={{
                        height: "100%",
                        width: "100%",
                        marginBottom: "10px",
                        display: "flex",
                        // alignItems: "center",
                        background: "transparent",
                        justifyContent: "start",
                        gap: "10px",
                      }}
                    >
                      {files.length > 0
                        ? files.map((file, i) => (
                            <div
                              style={{
                                width: "180px ",
                                height: "180px",
                                background: "#eee",
                                position: "relative",
                                overflow: "hidden",
                                padding: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              key={i}
                            >
                              <i
                                className="fa fa-times-circle"
                                style={{
                                  position: "absolute",
                                  top: "2px",
                                  right: "6px",
                                  color: "#c82333",
                                  fontSize: "23px",
                                  cursor: "pointer",
                                }}
                                onClick={() => deleteFileHandler(i)}
                              ></i>
                              <img
                                width="100%"
                                src={URL.createObjectURL(file)}
                                alt={`uploaded-image-${i}`}
                              />
                            </div>
                          ))
                        : null}
                    </div>

                    <input
                      type="file"
                      name="photo"
                      multiple
                      value=""
                      onChange={(e) => uploadFilesHandler(e)}
                      placeholder="Offered Price"
                      id="input-website"
                      className={
                        errors && errors.validation && errors.validation.files
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    />

                    {errors && errors.validation && errors.validation.files && (
                      <div className="invalid-feedback">
                        {errors.validation.files}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <h4 className="post-ad-heading">Posting Ad is free currently for FutJan users.</h4>
              <div className="form-group">
                <div className="col-sm-12">
                  <label
                    className="control-label"
                    style={{
                      fontSize: "15px",
                      marginBottom: "15px",
                      width: "100%",
                      padding: "10px",
                      background: "#fafafa",
                      textDecoration: "underline",
                      border: "1px solid #ddd",
                    }}
                  >
                    <span style={{ fontWeight: "600", fontSize: "16px" }}>
                      Note:{" "}
                    </span>
                    Promote your Ad options are optional. You can post Ad free
                  </label>
                  <label
                    className="control-label"
                    style={{ fontSize: "15px", marginBottom: "15px" }}
                  >
                    Select an option to promote your ad
                  </label>
                  <div className="checkout-content confirm-section">
                    {/* {Days.map((day, i) => ( */}
                    <div className="checkbox check-newsletter">
                      {adpromotionType.map((type) => (
                        <label
                          htmlFor={type.promote}
                          className="container-checkbox border-bottom promotion-price"
                        >
                          <span>
                            <input
                              type="checkbox"
                              name="featured"
                              value={type.promote}
                              checked={
                                promoteType.filter(
                                  (promote) => promote.promote === type.promote
                                ).length > 0
                                  ? true
                                  : false
                              }
                              id={type.promote}
                              onChange={(e) => {
                                promoteCheckBoxHandler(e.target.checked, type);
                              }}
                            />{" "}
                            {type.promote !== "ALL" ? (
                              <span
                                className={
                                  type.promote === "FEATURED"
                                    ? "ad-type featured"
                                    : type.promote === "URGENT"
                                    ? "ad-type urgent"
                                    : type.promote === "SPOTLIGHT"
                                    ? "ad-type spotlight"
                                    : "ad-type"
                                }
                              >
                                {type.promote}
                              </span>
                            ) : null}
                            {type.promote === "FEATURED"
                              ? "Have your Ad appear at the top of the category listings for 14, 30 or 60 days."
                              : type.promote === "URGENT"
                              ? "Let people know you want to sell, rent or hire quickly"
                              : type.promote === "SPOTLIGHT"
                              ? "Have your Ad seen on the Futjan homepage!"
                              : "SELECT ALL"}
                            <span className="checkmark"></span>
                          </span>
                          {type.promote === "FEATURED" ? (
                            <span
                              style={{
                                float: "right",
                                color: "#007fb0",
                                fontWeight: "600",
                              }}
                            >
                              <FormControl
                                variant="standard"
                                sx={{ m: 1, minWidth: 130 }}
                              >
                                <Select
                                  labelId="demo-simple-select-standard-label"
                                  id="demo-simple-select-standard"
                                  value={featureRate}
                                  onChange={(e) =>
                                    setFeatureRate(e.target.value * 1)
                                  }
                                  // label="Age"
                                >
                                  <MenuItem value={0}>14 days - Free</MenuItem>
                                  
                                </Select>
                              </FormControl>
                              {/* 14 days-INR 100 */}
                            </span>
                          ) : null}

                          {type.promote === "URGENT" ? (
                            <span
                              style={{
                                float: "right",
                                color: "#e52815",
                                fontWeight: "600",
                                minWidth: "135px",
                              }}
                            >
                              7 days - Free
                            </span>
                          ) : null}

                          {type.promote === "SPOTLIGHT" ? (
                            <span
                              style={{
                                float: "right",
                                color: "#52a744",
                                fontWeight: "600",
                                minWidth: "135px",
                              }}
                            >
                              7 days - Free
                            </span>
                          ) : null}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      overflow: "hidden",
                      color: "#ddd",
                      padding: "6px 15px",
                      background: "#3b5998",
                      width: "100%",
                      marginBottom: "15px",
                      fontSize: "16px",
                    }}
                  >
                    <span style={{ float: "left" }}>Total</span>
                    <span style={{ float: "right" }}>
                      Free
                      {/* {promoteType.length > 0
                        ? (promoteType.filter(
                            (type) => type.promote === "FEATURED"
                          ).length > 0
                            ? featureRate
                            : 0) +
                          (promoteType.filter(
                            (type) => type.promote === "URGENT"
                          ).length > 0
                            ? 150
                            : 0) +
                          (promoteType.filter(
                            (type) => type.promote === "SPOTLIGHT"
                          ).length > 0
                            ? 350
                            : 0) +
                          " INR"
                        : "Free"} */}
                    </span>
                  </div>
                  <label style={{ lineHeight: "16px" }}>
                    By selecting Post My Ad you agree you've read and accepted
                    our{" "}
                    <span
                      style={{ color: "#007fb0", textDecoration: "underline" }}
                    >
                      Terms of Use
                    </span>{" "}
                    and{" "}
                    <span
                      style={{ color: "#007fb0", textDecoration: "underline" }}
                    >
                      Posting Rules
                    </span>
                    . Please see our{" "}
                    <span
                      style={{ color: "#007fb0", textDecoration: "underline" }}
                    >
                      Privacy Notice
                    </span>{" "}
                    for information regarding the processing of your data.
                  </label>
                </div>
              </div>
            </fieldset>

            <div className="buttons">
              <div className="pull-right">
                {/* <Payment /> */}
                <input
                  type="button"
                  value="Post Free Ad"
                  className="btn btn-primary"
                  style={{ color: "#393f00", backgroundColor: "#f6e94d" }}
                  onClick={(e) => createBusinessFunction(e)}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {business.loading === true ? <Loader /> : null}
    </div>
  );
};
export default AddBusiness;
