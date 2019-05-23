import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "./Modal";
import history from "../history";
import { fetchRestaurant, deleteRestaurant } from "../actions";

class RestaurantDelete extends Component {
  state = { userId: "" };

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.id).then(() => {
      this.setState({
        userId: this.props.restaurant.userId
      });
      console.log(this.props);
    });
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
    if (!this.props.restaurant) {
      return <div>Loading...</div>;
    }
    if (this.props.currentUserId !== this.state.userId) {
      return <div>You do not have permission to edit this restaurant</div>;
    }
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
    restaurant: state.restaurants[ownProps.match.params.id],
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchRestaurant, deleteRestaurant }
)(RestaurantDelete);
