import React from "react";
import GoogleAuth from "./GoogleAuth";
import Title from "./Title";
import Burger from "./Burger.js";


function App() {

  return (
    <div>
      <Title />
      <Burger />
      <GoogleAuth isSignedIn = {true}/>
      
    </div>
  )
}

export default App;
