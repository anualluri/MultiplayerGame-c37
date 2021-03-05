class Ball{
    constructor(x, y){
        this.r= 70;
        var options ={
            isStatic : false,
            restitution : 0.4,
            frictionAir : 0.0001
        }
        this.body= Matter.Bodies.circle(x, y, this.r, options);
        Matter.World.add(world, this.body);
        
    }
    display(){
        ellipse(this.body.position.x, this.body.position.y, this.r, this.r);
    }
}