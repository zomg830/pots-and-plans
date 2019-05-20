import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";
import InstructionsModal from "./InstructionsModal";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" style={{ color: "white" }} className="item">
        Home
      </Link>
      <Link to="/create" style={{ color: "white" }} className="item">
        Create
      </Link>
      <InstructionsModal />
      <div className="right menu">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
