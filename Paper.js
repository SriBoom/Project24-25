class Paper{
    constructor(x, y, RADIUS) 
    {
  ​    var options = {
      isStatic: false,
  ​      'restitution':0.3,
  ​      'friction':0.5,
  ​      'density':1.2
  ​    }
      
      this.x = x;
      this.y = y;
  ​    this.RADIUS = RADIUS
  ​    this.body = Bodies.circle(this.x, this.y, this.RADIUS/2, options);
  ​    World.add(world, this.body);
     }
  
     display(){
      var Ballposition = this.body.position;
  ​    push();
  ​    translate(this.body.position.x, this.body.position.y);
      ellipseMode(RADIUS);
      ellipse(0,0, this.RADIUS, this.RADIUS);
  ​    pop();
     }
  }