const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  description: {
    type: String,
    required: [true, "Detail is required"],
  },
});

module.exports = Contact = mongoose.model("Contact", contactSchema);
