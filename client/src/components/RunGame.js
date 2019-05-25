import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import orders from "../utils/orders";
import r from "../utils/randomEvent";
import { saveRestaurantDay, fetchRestaurant } from "../actions";
import Modal from "../components/Modal";

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

  dayGoesBy(orders, r) {
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
    let randomOrder = orders
      // sorts the array randomly
      .sort(function() {
        return 0.5 - Math.random();
      });
    // console.log(randomOrder);
    let burgersSold = 0;
    let hotDogsSold = 0;
    for (let i = 0; i < randomOrder.length; i++) {
      // the loop is not ending whenever it gets over the length of the array.
      // console.log(randomOrder[i]);
      if (
        randomOrder[i] === "burger" &&
        dayData.time > dayData.chefSkill.burger
      ) {
        dayData.time -= dayData.chefSkill.burger * 3;
        burgersSold++;
      }
      if (
        randomOrder[i] === "hotdog" &&
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

  renderModalContent = () => {
    return "Select a starting location";
  };

  renderModalActions = () => {
    const id = this.props.id;

    return (
      <React.Fragment>
        <button
          onClick={() =>
            this.props.saveRestaurantDay(this.props.id, {
              location: "Food Truck"
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
              location: "Restaurant"
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
        <button onClick={() => this.dayGoesBy(orders, r, this.props.id)}>
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
