const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const Warehouse = mongoose.model("Warehouse", warehouseSchema);

module.exports = Warehouse;


