import React, { Component } from "react";

import "../index.css";
import Title from "../components/Title";
import Burger from "../components/Burger";
import RestaurantList from "../components/RestaurantList";

const LandingView = () => {
  return (
    <div>
      <Title title="Home" />
      <Burger />
      <RestaurantList />
    </div>
  );
};

export default LandingView;
