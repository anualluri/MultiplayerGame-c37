class Ground {
    constructor(x, y, w, h){
        
        var options={
            isStatic : true
        }
        this.body= Matter.Bodies.rectangle(x, y, w, h, options);
        Matter.World.add(world, this.body);
        this.w = w
        this.h = h
    }
    display(){
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
    }
}