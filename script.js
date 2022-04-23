/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
//global constants
const clueHoldTime = 1000; //how long to hold each clue's light and sound
const cluePauseTime = 333; //how long to puase in between clues
const nextClueWaitTime = 1000; //how long to wait before playing sequence

//Global Variables
var pattern = [2, 2, 4, 3, 2 ,1 ,2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;

function generatePattern(){
  for (let i = 0; i < pattern.length - 1; ++i){
    pattern[i] = Math.floor(Math.random() * 6) + 1;
  }
}

function startGame(){
  //initializes game variables
  progress = 0;
  gamePlaying = true;
  generatePattern();
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  mistakes = 0;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) //set a timeout to play that clue
    delay += clueHoldTime
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  //add game logic here
  if(btn == pattern[guessCounter]){
    //correct guess
    if (guessCounter < progress){
      guessCounter++;
    }
    else{
      if (progress == pattern.length - 1){
        //we win the game
        winGame();
      }
      else{
        //continue on with the next cycle
        progress++;
        playClueSequence();
      }
    }
  }
  else{
    //incorrect guess
    mistakes += 1;
    if (mistakes == 3){
      //loss
      loseGame();
    }
    else {
      guessCounter = 0;
      alert("incorrect button, try it again");
    }
  }
}
// Sound Synthesis Functions
const freqMap = {
  1: 223.6,
  2: 279.6,
  3: 312,
  4: 423.2, 
  5: 512.1,
  6: 615.3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)