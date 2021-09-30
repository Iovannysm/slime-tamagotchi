console.log("Tamagotchi Loaded");


// create the layout of our web page in html - done
// define some starting styles - done
// create our game object with starting values - done
// add event listener on the begin button that will trigger a game start (log start for now)
// add event listener for buttons -> on click (log for now ) - done
// add the logic to add/subtract points - done
// add logic for the timer -> reduce the time by 1 every second - done
// add logic to check if time hits zero end a round
// when we are switching rounds add logic to increase number of squares, reset time with lower value, and increment round number
// add game over logic by checking if round is equal to four, show game over in banner


const tamagotchi = {
    round: 1,
    time: 2,
    hunger: 5,
    tired: 5,
    bored: 5,
    // buttonS: $("#sleepy"),
    // buttonH: $("#hunger"),
    // buttonB: $("#bored"), 


    start(event){
        console.log("=== Game Started ===")
        this.startTimer();

    },

    timer: null,
  startTimer() {
    this.timer = setInterval(this.reduceTime.bind(tamagotchi), 1000);
  },

  reduceTime() {
    this.time--;

    $("#timer").text(tamagotchi.time);
    
  },


  click() {
    const $addPoint = this.hunger++;
    $(".life").text($addPoint);
      console.log("I have been click")
  }




}



$("#hunger").on("click", tamagotchi.click(tamagotchi));



// const $button = $(".nes-btn").click(function() {

//     const addPoint = tamagotchi.hunger++;
//     $(".h").text(addPoint);  
//     console.log("You clicked")
// });



