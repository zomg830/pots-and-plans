import React, { Component } from "react";
import { connect } from "react-redux";

import { createRestaurant, changeTitle, changeOwnerName } from "../actions";

class CreateForm extends Component {
  state = { restaurantName: "", ownerName: "" };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "restaurantName")
      this.props.changeTitle(e.target.value);
  };

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.changeOwnerName(e.target.value);
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
      this.props.createRestaurant(restaurantData);
    }
  };

  render() {
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
              onChange={this.inputChange}
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

const mapStateToProps = state => {
  return { userId: state.auth.userId };
};

export default connect(
  mapStateToProps,
  { createRestaurant, changeTitle, changeOwnerName }
)(CreateForm);
