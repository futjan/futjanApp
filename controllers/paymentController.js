const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const AppError = require("../utils/appError");
const Surplus = require("../models/SurplusBusiness");

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
            name: surplus.name,
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
  console.log(session);
  // send session to response

  res.status(200).json({
    status: "success",
    session,
  });
};
