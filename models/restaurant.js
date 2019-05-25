const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurant_name: { type: String, required: true },
  owner_name: { type: String, required: true },
  balance: { type: Number, required: true, default: 10000 },
  userId: String,
  location: String,
  date: { type: Date, default: Date.now },
  dayData: {
    time: { type: Number },
    chefSkill: {
      burger: { type: Number },
      hotdog: { type: Number }
    },
    newBalance: { type: Number },
    previousBalance: { type: Number }
  }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
