import React from "react";
import success from "../components/image/success-image-png.gif";
export default function SuccessMsg() {
  return (
    <div className="modal">
      <div className="modal-box">
        <h3 className="recommonded-heading-h2 border-none m-0 p-0">
          Successfully Posted
        </h3>
        <img src={success} className="my-3" alt="success" width="100" />
        <p className="text-align-center my-2">Ad successfully posted!</p>
      </div>
    </div>
  );
}
