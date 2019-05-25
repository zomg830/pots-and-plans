import React from "react";
import { connect } from "react-redux";
import r from "../utils/randomEvent";
import { saveRestaurantDay, fetchRestaurant } from "../actions";

class RunGame extends React.Component {
  state = {
    previousBalance: null,
    event: null,
    endingBalance: null,
    netSales: null,
    userId: null
  };
  //get starting balance from db
  async componentDidMount() {
    await this.props.fetchRestaurant(this.props.id);

    this.setState({
      previousBalance: this.props.restaurant.balance,
      event: "Welcome back!",
      userId: this.props.restaurant.userId
    });
  }
  
 
  randomArray = () => {
    let array = [];
    let randomOne = Math.floor(Math.random() * 101);
    let randomTwo = Math.floor(Math.random() * 101);
    for (let i = 0; i < randomOne; i++) {
      array.push("burger");
    }
    for (let i = 0; i < randomTwo; i++) {
      array.push("hotdog");
    }
    console.log(array.length);
    return array;
  }
  

  dayGoesBy(r,id) {
    let orders = this.randomArray();
    let randomObj = r();
    this.setState({
      previousBalance: this.props.restaurant.balance,
      event: randomObj.message
    });
    let dayData = {
      time: 720 + randomObj.time,
      chefSkill: {
        burger: 4.5 + randomObj.skill,
        hotdog: 2 + randomObj.skill
      },
      newBalance: this.props.restaurant.balance + randomObj.balance,
      previousBalance: this.props.restaurant.balance
    };
    // console.log(randomOrder);
    let burgersSold = 0;
    let hotDogsSold = 0;
    for (let i = 0; i < orders.length; i++) {
      // the loop is not ending whenever it gets over the length of the array.
      // console.log(randomOrder[i]);
      if (
        orders[i] === "burger" &&
        dayData.time > dayData.chefSkill.burger
      ) {
        dayData.time -= dayData.chefSkill.burger * 3;
        burgersSold++;
      }
      if (
        orders[i] === "hotdog" &&
        dayData.time > dayData.chefSkill.hotdog
      ) {
        dayData.time -= dayData.chefSkill.hotdog * 3;
        hotDogsSold++;
      }
    }
    if (dayData.time <= 0) {
      this.dayOver(burgersSold, hotDogsSold, dayData);
    }

    //update db with newBalance
    //pass in id, restaurant data
  }

  dayOver = (burgers, hotdogs, dayData) => {
    let burgerSales = burgers * 3;
    let hotdogSales = hotdogs * 2;
    let totalSales = burgerSales + hotdogSales;
    dayData.newBalance += totalSales;
    this.props.saveRestaurantDay(this.props.id, dayData);
    this.setState({
      endingBalance: dayData.newBalance,
      netSales: dayData.newBalance - dayData.previousBalance
    });
  };

  render() {
    if (!this.props.restaurant || !this.state.userId) {
      return <div>Loading...</div>;
    }

    if (this.props.currentUserId !== this.state.userId) {
      return <div>You do not have permission to play as this restaurant</div>;
    }

    return (
      <div className="ui container">
        <div className="ui horizontal segments">
          <div className="ui segment">
            <p>Previous Balance: ${this.state.previousBalance}</p>
          </div>
          <div className="ui segment">
            <p>
              Daily Message:{" "}
              {!this.state.event ? "Nothing today!" : this.state.event}
            </p>
          </div>
          <div className="ui segment">
            <p>Ending Balance: ${this.state.endingBalance}</p>
          </div>
          <div className="ui segment">
            <p>Net Sales: ${this.state.netSales}</p>
          </div>
        </div>
        <button onClick={() => this.dayGoesBy(r, this.props.id)}>
          Run Game
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.id],
    currentUserId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  { saveRestaurantDay, fetchRestaurant }
)(RunGame);

