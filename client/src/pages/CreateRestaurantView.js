import React, { Component } from "react";
import { connect } from "react-redux";

import Burger from "../components/Burger";
import "../index.css";
import Title from "../components/Title";
import CreateForm from "../components/CreateForm";

const CreateRestaurantView = ({ title }) => {
  return (
    <div>
      
      <Title title={title} />
      <Burger />
      <CreateForm />
    </div>
  );
};

const mapStateToProps = state => {
  return { title: state.title.title };
};

export default connect(mapStateToProps)(CreateRestaurantView);
