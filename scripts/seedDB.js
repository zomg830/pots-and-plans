const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/restaurantlist"
);

const restaurantSeed = [
  {
    restaurant_name: "Testauraunt",
    owner_name: "Randy Tester",
    balance: 10000,
    userId: "1",
    date: "2019-05-15 20:07:48.899Z"
  },
  {
    restaurant_name: "Papa Joe's BBQ",
    owner_name: "Big Joe",
    balance: 15000,
    userId: "2",
    date: "2019-05-15 20:08:48.899Z"
  },
  {
    restaurant_name: "Aunt Yang's Korean",
    owner_name: "Yang Yena",
    balance: 22000,
    userId: "3",
    date: "2019-05-15 20:09:48.899Z"
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
