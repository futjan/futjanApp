import React, { lazy } from "react";

import Slider1 from "./Slider";
// import SurplusSection from "./surplus/SurplusSection";
// import SurplusSection from ;
const SurplusSection = lazy(() => import("./surplus/SurplusSection"));

// import Job from "./job/Job";
const Job = lazy(() => import("./job/Job"));
// import JobSeeker from "./jobseeker/JobSeeker";
const JobSeeker = lazy(() => import("./jobseeker/JobSeeker"));
const Index = (props) => {
  return (
    <div className="common-home res layout-1 loaded hidden-scorll">
      <div id="wrapper" className="wrapper-fluid banners-effect-10">
        <div id="content">
          <div className="so-page-builder">
            <section
              id="box-link1"
              className="section-style"
              style={{ marginTop: "30px" }}
            >
              <div className="container page-builder-ltr mt-4">
                <div
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    height: "350px",
                    position: "relative",
                  }}
                >
                  <Slider1 />
                </div>
              </div>
            </section>
            <SurplusSection />
            <Job />
            <JobSeeker />
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Index);
