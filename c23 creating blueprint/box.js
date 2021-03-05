class Box{
//set properties
constructor(x, y, w, h){
    var options={
        isStatic:false,
        restitution:0.9,
    };
   
    this.body=Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
}

//define function
display(){
    var angle=this.body.angle;
    var pos=this.body.position;
    push();
    rotate(angle);
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.body.width, this.body.height );
    pop();
}
}

   