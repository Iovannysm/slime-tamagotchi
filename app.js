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

    buttons: ["hunger", "tired", "bored"],
    hunger: 5,
    sleepy: 5,
    bored: 5,
    // buttonS: $("#sleepy"),
    // buttonH: $("#hunger"),
    // buttonB: $("#bored"), 


    start(event){
        console.log("=== Game Started ===")
        this.startTimer();
        this.reducePointB();
        this.reducePointH();
        this.reducePointS();

    },
        /*=== Timer of the game ===  */
    timer: null,
  startTimer() {
    this.timer = setInterval(this.reduceTime.bind(tamagotchi), 1000);
  },

  reduceTime() {
    this.time--;
    $("#timer").text(tamagotchi.time);
    
  },
/* === Button handler === */
//This method gives points to the elements.

  //This method is for hunger
  clickedH() {
    const $addPoint = this.hunger++;
    $(".h").text($addPoint);
      console.log("I have been click")
  },

  //This method is for sleepy
  clickedS() {
    const $addPoint = this.sleepy++;
    $(".s").text($addPoint);
      console.log("I have been click")
  },

  //This is for bored
  clickedB() {
    const $addPoint = this.bored++;
    $(".b").text($addPoint);
      console.log("I have been click")
  },

  /* === Point system handler === */


    // I take points from hunger. 
  pointH: null,
  subtractPointsH() {
    this.pointH = setInterval(this.reducePointH.bind(tamagotchi), 1500);
    console.log("I take points");

  },

  reducePointH(){
    this.hunger--;
    $(".h").text(tamagotchi.hunger);

  },

  //I take points from sleepy
  pointS: null,
  subtractPointsS() {
    this.pointS = setInterval(this.reducePointS.bind(tamagotchi), 1500);
    console.log("I take points");

  },

  reducePointS(){
    this.sleepy--;
    $(".s").text(tamagotchi.sleepy);

  },
  //I take points from Bored
  pointB: null,
  subtractPointsB() {
    this.pointB = setInterval(this.reducePointB.bind(tamagotchi), 1500);
    console.log("I take points");

  },

  reducePointB(){
    this.bored--;
    $(".b").text(tamagotchi.bored);

  },






}



$("#hunger").on("click", tamagotchi.clickedH.bind(tamagotchi));
$("#sleepy").on("click", tamagotchi.clickedS.bind(tamagotchi));
$("#bored").on("click", tamagotchi.clickedB.bind(tamagotchi));

// const $button = $(".nes-btn").click(function() {

//     const addPoint = tamagotchi.hunger++;
//     $(".h").text(addPoint);  
//     console.log("You clicked")
// });



