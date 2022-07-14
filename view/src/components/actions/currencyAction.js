import { SET_CURRENCY, GET_ERRORS, SET_CURRENCY_LOADING } from "./types";
import axios from "axios";

export const setCurrencyAction = (currency) => async (dispatch) => {
  try {
    dispatch({
      type: SET_CURRENCY_LOADING,
    });
    const res = await axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${
        currency.to && currency.to.toLowerCase()
      }.json`
    );

    if (res) {
      currency.rate =
        res.data[currency.to && currency.to.toLowerCase()][
          currency.code && currency.code.toLowerCase()
        ];

      dispatch({
        type: SET_CURRENCY,
        payload: currency,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    });
  }
};
