import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import countryList from "../../utils/countriesList";
import cities from "../../utils/cities";
import Loader from "../../utils/Loader";
import { createSurplus, getSurplusKeywords } from "../actions/surplusAction";
const Days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURADAY",
  "SUNDAY",
];

const AddSurplusBusiness = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [weeklySchedule, setWeeklySchedule] = useState([]);
  const [website, setWebsite] = useState("");
  const [keyword, setKeyword] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [offeredPrice, setOfferedPrice] = useState(0);
  const [errors, setErrors] = useState({});
  const [suggustion, setSuggustion] = useState([]);
  const [suggustionKeyword, setSuggustionKeyword] = useState([]);

  const [suggustionCities, setSuggustionCities] = useState([]);
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
    dispatch(getSurplusKeywords());
  }, []);
  // handle onChange AutoComplete field
  const onChangeAutoField = (e) => {
    const value = e.target.value;
    let suggustions = [];
    if (value.trim().length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggustions = countryList.sort().filter((v) => regex.test(v));
    }
    setCountry(value);
    setSuggustion([...suggustions]);
  };
  const onChangeAutoFieldCities = (e) => {
    const value = e.target.value;
    let suggustions = [];
    if (value.trim().length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggustions = cities.sort().filter((v) => regex.test(v));
    }
    setCity(value);
    setSuggustionCities([...suggustions]);
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

  // create surplux function
  const createSurplusFunction = (e) => {
    e.preventDefault();

    const obj = {
      name: name.toLowerCase(),
      company: company.toLowerCase(),
      contact,
      address,
      postCode,
      city: city.toLowerCase(),
      businessType: businessType.toLowerCase(),
      description,
      category: category.toLowerCase(),
      country: country.toLowerCase(),
      keyword: keyword.toLowerCase(),
      website,
      weeklySchedule,
      originalPrice: (originalPrice * 1).toFixed(2),
      offeredPrice: (offeredPrice * 1).toFixed(2),
      discount:
        offeredPrice > 0
          ? Math.round(((originalPrice - offeredPrice) / originalPrice) * 100)
          : 0,
    };
    dispatch(createSurplus(obj, clearState));
  };
  // clear state function
  const clearState = () => {
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
  };
  return (
    // <!-- Main Container  -->
    <div
      class="main-container container"
      style={{ position: "relative", marginTop: "30px" }}
    >
      <div class="row">
        <div id="content" class="col-md-9">
          <h2 class="title">Add Surplus business with us</h2>

          <form
            action=""
            method="post"
            enctype="multipart/form-data"
            class="form-horizontal account-register clearfix"
          >
            <fieldset id="account">
              <legend>Surplus Business Details</legend>
              <div className="form-group">
                {/* <div className="col-sm-2"></div> */}
                {errors && errors.message && (
                  <div className="col-sm-12">
                    <div class="alert alert-danger" role="alert">
                      {errors.message}
                    </div>
                  </div>
                )}
              </div>
              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-name">
                  Name
                </label>
                <div class="col-sm-10">
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
              <div class="form-group">
                <label class="col-sm-2 control-label" htmlFor="input-company">
                  Company
                </label>
                <div class="col-sm-10">
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

              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-telephone">
                  Contact
                </label>
                <div class="col-sm-10">
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

              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-address">
                  Address
                </label>
                <div class="col-sm-10">
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
              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-postCode">
                  Post Code
                </label>
                <div class="col-sm-10">
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
              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-city">
                  City
                </label>
                <div class="col-sm-10">
                  <input
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
                  {renderCitySuggustion()}
                  {errors && errors.validation && errors.validation.city && (
                    <div className="invalid-feedback">
                      {errors.validation.city}
                    </div>
                  )}
                </div>
              </div>
              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-country">
                  Country
                </label>
                <div class="col-sm-10" style={{ position: "relative" }}>
                  <input
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
                  />
                  {errors && errors.validation && errors.validation.country && (
                    <div className="invalid-feedback">
                      {errors.validation.country}
                    </div>
                  )}
                  {renderSuggustion()}
                </div>
              </div>
              <div class="form-group required">
                <label
                  class="col-sm-2 control-label"
                  htmlFor="input-businessType"
                >
                  Business Type
                </label>
                <div class="col-sm-10">
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

              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-category">
                  Category
                </label>

                <div class="col-sm-10">
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
              <div class="form-group required">
                <label
                  class="col-sm-2 control-label"
                  htmlFor="input-description"
                >
                  Description
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    name="city"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="description"
                    id="input-description"
                    className={
                      errors &&
                      errors.validation &&
                      errors.validation.description
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors &&
                    errors.validation &&
                    errors.validation.description && (
                      <div className="invalid-feedback">
                        {errors.validation.description}
                      </div>
                    )}
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-2 control-label" htmlFor="input-website">
                  website
                </label>
                <div class="col-sm-10">
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
              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-website">
                  Keyword
                </label>
                <div class="col-sm-10">
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
              <div class="form-group required">
                <label class="col-sm-2 control-label" htmlFor="input-website">
                  Original Price
                </label>
                <div class="col-sm-10 col-md-5">
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
              <div class="form-group">
                <label class="col-sm-2 control-label" htmlFor="input-website">
                  Offered Price
                </label>
                <div class="col-sm-10 col-md-5">
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
                <label class="col-sm-2 control-label" htmlFor="input-website">
                  Weekly Schedule
                </label>
                <div class="col-sm-10">
                  <div class="checkout-content confirm-section">
                    {Days.map((day, i) => (
                      <div class="checkbox check-newsletter">
                        <label htmlFor={day}>
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
            </fieldset>

            <div class="buttons">
              <div class="pull-right">
                <input
                  type="button"
                  value="Create"
                  class="btn btn-primary"
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
export default AddSurplusBusiness;
