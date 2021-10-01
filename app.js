console.log("Tamagotchi Loaded");


const tamagotchi = {
    round: 1,
    time: 30,
    hunger: 5,
    sleepy: 5,
    bored: 5,
    button: $("#start-button"),
    tryAgain: $("#try-again"),
    gameDone: `Your Slime Started To Hibernate!"`,
   

  /* === Starts the game === */
    start(event){
        console.log("=== Game Started ===")
        this.hideStartWindow();
        this.resetGame();
        this.setUpRound();
        this.startTimer();
        this.subtractPointsB();
        this.subtractPointsH();
        this.subtractPointsS();
        this.inputText();

        
    },  
    /* === This resets the game=== */
    resetGame(){
        this.round = 1;
        this.hunger = 5;
        this.sleepy = 5;
        this.bored = 5;
        this.time = 20;
        $(".h, .s, .b").text("5");
        $("#timer").text("30");
        clearInterval(this.timer);
        clearInterval(this.pointB);
        clearInterval(this.pointH);
        clearInterval(this.pointS);
    },


    hideStartWindow() {
        $("#modal").hide();
    },


    gameOver(){
        $("#game-area").empty();
        $("#game-area").append(
            `<section class="nes-container" id="game-over">
                <div class="nes-container with-title is-centered">
                    <p class="title">Game Over</p>
                    <p>${this.gameDone}</p>
                </div>
                <div class="try-container">
                    <a class="nes-btn" id="try-again" href="#">Hit Command R to play again.</a>
                </div>
            </section>`
        );
        
    },

    inputText() {
        $("#game-name").text($("#name_field").val());
    },



        /*=== Timer of the game ===  */
    timer: null,
  startTimer() {
    this.timer = setInterval(this.reduceTime.bind(tamagotchi), 1000);
  },

  reduceTime() {
    if(this.hunger <= 0 || this.sleepy <= 0 || this.bored <= 0 ) {
        clearInterval(this.timer);
        clearInterval(this.pointB);
        clearInterval(this.pointH);
        clearInterval(this.pointS);
        this.gameOver();

    }
    this.time--;
    $("#timer").text(this.time);
    if (this.time <= 0) {
        this.round++;
        this.setUpRound();
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
    
    if (this.round >= 4) { 
        clearInterval(tamagotchi.timer);
        this.gameOver();
        // render option of game over  message: Your slime started to hibernate 
    } else {
        this.time = Math.floor(30 / this.round);
    }
  },



};

/* This event listener start the game */

tamagotchi.button.click(tamagotchi.start.bind(tamagotchi));
tamagotchi.tryAgain.click(tamagotchi.start.bind(tamagotchi));


// This events listener calls on the click methods inside the tamagotchi object.

$("#hunger").on("click", tamagotchi.clickedH.bind(tamagotchi));
$("#sleepy").on("click", tamagotchi.clickedS.bind(tamagotchi));
$("#bored").on("click", tamagotchi.clickedB.bind(tamagotchi));


