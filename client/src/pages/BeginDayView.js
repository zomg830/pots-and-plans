import React from "react";

import "../index.css";
import Title from "../components/Title";
import RunGame from "../components/RunGame";

const BeginDayView = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div>
      <Title />
      <RunGame id={id} />
    </div>
  );
};
export default BeginDayView;
