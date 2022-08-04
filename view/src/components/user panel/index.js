import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

import { io } from "socket.io-client";
import Preloader2 from "../../utils/Preloader2";
// import AddSurplusBusiness from "../surplusBusiness/AddSurplusBusiness";

const AddSurplusBusiness = lazy(() =>
  import("../surplusBusiness/AddSurplusBusiness")
);
const Alert = lazy(() => import("./Alert"));
// import AddJob from "../job/AddJob";

const AddJob = lazy(() => import("../job/AddJob"));

// import EditJob from "../job/EditJob";
const EditJob = lazy(() => import("../job/EditJob"));

// import AddJobSeeker from "../jobSeeker/AddJobSeeker";
const AddJobSeeker = lazy(() => import("../jobSeeker/AddJobSeeker"));

// import Surplus from "./MyAds";
const Surplus = lazy(() => import("./MyAds"));

// import EditSurplus from "./EditSurplus";

const EditSurplus = lazy(() => import("./EditSurplus"));

// import EditJobSeeker from "../jobSeeker/EditJobSeeker";
const EditJobSeeker = lazy(() => import("../jobSeeker/EditJobSeeker"));
// import MyAccount from "./MyAccount";

const MyAccount = lazy(() => import("./MyAccount"));

// import FullScreenModal from "../../utils/FullScreenModal";
const FullScreenModal = lazy(() => import("../../utils/FullScreenModal"));

// import Message from "./Messages";
const Message = lazy(() => import("./Messages"));
// import Favourite from "../favourite/Index"
const Favourite = lazy(() => import("../favourite/Index"));

const Index = ({ tab, setTab }) => {
  // console.log(props);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  // const [tab, setTab] = useState("ADD");
  const [id, setId] = useState("");
  const [add, setAdd] = useState("surplus");
  const [title, setTitle] = useState("");
  const [adId, setAdId] = useState("");
  // initialize hooks
  const state = useLocation().state;

  // useEffect
  useEffect(() => {
    if (state && state.active) {
      setTab(state.active);
    }
  }, [state && state.active]);

  const socket = useRef();
  useEffect(() => {
    socket.current = io("ws://www.futjan.com");
  }, []);
  return (
    <div className="container product-detail" style={{ margin: "30px auto" }}>
      <div className="product-attribute module">
        <div className="row content-product-midde clearfix">
          <div className="col-xs-12">
            <div className="producttab ">
              <div className="tabsslider  ">
                <ul className="nav nav-tabs font-sn">
                  <li
                    className={tab === "ADD" ? "active" : ""}
                    onClick={() => setTab("ADD")}
                  >
                    <div className="tab">
                      <i className="fa fa-plus-circle"></i> <span>Post ad</span>
                    </div>
                  </li>
                  <li
                    className={tab === "SURPLUS" ? "active" : ""}
                    onClick={() => setTab("SURPLUS")}
                  >
                    <div className="tab">
                      <i className="fa fa-archive"></i>
                      <span>My ad</span>
                    </div>
                  </li>

                  <li
                    className={tab === "MESSAGE" ? "active" : ""}
                    onClick={() => setTab("MESSAGE")}
                  >
                    <div className="tab">
                      <i className="fa fa-envelope"></i>
                      <span>Messages</span>
                    </div>
                  </li>
                  <li
                    className={tab === "FAVOURITE" ? "active" : ""}
                    onClick={() => setTab("FAVOURITE")}
                  >
                    <div className="tab">
                      <i className="fa fa-heart"></i>
                      <span>My Favourite</span>
                    </div>
                  </li>
                  <li
                    className={tab === "ALERT" ? "active" : ""}
                    onClick={() => setTab("ALERT")}
                  >
                    <div className="tab">
                      <i className="fa fa-bell"></i>
                      <span>My Alert</span>
                    </div>
                  </li>
                  <li
                    className={tab === "ACCOUNT" ? "active" : ""}
                    onClick={() => setTab("ACCOUNT")}
                  >
                    <div className="tab">
                      <i className="fa fa-user"></i>
                      <span>My Account</span>
                    </div>
                  </li>
                </ul>
                {tab === "ADD" ? (
                  <div className="tab-content ">
                    <div className="tab-pane active" id="tab-description">
                      <Suspense fallback={<Preloader2 />}>
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
                              onChange={() => setAdd("surplus")}
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
                              onChange={() => setAdd("job")}
                            />{" "}
                            Employer
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
                              onChange={() => setAdd("candidiate")}
                            />{" "}
                            Job Seeker
                            <span className="checkmark"></span>
                          </label>
                        </div>
                        <div>
                          {/* <Preloader2 /> */}

                          {add === "surplus" ? (
                            <AddSurplusBusiness
                              setTitle={setTitle}
                              setAdId={setAdId}
                              successModalFunc={() => setOpenSuccessModal(true)}
                            />
                          ) : null}
                          {add === "job" ? (
                            <AddJob
                              setTitle={setTitle}
                              setAdId={setAdId}
                              successModalFunc={() => setOpenSuccessModal(true)}
                            />
                          ) : null}
                          {add === "candidiate" ? (
                            <AddJobSeeker
                              setTitle={setTitle}
                              setAdId={setAdId}
                              successModalFunc={() => setOpenSuccessModal(true)}
                            />
                          ) : null}
                        </div>
                        <FullScreenModal
                          open={openSuccessModal}
                          title={title}
                          setOpen={setOpenSuccessModal}
                          adId={adId}
                        />
                      </Suspense>
                    </div>
                  </div>
                ) : null}

                {tab === "SURPLUS" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <Suspense fallback={<Preloader2 />}>
                        <div>
                          <Surplus
                            setTab={setTab}
                            setId={setId}
                            setAdd={setAdd}
                          />
                        </div>
                      </Suspense>
                    </div>
                  </div>
                ) : null}
                {tab === "MESSAGE" ? (
                  <div className="tab-content" style={{ padding: "0" }}>
                    <div className="tab-pane active" id="tab-description">
                      <Suspense fallback={<Preloader2 />}>
                        <div style={{ position: "relative" }}>
                          <Message />
                        </div>
                      </Suspense>
                    </div>
                  </div>
                ) : null}
                {tab === "ACCOUNT" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <Suspense fallback={<Preloader2 />}>
                        <div>
                          <MyAccount />
                        </div>
                      </Suspense>
                    </div>
                  </div>
                ) : null}
                {tab === "FAVOURITE" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <Suspense fallback={<Preloader2 />}>
                        <div>
                          <Favourite />
                        </div>
                      </Suspense>
                    </div>
                  </div>
                ) : null}
                {tab === "ALERT" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <Suspense fallback={<Preloader2 />}>
                        <div>
                          <Alert />
                        </div>
                      </Suspense>
                    </div>
                  </div>
                ) : null}

                {tab === "EDIT-SURPLUS" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <Suspense fallback={<Preloader2 />}>
                        <div>
                          <EditSurplus id={id} setTab={setTab} />
                        </div>
                      </Suspense>
                    </div>
                  </div>
                ) : null}
                {tab === "EDIT-JOB" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <Suspense fallback={<Preloader2 />}>
                        <div>
                          <EditJob id={id} setTab={setTab} />
                        </div>
                      </Suspense>
                    </div>
                  </div>
                ) : null}
                {tab === "EDIT-JOBSEEKER" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <Suspense fallback={<Preloader2 />}>
                        <div>
                          <EditJobSeeker id={id} setTab={setTab} />
                        </div>
                      </Suspense>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
