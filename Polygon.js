class polygon{
    constructor(x, y, width, height){
        var options ={
  'restitution':0.8,
  'friction':1.0,
  'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png")
    }
    display(){
       var pos = this.body.position
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image ,pos.x , pos.y, this.width, this.height)
        pop();
      
    }
}