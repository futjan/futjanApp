import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { paymentCheckout } from "../actions/paymentAction";
import { useDispatch } from "react-redux";
const Payment = (props) => {
  const [product, setProduct] = React.useState({
    price: 100,
    name: "demo prodict aind",
  });
  // initialize hooks
  const dispatch = useDispatch();
  const payment = (token) => {
    dispatch(paymentCheckout({ product, token }));
  };
  return (
    <StripeCheckout
      token={payment}
      // key="pk_test_51KU3PFDFTBswredcWxH9DiFzvJ03SN0tClZQESKF3LRxNRtMadcGHQgWqVBtH3MO2x6Dj4P3eXMzL1Vd2IsalwkS00HPo0I1uM"
      stripeKey="pk_test_51KU3PFDFTBswredcWxH9DiFzvJ03SN0tClZQESKF3LRxNRtMadcGHQgWqVBtH3MO2x6Dj4P3eXMzL1Vd2IsalwkS00HPo0I1uM"
    >
      <input type="button" value="Payment checkout" />
    </StripeCheckout>
  );
};
export default Payment;
