const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstname: String,
  lastname: String,
  address: {
    street: {
      type: String,
      required: true
    },
    houseNumber: {
      type: Number,
      required: true
    },
    zip: {
      type: Number,
      required: true
    }
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;