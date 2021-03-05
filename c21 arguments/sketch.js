var rect1, rect2, rect3, rect4;


function setup() {
  createCanvas(800,400);
  rect1= createSprite(400, 200, 73, 102);
  rect2= createSprite(400, 200, 50, 105);
  rect3= createSprite(300, 100, 62, 119);
  rect4= createSprite(100, 45, 44, 100);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  rect2.x=mouseX
  rect2.y=mouseY

console.log(rect2.x - rect1.x);
orange(3,2);
orange(1243930490,12347859280);
orange("hello Anu &", " priyam")



if(isTouching(rect1, rect2)){
  rect1.shapeColor="red";
  rect2.shapeColor="red";
}else{
  rect1.shapeColor="green";
  rect2.shapeColor="green";
}

if(isTouching(rect2, rect3)){
  rect2.shapeColor="red";
  rect3.shapeColor="red";
}else{
  rect2.shapeColor="green";
  rect3.shapeColor="green";
}

if(isTouching(rect2, rect4)){
  rect2.shapeColor="red";
  rect4.shapeColor="red";
}else{
  rect2.shapeColor="green";
  rect4.shapeColor="green";
}

}





function isTouching(object1, object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2 &&
    object1.x -  object2.x < object1.width/2 + object2.width/2 && object2.y - object1.y < object1.height/2 + object2.height/2 &&
    object1.y - object2.y < object1.height/2 + object2.height/2 ){
      
    return true;
      }else{
     
    return false;

      }
    
    }

    function  orange(mum1,mum2){

      console.log(mum1+mum2);
    }
    