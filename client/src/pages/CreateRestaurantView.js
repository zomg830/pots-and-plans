import React, { Component } from "react";

import Burger from "../components/Burger";
import "../index.css";
import Title from "../components/Title";
import CreateForm from "../components/CreateForm";

const CreateRestaurantView = () => {
  return (
    <div>
      <Title title="Create Restaurant" />
      <Burger />
      <CreateForm />
    </div>
  );
};
export default CreateRestaurantView;
