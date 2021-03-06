import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import API from "../utils/API";
import { fetchRestaurants } from "../actions";
import "../index.css";

class RestaurantList extends Component {
  state = { restaurants: [] };

  async componentDidMount() {
    await this.props.fetchRestaurants();
  }

  renderAdmin(restaurant) {
    if (restaurant.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/restaurants/edit/${restaurant._id}`}
            className="ui button primary"
            id="editRestaurantList"

          >
            Edit
          </Link>
          <Link
            to={`/restaurants/delete/${restaurant._id}`}
            className="ui button negative"
            id="deleteRestaurantList"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.restaurants.map(restaurant => {
      if(restaurant.is_active === true){
      return (
        <div className="item" key={restaurant._id}>
          {this.renderAdmin(restaurant)}
          <div className="content">
            <Link
              to={`/restaurants/play/${restaurant._id}/${
                restaurant.restaurant_name
              }`}
              className="test"
            >
              {restaurant.restaurant_name}
            </Link>
            <div className="description">Owner: {restaurant.owner_name}</div>
          </div>
        </div>
      );
    }
    });
  }

  render() {
    return (
      <div>
        <h2>Restaurants</h2>
        <div className="ui segment">
          <div className="ui celled list">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUserId: state.auth.userId,
    restaurants: Object.values(state.restaurants)
  };
};

export default connect(
  mapStateToProps,
  { fetchRestaurants }
)(RestaurantList);
