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
  passwordHash: {
    type: String,
    required: true
  },
  firstname: String,
  lastname: String,

    // email: {
    //     type: String,
    //     unique: true,
    //     // required: true
    // },

    address: {
        street: {
          type: String,
          // required: true
        },
        houseNumber: {
          type: Number,
          // required: true
        },
        zip: {
          type: Number,
          // required: true
        }
    }
  }
  /* {
    //timestamps: true
  }  */
);

const User = mongoose.model("User", userSchema);

module.exports = User;