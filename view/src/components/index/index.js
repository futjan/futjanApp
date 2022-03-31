import React, { useEffect } from "react";

import icon1 from "../image/catalog/demo/menu/icon/icon-1.png";
import icon3 from "../image/catalog/demo/menu/icon/icon-3.png";
import icon5 from "../image/catalog/demo/menu/icon/icon-5.png";
import icon9 from "../image/catalog/demo/menu/icon/icon-9.png";
import icon6 from "../image/catalog/demo/menu/icon/icon-6.png";
import slider1 from "../image/catalog/demo/slider/home1/slider.jpg";
import banner1 from "../image/catalog/demo/banners/home1/bn-1.jpg";
import banner2 from "../image/catalog/demo/banners/home1/bn-2.jpg";
import banner3 from "../image/catalog/demo/banners/home1/bn-3.jpg";
import banner4 from "../image/catalog/demo/banners/home1/bn-4.jpg";
import spa1 from "../image/catalog/demo/product/spa/5-270x270.jpg";

import travel from "../image/catalog/demo/product/travel/2-370x370.jpg";
import travel5 from "../image/catalog/demo/product/travel/5-370x370.jpg";

import megamenu from "../image/catalog/demo/menu/img-static-megamenu-h.jpg";

import { getPreset } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { getSurpluses } from "../actions/surplusAction";
import { getJobs } from "../actions/jobAction";
import { getJobSeekers } from "../actions/jobSeekersAction";
import SurplusSection from "./surplus/SurplusSection";
import Job from "./job/Job";
import JobSeeker from "./jobseeker/JobSeeker";

const Index = (props) => {
  // initialize hooks
  const dispatch = useDispatch();
  // get state from store
  const surplus = useSelector((state) => state.surplus);
  const jobs = useSelector((state) => state.job);
  const jobSeeker = useSelector((state) => state.jobSeeker);

  useEffect(() => {
    // dispatch(getPreset());
    // dispatch(getSurpluses(1, 8, "", "", "", "", "", "", "", ""));
    // dispatch(getJobs(1, 8, "", "", "", "", "", "", "", ""));
    // dispatch(getJobSeekers(1, 8, "", "", "", "", "", "", "", ""));
  });

  return (
    <div className="common-home res layout-1 loaded hidden-scorll">
      <div id="wrapper" className="wrapper-fluid banners-effect-10">
        <div id="content">
          <div className="so-page-builder">
            <section id="box-link1" className="section-style">
              <div
                className="container page-builder-ltr"
                style={{ marginTop: "20px" }}
              >
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
export default Index;
