var chefSkill = {"burger":1.5,"hotdog":1};
var time = 120;
var orders = ["burger","hot-dog","hot-dog","hot-dog","hot-dog","hot-dog","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger","burger"];

function DayGoesBy(chefSkill,time,orders){
    let randomOrder = orders.sort(function(){
        return 0.5 - Math.random();
    })
    for ( let i = 0; i< randomOrder.length; i++){
        let orderA = 0;
        let orderB = 0;
        if (randomOrder[i]=== "burger" && time > 0){
            time -= chefSkill.burger
            orderA++
           
        }if(randomOrder[i]=== "hot-dog" && time > 0){
            time -= chefSkill.hotdog
            orderB++
            
        }else{
            DayOver(orderA,orderB);
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