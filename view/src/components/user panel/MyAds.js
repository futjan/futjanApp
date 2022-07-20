import React, { useState, lazy, Suspense } from "react";
import Preloader2 from "../../utils/Preloader2";

const SurplusTable = lazy(() => import("./SurplusTable"));

const JobTable = lazy(() => import("./JobTable"));

const JobSeekerTable = lazy(() => import("./JobSeekerTable"));
const Surplus = (props) => {
  const [add, setAdd] = useState("surplus");

  return (
    <div className="container">
      <div className="row">
        <div style={{ display: "flex", marginTop: "25px" }}>
          <label
            className="container-radio"
            onClick={() => setAdd("surplus")}
            style={{ marginRight: "20px" }}
          >
            <input
              type="radio"
              checked={add === "surplus" ? true : false}
              name="Flat Shipping Rate"
            />{" "}
            Surplus
            <span className="checkmark"></span>
          </label>
          <label
            className="container-radio"
            onClick={() => setAdd("job")}
            style={{ marginRight: "20px" }}
          >
            <input
              type="radio"
              checked={add === "job" ? true : false}
              name="Flat Shipping Rate"
            />{" "}
            Job
            <span className="checkmark"></span>
          </label>
          <label
            className="container-radio"
            onClick={() => setAdd("candidiate")}
          >
            <input
              type="radio"
              checked={add === "candidiate" ? true : false}
              name="Flat Shipping Rate"
            />{" "}
            Job Seeker
            <span className="checkmark"></span>
          </label>
        </div>
        <Suspense fallback={<Preloader2 />}>
          <div id="content" className="col-sm-12">
            {add === "surplus" ? (
              <SurplusTable setTab={props.setTab} setId={props.setId} />
            ) : null}
            {add === "job" ? (
              <JobTable setTab={props.setTab} setId={props.setId} />
            ) : null}
            {add === "candidiate" ? (
              <JobSeekerTable setTab={props.setTab} setId={props.setId} />
            ) : null}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Surplus;
