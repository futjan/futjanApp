import React, { lazy } from "react";

import banner3 from "../image/left1.png";
// import banner3 from "../image/left1.png";
import banner4 from "../image/right2.png";
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
            <section id="box-link1" className="section-style">
              <div className="container page-builder-ltr mt-4">
                <div className="row row-style row_a1">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col_a1c  block block_3 title_neo1">
                    <div>
                      <div className="home1-banner-2 clearfix">
                        <div className="item-1 col-lg-6 col-md-6 col-sm-6 banners">
                          <div>
                            <a title="Static Image" href="#">
                              <img src={banner3} alt="Static Image" />
                            </a>
                          </div>
                        </div>
                        <div className="item-2 col-lg-6 col-md-6 col-sm-6 banners">
                          <div>
                            <a title="Static Image" href="#">
                              <img src={banner4} alt="Static Image" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
