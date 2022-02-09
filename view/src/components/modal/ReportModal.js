import React from "react";

const ReportModal = () => {
  // close report modal
  const closeReportModal = (e) => {
    e.preventDefault();
    if (document.getElementById("so_sociallogin")) {
      if (
        e.target === document.getElementById("so_sociallogin") ||
        e.target === document.getElementById("cancel-report-btn")
      ) {
        document.getElementById("so_sociallogin").classList.remove("in");
        document.getElementById("so_sociallogin").classList.remove("d-block");
        // document.getElementsByTagName("body")[0].classList.remove("modal-open");
      }
    }
  };
  return (
    <div
      class="modal fade"
      id="so_sociallogin"
      tabindex="-1"
      role="dialog"
      onClick={(e) => closeReportModal(e)}
    >
      <div class="modal-dialog block-popup-login" id="block-popup-login">
        <div class="tt_popup_login">
          <strong>Report</strong>
        </div>
        <div class="block-content">
          <div class=" col-reg registered-account">
            <div class="block-content">
              <form
                class="form form-login"
                action="#"
                method="post"
                id="login-form"
              >
                <fieldset
                  class="fieldset login"
                  data-hasrequired="* Required Fields"
                >
                  <div style={{ margin: "20px 0", width: "100%" }}>
                    <label className="container-radio">
                      <input type="radio" checked name="Flat Shipping Rate" />{" "}
                      This is illegal/fraudulent
                      <span class="checkmark"></span>
                    </label>
                    <label className="container-radio">
                      <input type="radio" name="Flat Shipping Rate" /> This ad
                      is spam
                      <span class="checkmark"></span>
                    </label>
                    <label className="container-radio">
                      <input type="radio" name="Flat Shipping Rate" /> This ad
                      is in the wrong category
                      <span class="checkmark"></span>
                    </label>

                    <label className="container-radio">
                      <input type="radio" name="Flat Shipping Rate" /> The ad
                      goes against posting rules
                      <span class="checkmark"></span>
                    </label>
                    <textarea
                      name="city"
                      id="input-description"
                      rows="3"
                      id="input-review"
                      placeholder="Please provide more information"
                      className="form-control"
                      // className={
                      //   errors &&
                      //   errors.validation &&
                      //   errors.validation.description
                      //     ? "form-control is-invalid"
                      //     : "form-control"
                      // }
                      defaultValue="adasdj"

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
                        id="cancel-report-btn"
                      >
                        Cancel
                      </button>
                      <button className="btn-primary btn" style={{ flex: "1" }}>
                        Report
                      </button>
                    </div>
                  </div>

                  {/* <div class="actions-toolbar">
                    <div class="primary">
                      <button
                        type="submit"
                        class="action login primary"
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
