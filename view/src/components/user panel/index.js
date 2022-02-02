import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddSurplusBusiness from "../surplusBusiness/AddSurplusBusiness";
import Surplus from "./Surplus";
import Loader from "../../utils/Loader";
const Index = () => {
  const [tab, setTab] = useState("ADD");

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
                      <i className="fa fa-folder-open"></i>
                      <span>Surplus</span>
                    </div>
                  </li>
                  {/* <li>
                    <a href="#tab-tags" data-toggle="tab">
                      Tags
                    </a>
                  </li>
                  <li>
                    <a href="#tab-ctab" data-toggle="tab">
                      Custom tab
                    </a>
                  </li> */}
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
                        <Surplus />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {surplusFromStore.loading === true ? <Loader /> : null}
    </div>
  );
};
export default Index;
