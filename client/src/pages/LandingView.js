import React, { Component } from "react";

import "../index.css";
import Title from "../components/Title";
import Burger from "../components/Burger";
import GoogleAuth from "../components/GoogleAuth";
import API from "../utils/API";

class LandingView extends Component {
  componentDidMount() {
    this.loadRestaurants();
  }

  loadRestaurants = () => {
    API.getRestaurants()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Title title="Home" />
        <Burger />
      </div>
    );
  }
}
export default LandingView;
