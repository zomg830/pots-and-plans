import axios from "axios";

export default {
  // Gets all books
  getRestaurants: function() {
    return axios.get("/api/restaurants");
  },
  // Gets the book with the given id
  getRestaurant: function(id) {
    return axios.get("/api/restaurants/" + id);
  },
  // Deletes the book with the given id
  deleteRestaurant: function(id) {
    return axios.delete("/api/restaurants/" + id);
  },
  // Saves a book to the database
  saveRestaurant: function(bookData) {
    return axios.post("/api/restaurants", bookData);
  }
};
