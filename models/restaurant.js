const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurant_name: { type: String, required: true },
  owner_name: { type: String, required: true },
  balance: { type: Number, required: true, default: 10000 },
  userId: String,
  date: { type: Date, default: Date.now }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
