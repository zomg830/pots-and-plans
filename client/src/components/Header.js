import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";
import InstructionsModal from "./InstructionsModal";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" style={{ color: "rgb(19, 185, 19)" }} className="item">
        Home
      </Link>
      <Link to="/create" style={{ color: "rgb(58, 143, 182)" }} className="item">
        Create
      </Link>
      <Link to="#" >
        <InstructionsModal />
      </Link>
     
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
