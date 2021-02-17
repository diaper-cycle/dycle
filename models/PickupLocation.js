const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const pickupLocationSchema = new Schema({
    locationName: String,
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
      },
    stock: {
      type: Number,
      required: true
    },
    image: String
});

const PickupLocation = mongoose.model("PickupLocation", pickupLocationSchema);

module.exports = PickupLocation;



