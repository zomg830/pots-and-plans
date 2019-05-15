import React, { Component } from "react";
import history from "../history";

class CreateForm extends Component {
  state = { restaurantName: "", ownerName: "" };

  onInputChange = e => this.setState({ [e.target.name]: e.target.value });

  renderError = component => {
    if (!this.state.restaurantName && component === "restaurant") {
      return "Enter a restaurant name!";
    }
    if (!this.state.ownerName && component === "owner") {
      return "Enter your name!";
    }
  };

  clearInput = () => {
    this.setState({ restaurantName: "", ownerName: "" });
  };

  onFormSubmit = e => {
    if (!this.state.restaurantName || !this.state.ownerName) {
      e.preventDefault();
      this.renderError();
      this.clearInput();
    }

    if (this.state.restaurantName && this.state.ownerName) {
      console.log(this.state);
      history.push("/");
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

export default CreateForm;
