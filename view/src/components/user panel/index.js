import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AddSurplusBusiness from "../surplusBusiness/AddSurplusBusiness";
import Surplus from "./Surplus";
import EditSurplus from "./EditSurplus";
const Index = (props) => {
  const [tab, setTab] = useState("ADD");
  const [id, setId] = useState("");
  // initialize hooks
  const state = useLocation().state;

  // useEffect
  useEffect(() => {
    if (state && state.active) {
      setTab(state.active);
    }
  }, [state && state.active]);

  // get state from store
  const surplusFromStore = useSelector((state) => state.surplus);
  return (
    <div class="container product-detail" style={{ margin: "30px auto" }}>
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
                      <i className="fa fa-plus-circle"></i> <span>Add</span>
                    </div>
                  </li>
                  <li
                    className={tab === "SURPLUS" ? "active" : ""}
                    onClick={() => setTab("SURPLUS")}
                  >
                    <div className="tab">
                      <i className="fa fa-archive"></i>
                      <span>Surplus</span>
                    </div>
                  </li>
                  <li
                    className={tab === "ALERT" ? "active" : ""}
                    onClick={() => setTab("ALERT")}
                  >
                    <div className="tab">
                      <i className="fa fa-bell"></i>
                      <span>Alert</span>
                    </div>
                  </li>
                  <li
                    className={tab === "MESSAGE" ? "active" : ""}
                    onClick={() => setTab("MESSAGE")}
                  >
                    <div className="tab">
                      <i className="fa fa-envelope"></i>
                      <span>Message</span>
                    </div>
                  </li>
                  <li
                    className={tab === "FAVOURITE" ? "active" : ""}
                    onClick={() => setTab("FAVOURITE")}
                  >
                    <div className="tab">
                      <i className="fa fa-heart"></i>
                      <span>Favourite</span>
                    </div>
                  </li>
                  <li
                    className={tab === "ACCOUNT" ? "active" : ""}
                    onClick={() => setTab("ACCOUNT")}
                  >
                    <div className="tab">
                      <i className="fa fa-user"></i>
                      <span>Account</span>
                    </div>
                  </li>
                </ul>
                {tab === "ADD" ? (
                  <div className="tab-content ">
                    <div className="tab-pane active" id="tab-description">
                      <div>
                        <AddSurplusBusiness />
                      </div>
                    </div>
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
                {tab === "EDIT" ? (
                  <div className="tab-content">
                    <div className="tab-pane active" id="tab-description">
                      <div>
                        <EditSurplus id={id} setTab={setTab} />
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
