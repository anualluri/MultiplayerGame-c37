const WORLD = Matter.World
const BODY = Matter.Body
const ENGINE = Matter.Engine
var body, engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var ground;
var ball;
var rope;


function preload(){
 
}


function setup(){
createCanvas(1200, 900);
engine=ENGINE.create()
world= engine.world
ground= new Ground(0, 700, 2000, 20);

ball= new Ball(500, 200);

rope=new Rope(ball.body, {
   x : 500,
   y : 200
});

block1= new Blocks(700,100);
block2= new Blocks(700,100);
block3= new Blocks(700,100);
block4= new Blocks(700,100);
block5= new Blocks(700,100);
block6= new Blocks(700,100);
block7= new Blocks(700,100);
block8= new Blocks(700,100);
block9= new Blocks(700,100);
block10= new Blocks(700,100)

block11= new Blocks(800,100)
block12= new Blocks(800,100)
block13= new Blocks(800,100)
block14= new Blocks(800,100)
block15= new Blocks(800,100)
block16= new Blocks(800,100)
block17= new Blocks(800,100)
block18= new Blocks(800,100)
block19= new Blocks(800,100)
block20= new Blocks(800,100)


}

function draw(){

   background("white");
   ENGINE.update(engine);
   
    ground.display();

    ball.display();

    rope.display();

   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();

   block11.display();
   block12.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   



}

function mouseDragged(){
   Matter.Body.setPosition(ball.body, {
      x : mouseX,
      y: mouseY
   })

}
