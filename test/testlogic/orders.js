
function randomArray(){
    let array = [];
    let randomOne = randomGenerator();
    let randomTwo = randomGenerator();
    for(let i= 0 ; i< randomOne ; i++){
        array.push("burger");
    }
    for(let i= 0 ; i< randomTwo ; i++){
        array.push("hotdog");
    }
    console.log(array.length);
    return array;
    

}

randomArray();

function randomGenerator(){
    return Math.floor(Math.random() * 101);
}