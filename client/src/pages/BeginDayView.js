import React from "react";

import "../index.css";
import Title from "../components/Title";
import GoogleAuth from "../components/GoogleAuth";

const BeginDayView = () => {
  //grabbed the name of the restaurant from the url
  let name = window.location.href;
  name = name.split('/');
  name = name[6];
  console.log(name);

  return (
    <Title title={name}/>
  );
};

export default BeginDayView;
