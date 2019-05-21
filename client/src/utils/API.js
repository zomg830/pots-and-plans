import axios from "axios";

export default {
  getRestaurants: function() {
    return axios.get("/api/restaurants");
  },
  getUserRestaurants: function(userId) {
    return axios.get("/api/users/" + userId);
  },
  getRestaurant: function(id) {
    return axios.get("/api/restaurants/" + id);
  },
  deleteRestaurant: function(id) {
    return axios.delete("/api/restaurants/" + id);
  },
  saveRestaurant: function(restaurantData) {
    return axios.post("/api/restaurants", restaurantData);
  }
};