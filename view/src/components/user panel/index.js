import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import AddSurplusBusiness from "../surplusBusiness/AddSurplusBusiness";
import AddJob from "../job/AddJob";
import EditJob from "../job/EditJob";
import AddJobSeeker from "../jobSeeker/AddJobSeeker";
import Surplus from "./MyAds";
import EditSurplus from "./EditSurplus";
import EditJobSeeker from "../jobSeeker/EditJobSeeker";
import MyAccount from "./MyAccount";
import FullScreenModal from "../../utils/FullScreenModal";
import Message from "./Messages";
import { io } from "socket.io-client";

const Index = (props) => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [tab, setTab] = useState("ADD");
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
                    className={tab === "ALERT" ? "active" : ""}
                    onClick={() => setTab("ALERT")}
                  >
                    <div className="tab">
                      <i className="fa fa-bell"></i>
                      <span>My Alert</span>
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
                          />{" "}
                          Job Seeker
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div>
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
                    </div>
                    <FullScreenModal
                      open={openSuccessModal}
                      title={title}
                      setOpen={setOpenSuccessModal}
                      adId={adId}
                    />
                  </div>
                ) : null}

                {tab === "SURPLUS" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <div>
                        <Surplus setTab={setTab} setId={setId} />
                      </div>
                    </div>
                  </div>
                ) : null}
                {tab === "MESSAGE" ? (
                  <div className="tab-content" style={{ padding: "0" }}>
                    <div className="tab-pane active" id="tab-description">
                      <div style={{ position: "relative" }}>
                        <Message />
                      </div>
                    </div>
                  </div>
                ) : null}
                {tab === "ACCOUNT" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <div>
                        <MyAccount />
                      </div>
                    </div>
                  </div>
                ) : null}

                {tab === "EDIT-SURPLUS" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <div>
                        <EditSurplus id={id} setTab={setTab} />
                      </div>
                    </div>
                  </div>
                ) : null}
                {tab === "EDIT-JOB" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <div>
                        <EditJob id={id} setTab={setTab} />
                      </div>
                    </div>
                  </div>
                ) : null}
                {tab === "EDIT-JOBSEEKER" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <div>
                        <EditJobSeeker id={id} setTab={setTab} />
                      </div>
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
