const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const warehouseSchema = new Schema({
  warehouseName: String,
  address: {
      street: {
        type: String,
        required: true
      },
      houseNumber: {
        type: String,
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

const Warehouse = model("Warehouse", testSchema);

module.exports = Warehouse;