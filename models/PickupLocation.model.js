const { Schema, model } = require("mongoose");

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
    }
});

const PickupLocation = model("PickupLocation", pickupLocationSchema);

module.exports = PickupLocation;