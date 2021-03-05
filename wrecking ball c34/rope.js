class Rope{
    constructor(bodyA, pin){
        var options={
            isStatic : true,
            bodyA: bodyA,
            pointB: pin,
            length: 250,
            stiffness: 1.4
        }
        this.rope= Matter.Constraint.create(options)
        this.bodyA=bodyA
        this.pointB = pin

        Matter.World.add(world, this.rope);
    }

    display(){
        line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y)
    }
}