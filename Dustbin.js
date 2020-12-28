class Dustbin{
    constructor(x, y) 
    {
  ​    var options = {
      isStatic: false,
  ​      'restitution':0.3,
  ​      'friction':0.5,
  ​      'density':1.2
  ​    }
      
      this.x = x;
      this.y = y;
  ​    
  ​    this.body = Bodies.circle(this.x, this.y, options);
  ​    World.add(world, this.body);
     }
  
     display(){
      var ballposition = this.body.position;
  ​    push();
  ​    translate(ballposition.x, ballposition.y);
      ellipse(0,0, this.r);
  ​    pop();
     }
  }