import React from "react";

import "../index.css";
import Title from "../components/Title";
import StartDayButton from "../components/StartDayButton";

const BeginDayView = (props) => {
  console.log(props)
  const id = props.match.params.id
  return (
    <div>
      <Title />
      <StartDayButton id={id} />
    </div>
  );
};
export default BeginDayView;
