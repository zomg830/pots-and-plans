import React from "react";
import { connect } from "react-redux";

import "../index.css";
import Title from "../components/Title";
import RunGame from "../components/RunGame";

const BeginDayView = props => {
  const id = props.match.params.id;
  return (
    <div>
      <Title
        title={!props.restaurant ? null : props.restaurant.restaurant_name}
      />
      <RunGame id={id} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps)(BeginDayView);
