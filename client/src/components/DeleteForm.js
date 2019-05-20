import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "./Modal";
import history from "../history";
import { fetchRestaurant, deleteRestaurant } from "../actions";

class RestaurantDelete extends Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.restaurant) {
      return "Are you sure you want to delete this restaurant?";
    }

    return `Are you sure you want to delete the restaurant with title: ${
      this.props.restaurant.restaurant_name
    }`;
  }

  renderActions() {
    const id = this.props.match.params.id;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteRestaurant(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Restaurant"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchRestaurant, deleteRestaurant }
)(RestaurantDelete);
