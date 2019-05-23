import React from 'react';
import API from "../utils/API";
import history from "../history";


class testingCode extends React.Component {


    chefSkill = {};
    orders = ["burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog"];
    orderEasy = ["hotdog", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog"]
    // we can set the time to the random variable when choosing the random chance issue that could appear and add it to the time that goes inside of the loop, this could be a variable like randomTime

    orderTest = ["hotdog", "burger", "hotdog", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog"]

    //get starting balance from db 
    DayGoesBy(chefSkill, time, orders,  r) {
        let incomingData = API.getRestaurant(this.props.match.params.id);
        let dayData = {
            time: 720 + r.time,
            chefSkill: { 
                burger: 4.5 + r.skill,
                hotdog: 2 + r.skill 
            },
            newBalance: incomingData.balance + r.balance
        }

        let randomOrder = orders
            // sorts the array randomly
            .sort(function () {
                return 0.5 - Math.random();
            })
        // console.log(randomOrder);
        let burgersSold = 0;
        let hotDogsSold = 0;
        for (let i = 0; i < randomOrder.length; i++) {
            // the loop is not ending whenever it gets over the length of the array.
            // console.log(randomOrder[i]);
            if (randomOrder[i] === "burger" && dayData.time > dayData.chefSkill.burger) {
                dayData.time -= dayData.chefSkill.burger
                burgersSold++
            }
            if (randomOrder[i] === "hotdog" && dayData.time > dayData.chefSkill.hotdog) {
                dayData.time -= dayData.chefSkill.hotdog
                hotDogsSold++
            }
        }
        if (dayData.time <= 0) {
            DayOver(burgersSold, hotDogsSold);
            
        }
        else {
            DayOver(burgersSold, hotDogsSold);
            
        }
        API.editRestaurant(this.props.match.params.id, dayData)
        //update db with newBalance
        //pass in id, restaurant data
        
    }
    DayOver(burgers, hotdogs) {
        let burgerSales = burgers * 3;
        let hotdogSales = hotdogs * 2;
        var totalSales = burgerSales + hotdogSales;
        console.log("Total burgers sold: " + burgers);
        console.log("Total hot-dogs sold: " + hotdogs);
        console.log("The total sales are: $" + totalSales);
    }
    // DayGoesBy(chefSkill, time, orders, randomEvent());
    // DayGoesBy(chefSkill, time, orderEasy);
    // DayGoesBy(chefSkill, time, orderTest);
}

export default testingCode;