const {
  Schema,
  model
} = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(  
  {
    username: {
        type: String,
        trim: true,
       unique: true
    },

    // email: {
    //     type: String,
    //     unique: true,
    //     // required: true
    // },

    passwordHash: {
        type: String,
        required: true 
    },

    firstname: String,
    lastname: String,

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
  },
  {
    //timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;