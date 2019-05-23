import React from 'react';
import API from "../utils/API";
import r from "../utils/randomEvent"


const RunGame = (id) => {

    let orders = ["burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog"];
    let orderEasy = ["hotdog", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog"]
    // we can set the time to the random variable when choosing the random chance issue that could appear and add it to the time that goes inside of the loop, this could be a variable like randomTime

    let orderTest = ["hotdog", "burger", "hotdog", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog"]

    //get starting balance from db 
    async function dayGoesBy (orders,  r, id) {
        let incomingData = await API.getRestaurant(id);
        console.log(incomingData)
        let randomObj = r();
        console.log(randomObj)
        let dayData = {
            time: 720 + randomObj.time,
            chefSkill: { 
                burger: 4.5 + randomObj.skill,
                hotdog: 2 + randomObj.skill 
            },
            newBalance: incomingData.data.balance + randomObj.balance
        }
        console.log("dayData", dayData)
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
                dayData.time -= dayData.chefSkill.burger * 3
                burgersSold++
            }
            if (randomOrder[i] === "hotdog" && dayData.time > dayData.chefSkill.hotdog) {
                dayData.time -= dayData.chefSkill.hotdog * 3
                hotDogsSold++
            }
        }
        if (dayData.time <= 0) {
            dayOver(burgersSold, hotDogsSold);
            console.log(API.editRestaurant(id, dayData))
            API.editRestaurant(id, dayData)
        }

        //update db with newBalance
        //pass in id, restaurant data
        
    }
    const dayOver = (burgers, hotdogs) => {
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
    dayGoesBy(orders, r, id)
}

export default RunGame
