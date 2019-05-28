import React from "react";
import { connect } from "react-redux";

import Modal from "../components/Modal";
import r from "../utils/randomEvent";
import { saveRestaurantDay, fetchRestaurant } from "../actions";
import dollarSign from "../images/dollarSign.gif";

class RunGame extends React.Component {
  state = {
    event: null,
    endingBalance: null,
    userId: null
  };
  //get starting balance from db
  async componentDidMount() {
    await this.props.fetchRestaurant(this.props.id);
    this.setState({
      event: "Welcome back!",
      userId: this.props.restaurant.userId
    });
  }
  randomGenerator() {
    return Math.floor(Math.random() * (100 - 50) + 50);
  }

  randomArray = () => {
    let array = [];
    let randomOne = this.randomGenerator();
    let randomTwo = this.randomGenerator();
    for (let i = 0; i < randomOne; i++) {
      array.push("burger");
    }
    for (let i = 0; i < randomTwo; i++) {
      array.push("hotdog");
    }
    return array;
  };

  dayGoesBy(r, id) {
    console.log("onClick state", this.state);
    let orders = this.randomArray();
    let randomObj = r();
    this.setState({
      // getting the current balance listed on the DB
      event: randomObj.message
    });
    let dayData = {
      time: 720 + randomObj.time,
      chefSkill: {
        burger: 5 + randomObj.skill,
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

      if (orders[i] === "burger" && dayData.time > dayData.chefSkill.burger) {
        dayData.time -= dayData.chefSkill.burger;
        burgersSold++;
      }
      if (orders[i] === "hotdog" && dayData.time > dayData.chefSkill.hotdog) {
        dayData.time -= dayData.chefSkill.hotdog;
        hotDogsSold++;
      }
      if (dayData.time <= 0) {
        return this.dayOver(burgersSold, hotDogsSold, dayData);
      }
    }
    this.dayOver(burgersSold, hotDogsSold, dayData);
  }

  dayOver = async (burgers, hotdogs, dayData) => {
    console.log("dayOver starting state", this.state);
    let burgerSales = burgers * 7;
    let hotdogSales = hotdogs * 2;
    let totalSales = burgerSales + hotdogSales;
    dayData.newBalance += totalSales;
    await this.props.saveRestaurantDay(this.props.id, {
      balance: dayData.newBalance,
      dayData: dayData
    });
    this.setState({
      endingBalance: dayData.newBalance,
      netSales: dayData.newBalance - dayData.previousBalance,
      loadingDay: false
    });
  };

  renderModalContent = () => {
    return "Select a starting location";
  };

  renderModalActions = () => {
    return (
      <React.Fragment>
        <button
          onClick={() =>
            this.props.saveRestaurantDay(this.props.id, {
              location: "Food Truck",
              balance: this.props.restaurant.balance - 2500
            })
          }
          className="ui button negative"
        >
          Food Truck
        </button>
        <button
          className="ui button"
          onClick={() =>
            this.props.saveRestaurantDay(this.props.id, {
              location: "Restaurant",
              balance: this.props.restaurant.balance - 5000
            })
          }
        >
          Restaurant
        </button>
      </React.Fragment>
    );
  };

  render() {
    if (!this.props.restaurant || !this.state.userId) {
      return <div>Loading...</div>;
    }

    if (this.props.currentUserId !== this.state.userId) {
      return <div>You do not have permission to play as this restaurant</div>;
    }

    if (!this.props.restaurant.location) {
      return (
        <Modal
          title="Select a Location"
          content={this.renderModalContent()}
          actions={this.renderModalActions()}
        />
      );
    }

    return (
      <div className="ui container">
        {/* test code: create sales report */}
        <div id="container" className="row justify-content-md-center">
          <div className="col col-md-2">
            <img src={dollarSign} alt="burger" id="dollarSign-img" />
          </div>
          <div className="col-md-auto">
            <p id="balance">Opening Balance:</p>
            <p id="prevBalance">${this.props.restaurant.balance}</p>
          </div>
          <div className="col col-md-2">
            <img src={dollarSign} alt="dollar sign" id="dollarSign-img" />
          </div>
        </div>
        {/* second row */}
        <div id="wrapper" className="row justify-content-md-center">
          <div id="dailyMssg" className="col-5">
            <p className="dailyMssg">Daily Message: </p>
            <br />
            <p>{!this.state.event ? "Nothing today!" : this.state.event}</p>
          </div>
          <div className="col-3">
            <p className="totalProfit">Total Profit: </p>
            <p className="profitAmnt">${this.state.netSales}</p>
          </div>
          <div className="col-4">
            <div className="endingBalance">
              <p className="endBalance">Ending Balance: </p>
              <p className="endingAmnt">
                $
                {this.props.restaurant.dayData.newBalance + this.state.netSales}
              </p>
            </div>
          </div>
        </div>
        <button
          className="runGame"
          onClick={() => {
            this.setState({
              loadingDay: true
            });
            this.dayGoesBy(r, this.props.id);
          }}
        >
          {this.state.loadingDay ? (
            <i className="ui active centered inline loader" />
          ) : (
            "Run Game"
          )}
        </button>{" "}
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
