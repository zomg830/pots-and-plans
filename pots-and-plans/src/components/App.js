import React from "react";
import LandingView from './LandingView';
import BeginDayView from './BeginDayView';
import CreateRestaurantView from './CreateRestaurantView';


class App extends React.Component {

  state={
    isSignedIn: false,
  }

  render(){
    // if (this.state.isSignedIn === false){
    //   return(<LandingView />)
    // }
    //else if the user has not created a restaurant yet, go to Create Restaurant view
    //else if (!restaurantCreated){
      return (<CreateRestaurantView />)
    // }
    // else{
      // return (<BeginDayView />)
    // }
    
  }

 
}

export default App;
