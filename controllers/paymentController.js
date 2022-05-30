const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const AppError = require("../utils/appError");
const Surplus = require("../models/SurplusBusiness");
const uuid = require("uuid");
exports.checkoutSessions = async (req, res, next) => {
  const surplus = await Surplus.findById(req.params.id);

  //2) create checkout session
  const session = await stripe.checkout.sessions.create({
    success_url: `http://localhost:8000/api/v1/surplus`,
    cancel_url: `http://localhost:8000/api/v1/surplus`,
    customer_email: req.user.email,
    client_reference_id: req.user._id.toString(),
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: surplus.title,
            images: [
              `https://futjan.s3.ap-south-1.amazonaws.com/${surplus.images[0]}`,
            ],
          },
          unit_amount: surplus.originalPrice,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
  });
  s;
  // send session to response
  res.status(200).json({
    status: "success",
    session,
  });
};

// stripe new method
exports.paymentAPI = (req, res, next) => {
  const { product, token } = req.body;
  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.charges.create({
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        shipping: {
          name: token.card.name,
          address: {
            country: token.card.country,
          },
        },
      });
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => console.log(err));
};
