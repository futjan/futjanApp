const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionEmailSchema = Schema({
  email: {
    type: String,
    unique: true,
  },
});

module.exports = Subscription = mongoose.model(
  "subscription",
  subscriptionEmailSchema
);
