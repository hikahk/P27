
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5,ball6
var ground
var sling1,sling2,sling3,sling4,sling5,sling6

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,50,800,10)
ball1 = new Ball(200,350)
ball2 = new Ball(250,350)
ball3 = new Ball(300,350)
ball4 = new Ball(350,350)
ball5 = new Ball(400,350)
ball6 = new Ball(450,350)
sling1 = new SlingShot(ball1.body,{x:200, y:50});
sling2 = new SlingShot(ball2.body,{x:250, y:50});
sling3 = new SlingShot(ball3.body,{x:300, y:50});
sling4 = new SlingShot(ball4.body,{x:350, y:50});
sling5 = new SlingShot(ball5.body,{x:400, y:50});
sling6 = new SlingShot(ball6.body,{x:450, y:50});










	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();

  ground.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  drawSprites();
 





  
  
  //keyPressed();

}

function keyPressed(){

  if (keyCode === 32) {
  
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-50})
 }
}