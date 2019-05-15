import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchRestaurants } from "../actions";

class RestaurantList extends Component {
  state = { restaurants: [] };

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  renderAdmin(restaurant) {
    if (restaurant.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui primary button">Edit</button>
          <button className="ui negative button">Delete</button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.restaurants.map(restaurant => {
      return (
        <div className="item" key={restaurant._id}>
          {this.renderAdmin(restaurant)}
          <div className="content">
            <div className="header">{restaurant.restaurant_name}</div>
            <div className="description">Owner: {restaurant.owner_name}</div>
          </div>
        </div>
      );
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
