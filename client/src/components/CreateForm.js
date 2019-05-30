import React, { Component } from "react";
import { connect } from "react-redux";

import { createRestaurant, changeTitle, changeOwnerName } from "../actions";

class CreateForm extends Component {
  state = { restaurantName: "", ownerName: "", balance: null };

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

  handleDifficulty = str => {
    switch (str) {
      case "easy":
        this.setState({ balance: 25000 });
        break;
      case "medium":
        this.setState({ balance: 15000 });
        break;
      case "hard":
        this.setState({ balance: 7500 });
      default:
        return null;
    }
  };

  onFormSubmit = e => {
    e.preventDefault();

    if (
      !this.state.restaurantName ||
      !this.state.ownerName ||
      !this.state.balance
    ) {
      this.renderError();
    }

    if (
      this.state.restaurantName &&
      this.state.ownerName &&
      this.state.balance
    ) {
      const restaurantData = {
        restaurant_name: this.state.restaurantName,
        owner_name: this.state.ownerName,
        balance: this.state.balance
      };
      this.props.createRestaurant(restaurantData);
      this.props.changeTitle("");
      this.props.changeOwnerName("");
    }
  };

  render() {
    return this.props.currentUserId ? (
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
          <div className="ui buttons right floated">
            <button
              className="ui button"
              type="button"
              onClick={() => this.handleDifficulty("easy")}
            >
              Easy ($25,000)
            </button>
            <button
              className="ui button"
              type="button"
              onClick={() => this.handleDifficulty("medium")}
            >
              Medium ($15,000)
            </button>
            <button
              className="ui button"
              type="button"
              onClick={() => this.handleDifficulty("hard")}
            >
              Hard ($7,500)
            </button>
          </div>
        </form>
      </div>
    ) : (
      <div>Please sign in to create a restaurant</div>
    );
  }
}

const mapStateToProps = state => {
  return { userId: state.auth.userId, currentUserId: state.auth.userId };
};

export default connect(
  mapStateToProps,
  { createRestaurant, changeTitle, changeOwnerName }
)(CreateForm);
