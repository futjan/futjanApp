import React, { useState } from "react";
import { createReport } from "../actions/reportAction";
import { useDispatch } from "react-redux";

const ReportModal = (props) => {
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  // initialize hook
  const dispatch = useDispatch();
  // close report modal
  const closeReportModal = (e) => {
    e.preventDefault();
    if (document.getElementById(props.modalId1)) {
      if (
        e.target === document.getElementById(props.modalId1) ||
        e.target === document.getElementById(props.modalId2)
      ) {
        document.getElementById(props.modalId1).classList.remove("in");
        document.getElementById(props.modalId1).classList.remove("d-block");
        // document.getElementsByTagName("body")[0].classList.remove("modal-open");
      }
    }
  };
  // report p
  const createReportFunc = () => {
    const obj = {
      reason: reason.toLowerCase(),
      description: description.toLowerCase(),
      adId: props.id,
      model: props.model,
    };
    dispatch(createReport(obj, clearState));
  };
  const clearState = () => {
    setReason("");
    setDescription("");
  };
  return (
    <div
      className="modal fade"
      id={props.modalId1}
      tabIndex="-1"
      role="dialog"
      onClick={(e) => closeReportModal(e)}
    >
      <div className="modal-dialog block-popup-login" id="block-popup-login">
        <div className="tt_popup_login">
          <strong>Report</strong>
        </div>
        <div className="block-content">
          <div className=" col-reg registered-account">
            <div className="block-content">
              <form
                className="form form-login"
                action="#"
                method="post"
                id="login-form"
              >
                <fieldset
                  className="fieldset login"
                  data-hasrequired="* Required Fields"
                >
                  <div style={{ margin: "20px 0", width: "100%" }}>
                    <label
                      className="container-radio"
                      onClick={(e) => setReason("This is illegal/fraudulent")}
                    >
                      <input
                        type="radio"
                        checked={
                          reason === "This is illegal/fraudulent" ? true : false
                        }
                        name="Flat Shipping Rate"
                      />{" "}
                      This is illegal/fraudulent
                      <span className="checkmark"></span>
                    </label>
                    <label
                      className="container-radio"
                      onClick={(e) => setReason("This ad is spam")}
                    >
                      <input
                        type="radio"
                        name="Flat Shipping Rate"
                        checked={reason === "This ad is spam" ? true : false}
                      />{" "}
                      This ad is spam
                      <span className="checkmark"></span>
                    </label>
                    <label
                      className="container-radio"
                      onClick={(e) =>
                        setReason("This ad is in the wrong category")
                      }
                    >
                      <input
                        type="radio"
                        name="Flat Shipping Rate"
                        checked={
                          reason === "This ad is in the wrong category"
                            ? true
                            : false
                        }
                      />{" "}
                      This ad is in the wrong category
                      <span className="checkmark"></span>
                    </label>

                    <label
                      className="container-radio"
                      onClick={(e) =>
                        setReason("The ad goes against posting rules")
                      }
                    >
                      <input
                        type="radio"
                        name="Flat Shipping Rate"
                        checked={
                          reason === "The ad goes against posting rules"
                            ? true
                            : false
                        }
                      />{" "}
                      The ad goes against posting rules
                      <span className="checkmark"></span>
                    </label>
                    <textarea
                      name="city"
                      rows="3"
                      id="input-review"
                      placeholder="Please provide more information"
                      className="form-control"
                      onChange={(e) => setDescription(e.target.value)}
                      // className={
                      //   errors &&
                      //   errors.validation &&
                      //   errors.validation.description
                      //     ? "form-control is-invalid"
                      //     : "form-control"
                      // }
                      // defaultValue=""

                      // value={description}
                      // onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        margin: "15px 0",
                        gap: "10px ",
                      }}
                    >
                      <button
                        className="btn "
                        style={{ flex: "1" }}
                        onClick={(e) => closeReportModal(e)}
                        id={props.modalId2}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn-primary btn"
                        style={{ flex: "1" }}
                        onClick={() => createReportFunc()}
                      >
                        Report
                      </button>
                    </div>
                  </div>

                  {/* <div className="actions-toolbar">
                    <div className="primary">
                      <button
                        type="submit"
                        className="action login primary"
                        name="send"
                        id="send2"
                      >
                        <span>Login</span>
                      </button>
                    </div>
                  </div> */}
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportModal;
