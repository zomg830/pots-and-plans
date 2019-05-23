import React from "react";
import { connect } from "react-redux";

import Burger from "../components/Burger";
import "../index.css";
import Title from "../components/Title";
import EditForm from "../components/EditForm";

const EditRestaurantView = props => {
  return (
    <div>
      <Title title="Edit Restaurant" />
      <Burger />
      <EditForm page={props.match.params.id} />
    </div>
  );
};

export default EditRestaurantView;
