import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import DownloadIcon from "@mui/icons-material/Download";
import Button from "@mui/material/Button";
import SpecialJobs from "../../utils/SpecialJobs";
import LocalJobs from "../../utils/LocalJobs";
import JobCategory from "../../utils/JobCategory";
import Countries from "../../utils/Countries";
import Gender from "../../utils/Gender";
import Loader from "../../utils/Loader";
import SalaryType from "../../utils/SalaryType";
import AgeSelect from "../../utils/Age";
import Currency from "../../utils/Currency";
import County from "../../utils/County";
import Cities from "../../utils/cities";
import Qualification from "../../utils/Qualification";
import {
  getJobSeekerById,
  updateJobSeeker,
  deleteImageFromCloud,
} from "../actions/jobSeekersAction";
import { useDispatch, useSelector } from "react-redux";
import fileURL from "../../utils/fileURL";
const adpromotionType = [
  { promote: "FEATURED", numberSort: 1 },
  { promote: "URGENT", numberSort: 2 },
  { promote: "SPOTLIGHT", numberSort: 3 },
  // { promote: "ALL", numberSort: 4 },
];
const EditJobSeeker = (props) => {
  const [errors, setErrors] = useState({});
  // const [files, setFiles] = useState([]);
  const [featureRate, setFeatureRate] = useState(100);
  const [promoteType, setPromoteType] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("local job");
  const [subCategory, setSubCategory] = useState("");
  const [rate, setRate] = useState("");
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [qualification, setQualification] = useState("");
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("");
  const [email, setEmail] = useState("");
  const [currency, setCurrency] = useState("??");
  const [contact, setContact] = useState("");
  const [country, setCountry] = useState({
    name: "",
    isoCode: "",
    phonecode: "",
  });
  const [city, setCity] = useState({
    name: "",
    stateCode: "",
    countryCode: "",
  });
  const [county, setCounty] = useState({
    name: "",
    isoCode: "",
  });

  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [cv, setCv] = useState();
  const [photo, setPhoto] = useState("");

  const [profile, setProfile] = useState();
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  // initialize hook
  const dispatch = useDispatch();
  // get state from redux
  const errorState = useSelector((state) => state.error);
  const jobSeeker = useSelector((state) => state.jobSeeker);
  // useEffect
  useEffect(() => {
    setErrors(errorState);
  }, [errorState]);
  useEffect(() => {
    dispatch(getJobSeekerById(props.id));
  }, []);

  // update job seeker states
  useEffect(() => {
    if (jobSeeker.jobSeeker._id) {
      setAge(jobSeeker.jobSeeker.age ? jobSeeker.jobSeeker.age : "");
      setCategory(
        jobSeeker.jobSeeker.category ? jobSeeker.jobSeeker.category : ""
      );
      setTitle(jobSeeker.jobSeeker.title ? jobSeeker.jobSeeker.title : "");
      setContact(
        jobSeeker.jobSeeker.contact ? jobSeeker.jobSeeker.contact : ""
      );
      setCountry(
        jobSeeker.jobSeeker.country
          ? { name: jobSeeker.jobSeeker.country, isoCode: "" }
          : { name: "", isoCode: "" }
      );
      setCounty({ name: jobSeeker.jobSeeker.county, isoCode: "" });
      setCity({
        name: jobSeeker.jobSeeker.city,
        countryCode: "",
        stateCode: "",
      });
      setDescription(
        jobSeeker.jobSeeker.description ? jobSeeker.jobSeeker.description : ""
      );
      setDob(jobSeeker.jobSeeker.dob ? jobSeeker.jobSeeker.dob : "");
      setEmail(jobSeeker.jobSeeker.email ? jobSeeker.jobSeeker.email : "");
      setCurrency(
        jobSeeker.jobSeeker.currency ? jobSeeker.jobSeeker.currency : ""
      );
      setExperience(
        jobSeeker.jobSeeker.experience ? jobSeeker.jobSeeker.experience : ""
      );
      setQualification(
        jobSeeker.jobSeeker.qualification
          ? jobSeeker.jobSeeker.qualification
          : ""
      );
      setGender(jobSeeker.jobSeeker.gender ? jobSeeker.jobSeeker.gender : "");
      setName(jobSeeker.jobSeeker.name ? jobSeeker.jobSeeker.name : "");
      setLanguages(
        jobSeeker.jobSeeker.languages ? jobSeeker.jobSeeker.languages : []
      );
      setSkills(jobSeeker.jobSeeker.skills ? jobSeeker.jobSeeker.skills : []);
      setTitle(jobSeeker.jobSeeker.title ? jobSeeker.jobSeeker.title : "");
      setSubCategory(
        jobSeeker.jobSeeker.subCategory ? jobSeeker.jobSeeker.subCategory : ""
      );
      setSalaryType(
        jobSeeker.jobSeeker.salaryType ? jobSeeker.jobSeeker.salaryType : ""
      );
      setRate(jobSeeker.jobSeeker.rate ? jobSeeker.jobSeeker.rate : "");
      setPromoteType(
        jobSeeker.jobSeeker.promoteType ? jobSeeker.jobSeeker.promoteType : []
      );
      setPhoto(jobSeeker.jobSeeker.profile ? jobSeeker.jobSeeker.profile : "");
      setDob(jobSeeker.jobSeeker.dob ? jobSeeker.jobSeeker.dob : "");
    }
  }, [jobSeeker.jobSeeker && jobSeeker.jobSeeker._id]);
  // fileUploadHandler
  // const uploadFilesHandler = (e) => {
  //   if (e.target.files) {
  //     if (files.length < 5) {
  //       const tempFiles = [...files];
  //       for (let i = 0; i < e.target.files.length; i++) {
  //         tempFiles.push(e.target.files[i]);
  //       }
  //       setFiles([
  //         ...tempFiles.filter(
  //           (file, i, filesArray) => filesArray.indexOf(file) === i
  //         ),
  //       ]);
  //     }
  //   }
  // };
  // deleteFileHandler
  // const deleteFileHandler = (index) => {
  //   setFiles([...files.filter((file, i) => i !== index)]);
  // };

  // handle promotion checkBox
  const promoteCheckBoxHandler = (checked, value) => {
    if(checked !== true) setPromoteType([]); else setPromoteType([value]);

    // if (checked !== true) {
    //   if (value.promote === "ALL") {
    //     setPromoteType([]);
    //   } else {
    //     const tempArr = promoteType.filter(
    //       (promote) => promote.promote !== value.promote
    //     );
    //     setPromoteType([...tempArr]);
    //   }
    // } else {
    //   if (value.promote === "ALL") {
    //     setPromoteType([
    //       { promote: "FEATURED", numberSort: 1 },
    //       { promote: "URGENT", numberSort: 2 },
    //       { promote: "SPOTLIGHT", numberSort: 3 },
    //       { promote: "ALL", numberSort: 4 },
    //     ]);
    //   } else {
    //     const tempArr = [...promoteType];
    //     tempArr.push(value);

    //     setPromoteType([
    //       ...tempArr.filter((value, index, self) => {
    //         return self.indexOf(value) === index;
    //       }),
    //     ]);
    //   }
    // }
  };

  // create job function
  const createJobSeekerFunction = () => {
    const job = {
      id: jobSeeker.jobSeeker._id,
      title: title.toLowerCase(),
      description,
      name: name.toLowerCase(),
      gender: gender.toLowerCase(),
      category: category.toLowerCase(),
      subCategory: subCategory.toLowerCase(),
      salaryType: salaryType.toLowerCase(),
      experience: experience.toLowerCase(),
      qualification: qualification.toLowerCase(),
      rate: rate * 1,
      files: [cv, profile],
      email: email.toLowerCase(),
      cv: cv && cv.name,
      profile: profile && profile.name,
      contact,
      promoteType: promoteType.filter((type) => type.promote !== "ALL"),
      country: country.name.toLowerCase(),
      city: city.name.toLowerCase(),
      county: county.name.toLowerCase(),
      languages: languages,
      dob,
      age,
      currency,
      skills,
    };
    dispatch(updateJobSeeker(job, clearState));
  };

  const clearState = () => {
    setTitle("");
    setDescription("");
    setGender("");
    setPhoto("");
    setCategory("local job");
    setSubCategory("");
    setSalaryType("");
    setExperience("");
    setQualification("");
    setEmail("");
    setContact("");
    setAge("");
    setDob("");
    setPromoteType([]);
    setLanguages([]);
    setSkills([]);
    setLanguage("");
    setSkill("");
    // setFiles([]);
    setCity({ name: "", stateCode: "", countryCode: "" });
    setCounty({ name: "", isoCode: "" });
    setCountry({ name: "", isoCode: "", phonecode: "" });
    props.setTab("SURPLUS");
  };

  const handleSkills = (data, setData, value, setValue) => {
    if (value.length > 0) {
      const tempArr = [...data];
      tempArr.push(value);
      setData([...tempArr]);
      setValue("");
    }
  };
  const handleSkillRemove = (id, data, setData) => {
    const tempArr = [...data];
    setData([...tempArr.filter((skill, i) => i !== id)]);
  };
  // delete file from aws
  const deleteFileFromCloudFunc = (file, type) => {
    const data =
      type === "image"
        ? {
            id: jobSeeker.jobSeeker?._id,
            image: file,
            images: "",
          }
        : {
            id: jobSeeker.jobSeeker?._id,
            image: file,
            cv: "",
          };

    dispatch(deleteImageFromCloud(data));
  };

  //
  // const downloadFIle = (e, file) => {
  //   e.preventDefault();
  //   console.log(file);
  //   fetch(
  //     "https://futjan.s3.ap-south-1.amazonaws.com/image-61e452f3a6e9ec290c062e19-1658160461467-0.jpg",
  //     { method: "GET" }
  //   )
  //     .then((res) => {
  //       return res.blob();
  //     })
  //     .then((blob) => {
  //       const url = window.URL.createObjectURL(blob);

  //       const parentElement = document.getElementById(
  //         "download-csv-file-format"
  //       );
  //       const link = document.createElement("a");
  //       link.href = url;
  //       link.download = file;
  //       parentElement.appendChild(link);
  //       link.click();
  //       link.parentNode.removeChild(link);
  //     });
  // };

  // download file
  const donwloadCV = (fileName) => {
    var element = document.createElement("a");
    element.setAttribute("href", fileURL(fileName));
    element.setAttribute("download", fileName);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  return (
    // <!-- Main Container  -->
    <div
      className="main-container container"
      style={{ position: "relative", margin: "30px auto" }}
    >
      <div className="row">
        <div id="content" className="col-md-11">
          {errors && errors.message && (
            <div className="form-group">
              <div
                className="col-sm-12"
                style={{ padding: "0", margin: "10px 0" }}
              >
                <div className="alert alert-danger" role="alert">
                  {errors.message}
                </div>
              </div>
            </div>
          )}
          <h2 className="title" style={{ margin: "0" }}>
            Update Job Seeker
          </h2>

          <form
            // action=""
            method="post"
            enctype="multipart/form-data"
            className="form-horizontal account-register clearfix"
          >
            <fieldset id="account">
              <h4 className="post-ad-heading">Job Seeker Detail</h4>
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
                <label className="col-sm-2 control-label" htmlFor="input-name">
                  Job Title
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
                  <Countries
                    setCountry={setCountry}
                    country={country}
                    errors={errors}
                  />
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
                    className={
                      errors &&
                      errors.validation &&
                      errors.validation.experience
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors &&
                    errors.validation &&
                    errors.validation.experience && (
                      <div className="invalid-feedback">
                        {errors.validation.experience}
                      </div>
                    )}
                </div>
              </div>
              <div className="form-group required">
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
                    className={
                      errors &&
                      errors.validation &&
                      errors.validation.qualification
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  /> */}
                  <Qualification
                    qualification={qualification}
                    setQualification={setQualification}
                    errors={errors}
                  />
                  {errors &&
                    errors.validation &&
                    errors.validation.qualification && (
                      <div className="invalid-feedback">
                        {errors.validation.qualification}
                      </div>
                    )}
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
                    className={
                      errors && errors.validation && errors.validation.email
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.email && (
                    <div className="invalid-feedback">
                      {errors.validation.email}
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
                            onClick={() =>
                              handleSkillRemove(i, skills, setSkills)
                            }
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
                      className={
                        errors && errors.validation && errors.validation.skills
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                      style={{ width: "40%", marginRight: "10px" }}
                    />
                    <Button
                      variant="contained"
                      onClick={() =>
                        handleSkills(skills, setSkills, skill, setSkill)
                      }
                      size="large"
                      style={{ padding: "10px" }}
                    >
                      Add
                    </Button>
                  </div>

                  {errors && errors.validation && errors.validation.skills && (
                    <div className="invalid-feedback">
                      {errors.validation.skills}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-description"
                >
                  Languages
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
                    {languages.length > 0 &&
                      languages.map((language, i) => (
                        <span
                          style={{
                            padding: "8px 22px",
                            background: "#f6fafd",
                            borderRadius: "30px",
                          }}
                        >
                          {language}
                          <i
                            class="fa fa-trash"
                            aria-hidden="true"
                            style={{
                              marginLeft: "10px",
                              cursor: "pointer",
                              color: "#f50057",
                            }}
                            onClick={() =>
                              handleSkillRemove(i, languages, setLanguages)
                            }
                          ></i>
                        </span>
                      ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="text"
                      name="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      placeholder="Language"
                      id="input-website"
                      className="form-control"
                      style={{ width: "40%", marginRight: "10px" }}
                    />
                    <Button
                      variant="contained"
                      onClick={() =>
                        handleSkills(
                          languages,
                          setLanguages,
                          language,
                          setLanguage
                        )
                      }
                      size="large"
                      style={{ padding: "10px" }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </div>
              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
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
              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Rate
                </label>
                <div
                  className="col-sm-10 col-md-5"
                  style={{ position: "relative" }}
                >
                  <span className="currency-icon">{currency}</span>
                  <input
                    type="number"
                    name="city"
                    value={rate}
                    onChange={(e) => setRate(e.target.value * 1)}
                    defaultValue="0"
                    placeholder="Rate according to salary type"
                    id="input-website"
                    className={
                      errors && errors.validation && errors.validation.rate
                        ? "form-control is-invalid currency-container"
                        : "form-control currency-container"
                    }
                  />
                  {errors && errors.validation && errors.validation.rate && (
                    <div className="invalid-feedback">
                      {errors.validation.rate}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  DOB
                </label>
                <div className="col-sm-10 col-md-5">
                  <input
                    type="date"
                    name="city"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    // placeholder="Rate according to salart type"
                    id="input-website"
                    className={
                      errors && errors.validation && errors.validation.dob
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                  />
                  {errors && errors.validation && errors.validation.dob && (
                    <div className="invalid-feedback">
                      {errors.validation.dob}
                    </div>
                  )}
                </div>
              </div>
              <div className="form-group required">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Age
                </label>
                <div className="col-sm-10 col-md-5">
                  <AgeSelect age={age} setAge={setAge} errors={errors} />
                  {errors && errors.validation && errors.validation.age && (
                    <div className="invalid-feedback">
                      {errors.validation.age}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-group ">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  Update Profile
                </label>
                <div className="col-sm-10">
                  {profile ? (
                    <div
                      style={{
                        width: "180px",
                        height: "180px",
                        background: "#eee",
                        position: "relative",
                        overflow: "hidden",
                        padding: "10px",
                        display: "flex",

                        justifyContent: "center",
                        alignItems: "center",
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
                        onClick={() => setProfile()}
                      ></i>
                      <img
                        width={100}
                        src={URL.createObjectURL(profile)}
                        alt={`uploaded-${profile}`}
                      />
                    </div>
                  ) : null}

                  <input
                    type="file"
                    name="photo"
                    // value=""
                    onChange={(e) => {
                      if (e.target.files) {
                        setProfile(e.target.files[0]);
                      }
                    }}
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

              {jobSeeker.jobSeeker && jobSeeker.jobSeeker.images && (
                <div className="form-group ">
                  <label
                    className="col-sm-2 control-label"
                    htmlFor="input-website"
                  >
                    Current Profile
                  </label>
                  <div className="col-sm-10">
                    <div>
                      <div
                        className="form-control"
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
                          key={
                            jobSeeker.jobSeeker && jobSeeker.jobSeeker.images
                          }
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
                            onClick={() =>
                              deleteFileFromCloudFunc(
                                jobSeeker.jobSeeker &&
                                  jobSeeker.jobSeeker.images,
                                "image"
                              )
                            }
                          ></i>
                          <img
                            width="100%"
                            src={fileURL(
                              jobSeeker.jobSeeker && jobSeeker.jobSeeker.images
                            )}
                            alt={`uploaded-${
                              jobSeeker.jobSeeker && jobSeeker.jobSeeker.images
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="form-group ">
                <label
                  className="col-sm-2 control-label"
                  htmlFor="input-website"
                >
                  CV
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    name="photo"
                    // value={cv && cv.name}
                    onChange={(e) => {
                      if (e.target.files) setCv(e.target.files[0]);
                    }}
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
              {jobSeeker.jobSeeker && jobSeeker.jobSeeker.cv ? (
                <div className="form-group ">
                  <label
                    className="col-sm-2 control-label"
                    htmlFor="input-website"
                  >
                    Uploaded CV
                  </label>
                  <div className="col-sm-10">
                    <p
                      style={{
                        margin: "0",
                        textDecoration: "underline",
                        cursor: "pointer",
                        color: "rgb(59, 89, 152)",
                        fontSize: "17px",
                      }}
                      onClick={() => donwloadCV(jobSeeker.jobSeeker.cv)}
                    >
                      Download cv
                    </p>
                  </div>
                </div>
              ) : null}
              {/* {jobSeeker.jobSeeker && jobSeeker.jobSeeker.cv && (
                <div className="form-group ">
                  <label
                    className="col-sm-2 control-label"
                    htmlFor="input-website"
                  ></label>
                  <div className="col-sm-10">
                    <Button
                      variant="contained"
                      id="download-csv-file-format"
                      startIcon={<DownloadIcon />}
                      onClick={(e) =>
                        downloadFIle(
                          e,
                          jobSeeker.jobSeeker && jobSeeker.jobSeeker.cv
                        )
                      }
                    >
                      Download File
                    </Button>
                  </div>
                </div>
              )} */}

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
                  onClick={() => createJobSeekerFunction()}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {jobSeeker.loading === true ? <Loader /> : null}
    </div>
  );
};
export default EditJobSeeker;
