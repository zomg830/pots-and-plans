var chefSkill = {"burger":2.5,"hotdog":1.5};
var orders = ["burger","hot-dog","hot-dog","hot-dog","hot-dog","hot-dog","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","hot-dog","hot-dog","hot-dog","hot-dog","hot-dog","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","hot-dog","hot-dog","hot-dog","hot-dog","hot-dog","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","hot-dog","hot-dog","hot-dog","hot-dog","hot-dog","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","hot-dog","hot-dog","hot-dog","hot-dog","hot-dog","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","hot-dog","hot-dog","hot-dog","hot-dog","hot-dog","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","hot-dog","hot-dog","hot-dog","hot-dog","hot-dog","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger"];
let time = 720;
// we can set the time to the random variable when choosing the random chance issue that could appear and add it to the time that goes inside of the loop, this could be a variable like randomTime



function DayGoesBy(chefSkill,time,orders){
    time = 720;
    let randomOrder = orders.sort(function(){
        return 0.5 - Math.random();
    })
    let orderA = 0;
    let orderB = 0;
for ( let i = 0; i< randomOrder.length; i++){
        
    while(time > 0){
        if (randomOrder[i] === "burger"){
            time -= chefSkill.burger
            orderA++
           console.log(time);

        }
        if(randomOrder[i] === "hot-dog"){
            time -= chefSkill.hotdog
            orderB++
            console.log(time);

        }
    }
    while(time <= 0){
            DayOver(orderA,orderB);
            return;
    }
}
}

function DayOver(A,B){
   let burgerSales = A * 3;
   let hotdogSales = B * 2;
   var totalSales = burgerSales + hotdogSales;
   console.log("The total sales are: $" + totalSales);
}

DayGoesBy(chefSkill,time,orders);