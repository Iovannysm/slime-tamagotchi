console.log("Tamagotchi Loaded");


// create the layout of our web page in html - done
// define some starting styles - done
// create our game object with starting values - done
// add event listener on the begin button that will trigger a game start (log start for now)
// add event listener for buttons -> on click (log for now ) - done
// add the logic to add/subtract points - done
// add logic for the timer -> reduce the time by 1 every second - done
// add logic to check if time hits zero end a round --done
// add game over logic by checking if round is equal to four.


const tamagotchi = {
    round: 1,
    time: 2,
    hunger: 5,
    sleepy: 5,
    bored: 5,
    button: $("start-button"),
   

  /* === Starts the game === */
    start(event){
        console.log("=== Game Started ===")
        this.resetGame();
        this.startTimer();
        this.reducePointB();
        this.reducePointH();
        this.reducePointS();
        this.setUpRound();

    },  
    /* === This resets the game=== */
    resetGame(){
        this.round = 0;
        this.hunger = 5;
        this.sleepy = 5;
        this.bored = 5;
        $(".h, .s, .b").text("5");
        $("#timer").text("30");
        clearInterval(this.timer);
        clearInterval(this.pointB);
        clearInterval(this.pointH);
        clearInterval(this.pointS);
        this.setUpRound();
    },



        /*=== Timer of the game ===  */
    timer: null,
  startTimer() {
    this.timer = setInterval(this.reduceTime.bind(tamagotchi), 1000);
  },

  reduceTime() {
    this.time--;
    $("#timer").text(tamagotchi.time);
    if (this.time <= 0) {
        this.round++;
        this.setUpRound();
        console.log(this);
    }
    
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

  /* === This method sets up the round=== */
  setUpRound(){
    if(this.hunger <= 0 || this.sleepy <= 0 || this.bored <= 0 ) {
        clearInterval(this.timer);
        //render option of game over try again button.
    }else if (this.round >= 4) { 
        clearInterval(this.timer);
        // render option of game over  message: Your slime started to hibernate 
    } else {
        this.time = Math.floor(30 / this.round) + 10;
    }
  },



};

/* This event listener start the game */

tamagotchi.button.click(tamagotchi.start.bind(tamagotchi));


// This events listener calls on the click methods inside the tamagotchi object.

$("#hunger").on("click", tamagotchi.clickedH.bind(tamagotchi));
$("#sleepy").on("click", tamagotchi.clickedS.bind(tamagotchi));
$("#bored").on("click", tamagotchi.clickedB.bind(tamagotchi));

// const $button = $(".nes-btn").click(function() {

//     const addPoint = tamagotchi.hunger++;
//     $(".h").text(addPoint);  
//     console.log("You clicked")
// });



