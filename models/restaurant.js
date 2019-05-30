const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set("useFindAndModify", false);

const restaurantSchema = new Schema({
  restaurant_name: { type: String, required: true },
  owner_name: { type: String, required: true },
  balance: { type: Number, required: true, default: 10000 },
  userId: String,
  number_of_days: {type: Number, required: true, default: 0},
  location: { type: String, default: null },
  date: { type: Date, default: Date.now },
  is_active: {type: Boolean, required: true, default: true},
  dayData: {
    time: { type: Number },
    chefSkill: {
      burger: { type: Number },
      hotdog: { type: Number },
    rent: {type: Number},
    },
    newBalance: { type: Number, default: null },
    previousBalance: { type: Number, default: null }
  }
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
