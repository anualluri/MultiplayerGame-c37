var rect1, rect2;



function setup() {
  createCanvas(800,400);
  rect1= createSprite(400, 200, 73, 102);
  rect2= createSprite(400, 200, 50, 105);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  rect2.x=mouseX
  rect2.y=mouseY

  console.log(rect2.x - rect1.x);

  collision()
}



function collision(){
  if (rect2.x - rect1.x < rect1.width/2 + rect2.width/2 &&
    rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && rect2.y - rect1.y < rect1.height/2 + rect2.height/2 &&
    rect1.y - rect2.y < rect1.height/2 + rect2.height/2){
      rect1.shapeColor=("red");
      rect2.shapeColor=("red");
      }else{
      rect1.shapeColor=("green");
      rect2.shapeColor=("green");
      }
}