import React from "react";
import { connect } from "react-redux";

import Burger from "../components/Burger";
import "../index.css";
import Title from "../components/Title";
import EditForm from "../components/EditForm";

const EditRestaurantView = props => {
  return (
    <div>
      <Title title={props.title} />
      <Burger />
      <EditForm page={props.match.params.id} />
    </div>
  );
};

const mapStateToProps = state => {
  return { title: state.title.title };
};

export default connect(mapStateToProps)(EditRestaurantView);
