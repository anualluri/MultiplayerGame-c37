//1. declare three constants .
const WORLD=Matter.World;
const ENGINE=Matter.Engine;
const BODIES=Matter.Bodies;

//2. create 3 objects.
var worldObject, engineObject, bodiesObject, bodiesObjectCircle;

function setup() {
  createCanvas(800,400);
  
  //3. initialize the 2 (the engine object and the world) objects.
  engineObject=ENGINE.create();
  worldObject=engineObject.world;
  //4. initialize a variable to change options of the body object.
  var options={
    isStatic:true
  }
  var options_circle={
    isStatic:false,
    restitution:0.9
  }
  //5.initialize the bodies object in the shape of a rectangle with (options).
  bodiesObject=BODIES.rectangle(400, 350, 800, 30, options);
  bodiesObjectCircle=BODIES.circle(400, 100, 10, options_circle);
  //6. add the bodies object to the world
  WORLD.add(worldObject, bodiesObject);
  WORLD.add(worldObject, bodiesObjectCircle);
}


function draw() {
  background(255,255,255);  
  drawSprites();
  //7. update the physics engine commonly
  ENGINE.update(engineObject);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //8. display the bodies object(the rectangle).
  rect(bodiesObject.position.x, bodiesObject.position.y, 800,30 )
  ellipse(bodiesObjectCircle.position.x, bodiesObjectCircle.position.y, 50, 50 );
}