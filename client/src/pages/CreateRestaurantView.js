import React, { Component } from "react";

import Burger from "../components/Burger";
import "../index.css";
import Title from "../components/Title";
import CreateForm from "../components/CreateForm";
import API from "../utils/API";

class CreateRestaurantView extends Component {
  render() {
    return (
      <div>
        <Title title="Create Restaurant" />
        <Burger />
        <CreateForm />
      </div>
    );
  }
}
export default CreateRestaurantView;
