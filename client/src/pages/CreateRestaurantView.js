import React, { Component } from "react";
import { connect } from "react-redux";

import Burger from "../components/Burger";
import "../index.css";
import Title from "../components/Title";
import CreateForm from "../components/CreateForm";
import OwnerName from "../components/OwnerName";

const CreateRestaurantView = ({ title, ownerName }) => {
  return (
    <div>
      <Title title={title} />
      <Burger />
      <OwnerName addOwnerName={ownerName} />
      <CreateForm />
    </div>
  );
};

const mapStateToProps = state => {
  return { 
    title: state.title.title,
    ownerName: state.addOwnerName.addOwnerName
   };
};

export default connect(mapStateToProps)(CreateRestaurantView);
