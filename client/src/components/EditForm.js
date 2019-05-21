import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchRestaurant, editRestaurant } from "../actions";

class EditForm extends Component {
  state = { restaurantName: null, ownerName: null, userId: null };

  async componentDidMount() {
    await this.props.fetchRestaurant(this.props.page);
    //This allows the restaurant to collect the information before rendering
    //Without this syntax you will receive a "cannot read property of undefined" error

    this.setState({
      restaurantName: this.props.restaurant.restaurant_name,
      ownerName: this.props.restaurant.owner_name,
      userId: this.props.restaurant.userId
    });
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = formValues => {
    this.props.editRestaurant(this.props.page, formValues);
  };

  renderError = component => {
    if (!this.state.restaurantName && component === "restaurant") {
      return "Enter a restaurant name!";
    }
    if (!this.state.ownerName && component === "owner") {
      return "Enter your name!";
    }
  };

  onFormSubmit = e => {
    e.preventDefault();

    if (!this.state.restaurantName || !this.state.ownerName) {
      this.renderError();
    }

    if (this.state.restaurantName && this.state.ownerName) {
      const restaurantData = {
        restaurant_name: this.state.restaurantName,
        owner_name: this.state.ownerName
      };
      this.props.editRestaurant(this.props.page, restaurantData);
    }
  };

  render() {
    if (!this.props.restaurant || !this.state.userId) {
      return <div>Loading...</div>;
    }

    if (this.props.currentUserId !== this.state.userId) {
      return <div>You do not have permission to edit this restaurant</div>;
    }

    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui field">
            <label>Restaurant Name</label>
            <input
              value={this.state.restaurantName}
              autoComplete="off"
              name="restaurantName"
              onChange={this.onInputChange}
              placeholder={this.renderError("restaurant")}
            />
            <label>Owner</label>
            <input
              value={this.state.ownerName}
              autoComplete="off"
              name="ownerName"
              onChange={this.onInputChange}
              placeholder={this.renderError("owner")}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.page],
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { fetchRestaurant, editRestaurant }
)(EditForm);
