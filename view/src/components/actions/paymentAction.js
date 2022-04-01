import * as Types from "./types";
import axios from "axios";

export const paymentCheckout = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/payment/checkout", data);
  } catch (err) {
    console.log(err);
  }
};
