import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countries from "../../utils/Countries";
import County from "../../utils/County";
import Cities from "../../utils/Cities";
import Loader from "../../utils/Loader";
import { updateSurplus, getSurplusById } from "../actions/surplusAction";

const Days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURADAY",
  "SUNDAY",
];

const adpromotionType = [
  { promote: "FEATURED", numberSort: 1 },
  { promote: "URGENT", numberSort: 2 },
  { promote: "SPOTLIGHT", numberSort: 3 },
  { promote: "ALL", numberSort: 4 },
];

const EditSurplus = (props) => {
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
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");

  const [businessType, setBusinessType] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [weeklySchedule, setWeeklySchedule] = useState([]);
  const [website, setWebsite] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [offeredPrice, setOfferedPrice] = useState(0);
  const [errors, setErrors] = useState({});
  const [suggustion, setSuggustion] = useState([]);
  const [suggustionCities, setSuggustionCities] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [suggustionKeyword, setSuggustionKeyword] = useState([]);
  const [promoteType, setPromoteType] = useState([]);
  const [files, setFiles] = useState([]);

  const [file, setFile] = useState({});
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store

  const errorState = useSelector((state) => state.error);
  const surplus = useSelector((state) => state.surplus);

  // useEffect
  useEffect(() => {
    setErrors(errorState);
  }, [errorState]);
  useEffect(() => {
    if (surplus.surplus._id) {
      setName(surplus.surplus.name);
      setCompany(surplus.surplus.company);
      setContact(surplus.surplus.contact);
      setAddress(surplus.surplus.address);
      setPostCode(surplus.surplus.postCode);
      setCity({ name: surplus.surplus.city, countryCode: "", stateCode: "" });
      setBusinessType(surplus.surplus.businessType);
      setCountry({ name: surplus.surplus.country, isoCode: "", phonecode: "" });
      setCounty({ name: surplus.surplus.county, isoCode: "" });
      setCategory(surplus.surplus.category);
      setDescription(surplus.surplus.description);
      setWebsite(surplus.surplus.website);
      setWeeklySchedule(surplus.surplus.weeklySchedule);
      setOfferedPrice(surplus.surplus.offeredPrice);
      setOriginalPrice(surplus.surplus.originalPrice);
      setKeyword(surplus.surplus.keyword);
      if (surplus.surplus.promoteType) {
        setPromoteType(surplus.surplus.promoteType);
      }
    }
  }, [surplus.surplus && surplus.surplus._id]);

  useEffect(() => {
    dispatch(getSurplusById(props.id));
  }, []);

  // handle onChange AutoComplete field
  const onChangeAutoField = (e) => {
    const value = e.target.value;
    // let suggustions = [];
    // if (value.trim().length > 0) {
    //   const regex = new RegExp(`^${value}`, "i");
    //   suggustions = countryList.sort().filter((v) => regex.test(v));
    // }
    // setCountry(value);
    // setSuggustion([...suggustions]);
  };
  const onChangeAutoFieldCities = (e) => {
    const value = e.target.value;
    // let suggustions = [];
    // if (value.trim().length > 0) {
    //   const regex = new RegExp(`^${value}`, "i");
    //   suggustions = cities.sort().filter((v) => regex.test(v));
    // }
    // setCity(value);
    // setSuggustionCities([...suggustions]);
  };
  // render suggustion
  const renderSuggustion = () => {
    if (suggustion.length === 0) {
      return null;
    }
    return (
      <ul className="autoComplete-ul">
        {suggustion.map((co) => (
          <li
            className="autoComplete-li"
            onClick={() => {
              setCountry(co);
              setSuggustion([]);
            }}
          >
            {co}
          </li>
        ))}
      </ul>
    );
  };
  const renderCitySuggustion = () => {
    if (suggustionCities.length === 0) {
      return null;
    }
    return (
      <ul className="autoComplete-ul">
        {suggustionCities.map((co) => (
          <li
            className="autoComplete-li"
            onClick={() => {
              setCity(co);
              setSuggustionCities([]);
            }}
          >
            {co}
          </li>
        ))}
      </ul>
    );
  };

  // keyword suggustion
  const onChangeAutoFieldName = (e) => {
    const value = e.target.value;
    let suggustions = [];
    if (value.trim().length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      if (surplus.keywords.length > 0) {
        suggustions = surplus.keywords

          .map((v) => v.keyword)
          .filter(
            (keyword, i, keywordArray) => keywordArray.indexOf(keyword) === i
          )
          .sort()
          .filter((v) => regex.test(v));
      }
    }
    setKeyword(value);

    setSuggustionKeyword([...suggustions]);
  };
  const renderNameSuggustion = () => {
    if (suggustionKeyword.length === 0) {
      return null;
    }
    return (
      <ul className="autoComplete-ul" style={{ width: "90%", top: "40px" }}>
        {suggustionKeyword.map((co) => (
          <li
            className="autoComplete-li"
            onClick={() => {
              setKeyword(co);
              setSuggustionKeyword([]);
            }}
            style={{ display: "block", width: "100%" }}
          >
            {co}
          </li>
        ))}
      </ul>
    );
  };

  // handle check box
  const handleCheckBox = (checked, value) => {
    if (checked !== true) {
      const tempArr = weeklySchedule.filter((day) => day !== value);
      setWeeklySchedule([...tempArr]);
    } else {
      const tempArr = [...weeklySchedule];
      tempArr.push(value);

      setWeeklySchedule([
        ...tempArr.filter((value, index, self) => {
          return self.indexOf(value) === index;
        }),
      ]);
    }
  };

  // handle promotion checkBox
  const promoteCheckBoxHandler = (checked, value) => {
    if (checked !== true) {
      if (value.promote === "ALL") {
        setPromoteType([]);
      } else {
        const tempArr = promoteType.filter(
          (promote) => promote.promote !== value.promote
        );
        setPromoteType([...tempArr]);
      }
    } else {
      if (value.promote === "ALL") {
        setPromoteType([
          { promote: "FEATURED", numberSort: 1 },
          { promote: "URGENT", numberSort: 2 },
          { promote: "SPOTLIGHT", numberSort: 3 },
          { promote: "ALL", numberSort: 4 },
        ]);
      } else {
        const tempArr = [...promoteType];
        tempArr.push(value);

        setPromoteType([
          ...tempArr.filter((value, index, self) => {
            return self.indexOf(value) === index;
          }),
        ]);
      }
    }
  };
  // create surplux function
  const createSurplusFunction = (e) => {
    e.preventDefault();

    const obj = {
      id: props.id,
      files,
      surplus: {
        name: name.toLowerCase(),
        company: company.toLowerCase(),
        contact,
        address,
        postCode,
        city: city.name.toLowerCase(),
        businessType: businessType.toLowerCase(),
        description,
        category: category.toLowerCase(),
        country: country.name.toLowerCase(),
        county: county.name.toLowerCase(),
        website,
        keyword: keyword.toLowerCase(),
        weeklySchedule,
        promoteType: promoteType.filter((type) => type.promote !== "ALL"),
        originalPrice: (originalPrice * 1).toFixed(2),
        offeredPrice: (offeredPrice * 1).toFixed(2),

        discount:
          offeredPrice > 0
            ? Math.round(((originalPrice - offeredPrice) / originalPrice) * 100)
            : 0,
      },
    };
    dispatch(updateSurplus(obj, clearState));
  };

  // fileUploadHandler
  const uploadFilesHandler = (e) => {
    if (files.length < 5) {
      const tempFiles = [...files];
      tempFiles.push(e.target.files[0]);
      setFiles([
        ...tempFiles.filter(
          (file, i, filesArray) => filesArray.indexOf(file) === i
        ),
      ]);
    }
  };

  // deleteFileHandler
  const deleteFileHandler = (index) => {
    setFiles([...files.filter((file, i) => i !== index)]);
  };
  // clear state function
  const clearState = () => {
    setFile("");
    setName("");
    setCompany("");
    setContact("");
    setAddress("");
    setPostCode("");
    setCity("");
    setBusinessType("");
    setCountry("");
    setCategory("");
    setDescription("");
    setWebsite("");
    setErrors({});
    setWeeklySchedule([""]);
    setOfferedPrice(0);
    setOriginalPrice(0);
    setKeyword("");
    setPromoteType([]);

    props.setTab("SURPLUS");
  };
  return (
    <div
      className="main-container container"
      style={{ position: "relative", marginTop: "30px" }}
    >
      <div className="row">
        <div id="content" className="col-md-11">
          <h2 className="title">Edit Surplus Business</h2>
          <form
            action=""
            method="post"
            enctype="multipart/form-data"
            className="form-horizontal account-register clearfix"
          >
            <fieldset id="account">
              <h4 className="post-ad-heading">Surplus Business Details</h4>
              {/* <legend></legend> */}
              <div className="form-group">
                {/* <div className="col-sm-2"></div> */}
                {errors && errors.message && (
                  <div className="col-sm-12">
                    <div className="alert alert-danger" role="alert">
                      {errors.message}
                    </div>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-company"
                >
                  Company
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
                <div className="col-sm-10" style={{ position: "relative" }}>
                  <Countries setCountry={setCountry} country={country} />
                  {/* <input
                    type="text"
                    name="city"
                    value={country}
                    // onChange={(e) => setCountry(e.target.value)}
                    onChange={(e) => onChangeAutoField(e)}
                    placeholder="Country"
                    id="input-country"
                    className={
                      errors && errors.validation && errors.validation.country
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  /> */}
                  {errors && errors.validation && errors.validation.country && (
                    <div className="invalid-feedback">
                      {errors.validation.country}
                    </div>
                  )}
                  {/* {renderSuggustion()} */}
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
                  {/* <input
                    type="text"
                    name="city"
                    value={city}
                    // onChange={(e) => setCity(e.target.value)}
                    onChange={(e) => onChangeAutoFieldCities(e)}
                    placeholder="City"
                    id="input-city"
                    className={
                      errors && errors.validation && errors.validation.city
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  /> */}
                  {/* {renderCitySuggustion()} */}
                  {errors && errors.validation && errors.validation.city && (
                    <div className="invalid-feedback">
                      {errors.validation.city}
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
                  {/* <input
                    type="text"
                    name="city"
                    value={city}
                    // onChange={(e) => setCity(e.target.value)}
                    onChange={(e) => onChangeAutoFieldCities(e)}
                    placeholder="City"
                    id="input-city"
                    className={
                      errors && errors.validation && errors.validation.city
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {renderCitySuggustion()} */}
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
                    <option value="Other ">Other </option>
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

              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Weekly Schedule
                </label>
                <div className="col-sm-10">
                  <div className="checkout-content confirm-section">
                    {Days.map((day, i) => (
                      <div className="checkbox check-newsletter">
                        <label htmlFor={day} className="container-checkbox">
                          <input
                            type="checkbox"
                            name={day}
                            value={day}
                            checked={
                              weeklySchedule.indexOf(day) !== -1 ? true : false
                            }
                            id={day}
                            onChange={(e) =>
                              handleCheckBox(e.target.checked, day)
                            }
                          />{" "}
                          {day}
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors &&
                    errors.validation &&
                    errors.validation.weeklySchedule && (
                      <div className="invalid-feedback">
                        {errors.validation.weeklySchedule}
                      </div>
                    )}
                </div>
              </div>
              <h4 className="post-ad-heading">Surplus Details</h4>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    id="input-name"
                    className={
                      errors && errors.validation && errors.validation.name
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.name && (
                    <div className="invalid-feedback">
                      {errors.validation.name}
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
                    id="input-review"
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
                    onChange={(e) => onChangeAutoFieldName(e)}
                    placeholder="keyword (Trending or Top surplus)"
                    id="input-website"
                    className={
                      errors && errors.validation && errors.validation.keyword
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {renderNameSuggustion()}
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
                  htmlFor="input-website"
                >
                  Original Price
                </label>
                <div className="col-sm-10 col-md-5">
                  <input
                    type="number"
                    name="city"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    placeholder="Original Price"
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
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Offered Price
                </label>
                <div className="col-sm-10 col-md-5">
                  <input
                    type="number"
                    name="city"
                    value={offeredPrice}
                    onChange={(e) => setOfferedPrice(e.target.value)}
                    placeholder="Offered Price"
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
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Upload image
                </label>
                <div className="col-sm-10">
                  <div
                    className="form-control"
                    style={{
                      minHeight: "200px",
                      width: "100%",
                      marginBottom: "10px",
                      display: "flex",
                      // alignItems: "center",
                      justifyContent: "start",
                      gap: "10px",
                    }}
                  >
                    {files.length > 0
                      ? files.map((file, i) => (
                          <div
                            style={{
                              width: "100px ",
                              height: "100px",

                              position: "relative",
                              overflow: "hidden",
                            }}
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
                              width={100}
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
                    value=""
                    onChange={(e) => uploadFilesHandler(e)}
                    placeholder="Offered Price"
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
              <h4 className="post-ad-heading">Make your ad stand out!</h4>
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
                    Promote ad option is optional. You can post ad free
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
                          className="container-checkbox border-bottom"
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
                              ? "Have your Ad appear at the top of the category listings for 3, 7 or 14 days."
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
                              14 days-INR 100
                            </span>
                          ) : null}

                          {type.promote === "URGENT" ? (
                            <span
                              style={{
                                float: "right",
                                color: "#e52815",
                                fontWeight: "600",
                              }}
                            >
                              7 days-INR 150
                            </span>
                          ) : null}

                          {type.promote === "SPOTLIGHT" ? (
                            <span
                              style={{
                                float: "right",
                                color: "#52a744",
                                fontWeight: "600",
                              }}
                            >
                              7 days-INR 350
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
                      {promoteType.length > 0
                        ? (promoteType.filter(
                            (type) => type.promote === "FEATURED"
                          ).length > 0
                            ? 100
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
                        : "Free"}
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
                <input
                  type="button"
                  value="Update"
                  className="btn btn-primary"
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
export default EditSurplus;
