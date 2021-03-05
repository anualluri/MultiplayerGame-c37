const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //creating objects
     box1=new Box(200, 200, 50, 50); 
     box2=new Box(240, 250, 50, 50); 
     ground=new Ground(200, 380, 50, 50); 
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
   
   

    /*ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);*/
}