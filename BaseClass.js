class BaseClass{
    constructor(x, y, width, height) {
        
        this.body = Bodies.rectangle(x, y, width, heigh);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
       // imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}