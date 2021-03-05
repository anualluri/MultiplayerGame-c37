class Bird extends Base{
    constructor(x, y) {
      super(x, y, 50, 50);//calling parents constructor
      this.image=loadImage("sprites/bird.png");
    
    };
    display(){
      this.body.position.x=mouseX;
      this.body.position.y=mouseY;
      super.display();//calling parents display function
    }
   
  };
  