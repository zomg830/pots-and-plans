const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/restaurantlist"
);

const restaurantSeed = [
  {
    restaurant_name: "Testauraunt",
    owner_name: "Joe Tester",
    balance: 10000,
    userId: "1"
  }
];

db.Restaurant.remove({})
  .then(() => db.Restaurant.collection.insertMany(restaurantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
