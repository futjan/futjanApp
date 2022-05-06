import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SpecialJobs from "../../utils/SpecialJobs";
import Qualification from "../../utils/Qualification";
import LocalJobs from "../../utils/LocalJobs";
import JobCategory from "../../utils/JobCategory";
import Gender from "../../utils/Gender";
import JobType from "../../utils/JobType";
import Loader from "../../utils/Loader";
import SalaryType from "../../utils/SalaryType";
import Countries from "../../utils/Countries";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import { createJob } from "../actions/jobAction";
import { useDispatch, useSelector } from "react-redux";
const adpromotionType = [
  { promote: "FEATURED", numberSort: 1 },
  { promote: "URGENT", numberSort: 2 },
  { promote: "SPOTLIGHT", numberSort: 3 },
  { promote: "ALL", numberSort: 4 },
];
const AddJob = () => {
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [featureRate, setFeatureRate] = useState(100);
  const [promoteType, setPromoteType] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Local Job");
  const [subCategory, setSubCategory] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");

  const [experience, setExperience] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [qualification, setQualification] = useState("");
  const [languages, setLanguages] = useState([""]);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
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

  // initialize hook
  const dispatch = useDispatch();

  // get state from redux
  const errorState = useSelector((state) => state.error);
  const job = useSelector((state) => state.job);
  // useEffect
  useEffect(() => {
    setErrors(errorState);
  }, [errorState]);
  // fileUploadHandler
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

  // create job function
  const createJobFunction = () => {
    const job = {
      title: title.toLowerCase(),
      description,
      gender: gender.toLowerCase(),
      type: type.toLowerCase(),
      category: category.toLowerCase(),
      subCategory: subCategory.toLowerCase(),
      salaryType: salaryType.toLowerCase(),
      experience: experience.toLowerCase(),
      qualification: qualification.toLowerCase(),
      minSalary: minSalary * 1,
      files,
      maxSalary: maxSalary * 1,
      email: email.toLowerCase(),
      city: city.name.toLowerCase(),
      county: county.name.toLowerCase(),
      country: country.name.toLowerCase(),
      contact,
      promoteType: promoteType.filter((type) => type.promote !== "ALL"),
      address,
    };
    dispatch(createJob(job, clearState));
  };

  const clearState = () => {
    setTitle("");
    setDescription("");
    setGender("");
    setType("");
    setCategory("Local Job");
    setSubCategory("");
    setSalaryType("");
    setExperience("");
    setQualification("");
    setMinSalary("");
    setMaxSalary("");
    setEmail("");
    setContact("");
    setAddress("");
    setPromoteType([]);
    setFiles([]);
    setCity({ name: "", stateCode: "", countryCode: "" });
    setCountry({ name: "", isoCode: "", phonecode: "" });
    setCounty({ name: "", isoCode: "" });
  };
  return (
    // <!-- Main Container  -->
    <div
      className="main-container container"
      style={{ position: "relative", margin: "30px auto" }}
    >
      <div className="row">
        <div id="content" className="col-md-11">
          <h2 className="title" style={{ margin: "0" }}>
            Create Job with us
          </h2>

          <form
            action=""
            method="post"
            enctype="multipart/form-data"
            className="form-horizontal account-register clearfix"
          >
            <fieldset id="account">
              <h4 className="post-ad-heading">Job Details</h4>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Job title
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Category
                </label>
                <div className="col-sm-10">
                  <JobCategory
                    category={category}
                    setCategory={setCategory}
                    errors={errors}
                  />
                  {errors &&
                    errors.validation &&
                    errors.validation.category && (
                      <div className="invalid-feedback">
                        {errors.validation.category}
                      </div>
                    )}
                </div>
              </div>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Sub Category
                </label>
                <div className="col-sm-10">
                  {category === "local job" ? (
                    <LocalJobs
                      subCategory={subCategory}
                      setSubCategory={setSubCategory}
                      errors={errors}
                    />
                  ) : (
                    <SpecialJobs
                      subCategory={subCategory}
                      setSubCategory={setSubCategory}
                      errors={errors}
                    />
                  )}
                  {errors &&
                    errors.validation &&
                    errors.validation.subCategory && (
                      <div className="invalid-feedback">
                        {errors.validation.subCategory}
                      </div>
                    )}
                </div>
              </div>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Job type
                </label>
                <div className="col-sm-10">
                  <JobType type={type} setType={setType} errors={errors} />

                  {errors && errors.validation && errors.validation.type && (
                    <div className="invalid-feedback">
                      {errors.validation.type}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Gender
                </label>
                <div className="col-sm-10">
                  <Gender
                    gender={gender}
                    setGender={setGender}
                    errors={errors}
                  />

                  {errors && errors.validation && errors.validation.gender && (
                    <div className="invalid-feedback">
                      {errors.validation.gender}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Salary Type
                </label>
                <div className="col-sm-10">
                  <SalaryType
                    salaryType={salaryType}
                    setSalaryType={setSalaryType}
                    errors={errors}
                  />

                  {errors &&
                    errors.validation &&
                    errors.validation.salaryType && (
                      <div className="invalid-feedback">
                        {errors.validation.salaryType}
                      </div>
                    )}
                </div>
              </div>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Country
                </label>
                <div className="col-sm-10">
                  <Countries setCountry={setCountry} country={country} />
                  {errors && errors.validation && errors.validation.country && (
                    <div className="invalid-feedback">
                      {errors.validation.country}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  County
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
                <label className="col-sm-2 control-label" htmlFor="input-name">
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
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Experience
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="experience"
                    id="input-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Qualification
                </label>
                <div className="col-sm-10">
                  {/* <input
                    type="text"
                    name="name"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    placeholder="qualification"
                    id="input-name"
                    className="form-control"
                  /> */}
                  <Qualification
                    qualification={qualification}
                    setQualification={setQualification}
                    errors={errors}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Contact
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="contact"
                    id="input-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                    id="input-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Address
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="address"
                    id="input-name"
                    className="form-control"
                  />
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
                    // value={keyword}
                    // onChange={(e) => onChangeAutoFieldName(e)}
                    placeholder="keyword (Trending or Top surplus)"
                    id="input-website"
                    className={
                      errors && errors.validation && errors.validation.keyword
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {/* {renderNameSuggustion()} */}
                  {errors && errors.validation && errors.validation.keyword && (
                    <div className="invalid-feedback">
                      {errors.validation.keyword}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Min Salary
                </label>
                <div className="col-sm-10 col-md-5">
                  <input
                    type="number"
                    name="city"
                    value={minSalary}
                    onChange={(e) => setMinSalary(e.target.value)}
                    placeholder="min salary"
                    id="input-website"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Max salary
                </label>
                <div className="col-sm-10 col-md-5">
                  <input
                    type="number"
                    name="city"
                    value={maxSalary}
                    onChange={(e) => setMaxSalary(e.target.value)}
                    placeholder="max Salary"
                    id="input-website"
                    className="form-control"
                  />
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
                              width={100}
                              src={URL.createObjectURL(file)}
                              alt={`uploaded-image-${i}`}
                            />
                          </div>
                        ))
                      : null}
                  </div>
                  {/* {errors && errors.validation && errors.validation.files && (
                   <div className="invalid-feedback">
                     {errors.validation.files}
                   </div>
                 )} */}
                  <input
                    type="file"
                    name="photo"
                    // value=""
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
                                  <MenuItem value={100}>
                                    14 days - 100 INR
                                  </MenuItem>
                                  <MenuItem value={250}>
                                    30 days - 250 INR
                                  </MenuItem>
                                  <MenuItem value={500}>
                                    60 days - 500 INR
                                  </MenuItem>
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
                              7 days - 150 INR
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
                              7 days - 350 INR
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
                  value="Post my ad"
                  className="btn btn-primary"
                  onClick={() => createJobFunction()}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {job.loading === true ? <Loader /> : null}
    </div>
  );
};
export default AddJob;
