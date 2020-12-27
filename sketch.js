
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, side1, side2, side3;
var Paper,paperObject, paper;

function preload(){

paper = loadImgae("")

}

function setup() {
	createCanvas("Black");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  paperObject = new Paper(50, 200, 70);
	  ground = new Ground(600,height,1200,20);

    side1 = createSprite(350, 650, 209, 20);
    side1.shapeColor = color("Red");

    side2 = createSprite(250, 610, 20, 100);
    side2.shapeColor = color("Red");

    side3 = createSprite(450, 610, 20, 100);
    side3.shapeColor = color("Red");


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);

paperObject.collide(ground);
packageSprite.collide(side1);

paperObject.display();
ground.display();
  
}

function keyPressed(){
     if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:85});
	 }
}

