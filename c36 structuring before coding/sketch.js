var ball;
var db;
var BallPosition;
var form;
var player, playerCount;
var gameState;


function setup(){
    
    var ballPositionFromDatabase;
    createCanvas(500,500);
     db=firebase.database();
     gameState = new GameState
    gameState.getGameState();
    gameState.start();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(BallPosition!=undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
        drawSprites();
    }
    
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    writePosition(x, y);
}

function readPosition(data){
    BallPosition=data.val();
    //console.log(JSON.stringify(BallPosition));
    ball.x = BallPosition.x
    ball.y = BallPosition.y
}

function writePosition(x, y){
    db.ref("position").set({
        x : BallPosition.x+x,
        y : BallPosition.y+y
    });
}
