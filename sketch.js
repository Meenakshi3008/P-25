
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Render = Matter.Render;


var paper, ground,dustbin1, dustbin2, dustbin3, dustbinImg, dustbin;

function preload()
{
	dustbinImg = loadImage("dustbin.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
  world = engine.world;
  
  dustbin = createSprite(750, 550, 10, 10);
  dustbin.addImage(dustbinImg);
  dustbin.scale=0.74;
	
ground = new Ground(width/2,670,width,20)
dustbin1 = new Dustbin(830,550,20,200);
dustbin2 = new Dustbin(665,550,20,200);
dustbin3 = new Dustbin(750,660,195,20);
  paper = new Paper(100,450,40);
  
  //var render = Render.create({ element: document.body, engine: engine, options: { width: 1200, height: 700, wireframes: false } });


	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background("white");

 // ellipse(paper.x,paper.y,20,20);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW)
{
  Matter.Body.applyForce(paper.body,paper.body.position,{x:72,y:-72});
}
}



