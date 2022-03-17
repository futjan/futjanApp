import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import SpecialJobs from "../../utils/SpecialJobs";
import LocalJobs from "../../utils/LocalJobs";
import JobCategory from "../../utils/JobCategory";
import Countries from "../../utils/Countries";
import Gender from "../../utils/Gender";
import JobType from "../../utils/JobType";
import Loader from "../../utils/Loader";
import SalaryType from "../../utils/SalaryType";
import { createJob } from "../actions/jobAction";
import { useDispatch, useSelector } from "react-redux";
const adpromotionType = [
  { promote: "FEATURED", numberSort: 1 },
  { promote: "URGENT", numberSort: 2 },
  { promote: "SPOTLIGHT", numberSort: 3 },
  { promote: "ALL", numberSort: 4 },
];
const AddJobSeeker = () => {
  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [featureRate, setFeatureRate] = useState(100);
  const [promoteType, setPromoteType] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Local Job");
  const [subCategory, setSubCategory] = useState("");
  const [rate, setRate] = useState("");
  const [gender, setGender] = useState("");

  const [experience, setExperience] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [qualification, setQualification] = useState("");
  const [languages, setLanguages] = useState([]);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
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
      jobTitle: title.toLowerCase(),
      description,
      name: name.toLowerCase(),
      gender: gender.toLowerCase(),
      category: category.toLowerCase(),
      subCategory: subCategory.toLowerCase(),
      salaryType: salaryType.toLowerCase(),
      experience: experience.toLowerCase(),
      qualification: qualification.toLowerCase(),
      rate: rate * 1,
      files,
      email: email.toLowerCase(),
      contact,
      promoteType: promoteType.filter((type) => type.promote !== "ALL"),
      country: country.toLowerCase(),
      skills,
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
  };

  const handleSkills = () => {
    if (skill.length > 0) {
      const tempArr = [...skills];
      tempArr.push(skill);
      setSkills([...tempArr]);
      setSkill("");
    }
  };
  const handleSkillRemove = (id) => {
    const tempArr = [...skills];
    setSkills([...tempArr.filter((skill, i) => i !== id)]);
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
            Create Job Seeker
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
                  Name
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
                  {category === "Local Job" ? (
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
                </div>
              </div>
              <div className="form-group required">
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
              <div className="form-group required">
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Qualification
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                    placeholder="qualification"
                    id="input-name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group required">
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
              <div className="form-group required">
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
                  htmlFor="input-description"
                >
                  Skills
                </label>
                <div className="col-sm-10">
                  <div
                    style={{
                      display: "flex",
                      // justifyContent: "center",
                      alignItems: "center",
                      fontSize: "16px",
                      color: "rgb(133, 133, 133)",
                      gap: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    {skills.length > 0 &&
                      skills.map((skill, i) => (
                        <span
                          style={{
                            padding: "8px 22px",
                            background: "#f6fafd",
                            borderRadius: "30px",
                          }}
                        >
                          {skill}
                          <i
                            class="fa fa-trash"
                            aria-hidden="true"
                            style={{
                              marginLeft: "10px",
                              cursor: "pointer",
                              color: "#f50057",
                            }}
                            onClick={() => handleSkillRemove(i)}
                          ></i>
                        </span>
                      ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="text"
                      name="skill"
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                      placeholder="Skill"
                      id="input-website"
                      className="form-control"
                      style={{ width: "40%", marginRight: "10px" }}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleSkills()}
                      size="large"
                      style={{ padding: "10px" }}
                    >
                      Add
                    </Button>
                  </div>

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
                  Rate
                </label>
                <div className="col-sm-10 col-md-5">
                  <input
                    type="number"
                    name="city"
                    value={minSalary}
                    onChange={(e) => setMinSalary(e.target.value)}
                    placeholder="Rate according to salart type"
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
export default AddJobSeeker;
