//chooses a random event and returns an object with the results of that event. 
//the values of this object will be applied to the game loop at the beginning of each day

export default function randomEvent() {
    let result = {
        time: 0,
        skill: 0,
        balance: 0,
        message: "",
        imageURL: ""
    }
    

    const events = ["good_sleep", "bad_sleep", "plumbing", "convention", "bad_weather", "good_weather", "inspection", "competition",  "none", "none", "none", "none","none", "none", "none", "none","none", "none", "none", "none","none", "none", "none", "none", "none", "none", "none", "none","none", "none", "none", "none"]

    let todaysEvent = events[Math.floor(Math.random() * events.length)];

    switch (todaysEvent) {
        case "good_sleep":
            result.skill += 2;
            result.balance = 0;
            result.time = 0;
            result.message = "Your cook got a good night's sleep!!  Cooking Skill increases.";
            result.imageURL = "http://31.media.tumblr.com/9676f7b0d464eacbc2a06c796df97ccf/tumblr_mqc0tjK9le1qbcswco1_500.gif"
            break;
        case "bad_sleep":
            result.skill -= 2;
            result.balance = 0;
            result.time = 0;
            result.message = "Your cook didn't sleep a wink last night.  Cooking Skill decreases."
            result.imageURL = "../imageURLs/sleepy.gif"
            break;
        case "plumbing":
            result.balance -= 1050;
            result.skill = 0;
            result.time = 0;
            result.message = "Oh no, the water main burst!!  Pay the plumber $1050.00."
            result.imageURL = "../imageURLs/plumber.png"
            break;
        case "convention":
            result.time += 150;
            result.balance = 0;
            result.skill = 0;
            result.message = "There's a Convention this week!!  Walk-in traffic increases."
            result.imageURL = "https://media.giphy.com/media/FM0DQEF2JNja0/giphy.gif"
            break;
        case "bad_weather":
            result.balance -= 1500;
            result.skill = 0;
            result.time = 0;
            result.message = "It rained all day!!  Sales decrease by 15%."
            result.imageURL = "https://media.giphy.com/media/U9Fp3ZNzHmOZi/giphy.gif"
            break;
        case "good_weather":
            result.balance += 1500;
            result.skill = 0;
            result.time = 0;
            result.message = "The weather is perfect for getting a burger!!  Sales increase by 15%."
            result.imageURL = "https://media0.giphy.com/media/QJJnTE1C1bKnz4Elxa/giphy.gif"
            break;
        case "inspection":
            result.balance -= 1500;
            result.balance = 0;
            result.skill = 0;
            result.time = 0;
            result.message = "Bad health inspection.  Give inspector $1000.00 bribe."
            result.imageURL = "./imageURLs/inspection.png"
            break;
        case "competition":
            result.time += 150;
            result.balance = 0;
            result.skill = 0;
            result.message = "Your competition had to close due to poor health inspection.  Walk-in traffic increases."
            result.imageURL = "https://media.giphy.com/media/FM0DQEF2JNja0/giphy.gif"
            break;
    }
 return result;

}