const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
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
    street: String,
    houseNumber: Number,
    zip: Number,
  }
}, { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;