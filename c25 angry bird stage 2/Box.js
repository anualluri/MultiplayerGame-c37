class Box extends Base {
  constructor(x, y, width, height) {
    super(x, y, width, height);//calling constructor of base/parent class
    this.image=loadImage("sprites/wood1.png")
  }
};
