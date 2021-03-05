var canvas, backgroundImage;

var gameState = 0
 

var database;

var form, player, game;

var playerInfo, playerCount;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount===4){
    console.log("it is getting called")
    game.update(1);
  }else{
    console.log("player count is less that 4")
  }

if(gameState===1){
game.play();
console.log("gameState===1")
}}