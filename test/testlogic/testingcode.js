import API from '....'

var chefSkill = {  };
var orders = ["burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog"];
var orderEasy = ["hotdog", "burger", "burger", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog", "hotdog"]
// we can set the time to the random variable when choosing the random chance issue that could appear and add it to the time that goes inside of the loop, this could be a variable like randomTime

var orderTest = ["hotdog", "burger", "hotdog", "burger","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog","hotdog"]

//get starting balance from db 
function DayGoesBy(chefSkill, time, orders, balance, r) {
    let time = 720 + r.time
    let chefSkill = {"burger": 4.5 + r.skill, "hotdog": 2 + r.skill};
    let newBalance = balance + r.balance;
    let randomOrder = orders
        // sorts the array randomly
        .sort(function () {
            return 0.5 - Math.random();
        })
    // console.log(randomOrder);
    let orderA = 0;
    let orderB = 0;
        for (let i = 0; i < randomOrder.length; i++) {
            // the loop is not ending whenever it gets over the length of the array.
            // console.log(randomOrder[i]);
            if (randomOrder[i] === "burger" && time > chefSkill.burger) {
                time -= chefSkill.burger
                orderA++
                //    console.log(time);
            }
            if (randomOrder[i] === "hotdog" && time > chefSkill.hotdog) {
                time -= chefSkill.hotdog
                orderB++
                // console.log(time);
            }
        }
        if (time <= 0) {
            console.log(time);
            DayOver(orderA, orderB);
            return;
        }
        else {
            console.log(time);
            DayOver(orderA, orderB);
            return;
        }

        //update db with newBalance

}
function DayOver(A, B) {
    let burgerSales = A * 3;
    let hotdogSales = B * 2;
    var totalSales = burgerSales + hotdogSales;
    console.log("Total burgers sold: " + A);
    console.log("Total hot-dogs sold: " + B);
    console.log("The total sales are: $" + totalSales);
}
DayGoesBy(chefSkill, time, orders, randomEvent());
DayGoesBy(chefSkill, time, orderEasy);
DayGoesBy(chefSkill, time, orderTest);