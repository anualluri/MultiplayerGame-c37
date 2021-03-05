class Ground{
    //set properties
    constructor(x, y, w, h){
        var options={
            isStatic:true,
        };
       
        this.body=Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    
    //define function
    display(){
        fill("green");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.body.width, this.body.height );
    }
    }
    
       