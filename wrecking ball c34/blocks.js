class Blocks {
    constructor(x, y){
        
        var options = {
            isStatic : false,
            // restitution : 0.4
        }
        this.body= Matter.Bodies.rectangle(x, y, 70, 70, options);
        Matter.World.add(world, this.body)
    }

    display(){
        var pos = this.body.position; 
        var angle = this.body.angle; 
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        rectMode(CENTER); 
        strokeWeight(4); 
        stroke("green");
         fill(255); 
         rect(0, 0, this.width, this.height); 
         pop();
        //rect(this.body.position.x, this.body.position.y, 70, 70);
        
    }




























}