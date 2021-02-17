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

  email: {
    type: String,
    unique: true,
  },

  address: {
      street: String,
      houseNumber: Number,
      zip: Number,
  }
}  ,{ timestamps: true } 
);

const User = mongoose.model("User", userSchema);

module.exports = User;