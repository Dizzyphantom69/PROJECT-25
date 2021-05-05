
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;

function preload()
{
dustbinImage = loadImage("dustbingreen.png");
paperImage = loadImage("paper.png");
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxPosition=width/2+150
	boxY=625;
	ground = new Ground(500,680,1000,20);

	boxleftSprite=createSprite(boxPosition, boxY-100, 20,100);
	boxleftSprite.shapeColor=color(255,255,255);

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY-100, 20,250 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,255,255);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+35, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY-100, 20,250);
	boxleftSprite.shapeColor=color(255,255,255);

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY-100, 20,250 , {isStatic:true} );
	World.add(world, boxRightBody);

	paper = new Paper(100,650,10);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(200);
  
	ground.display();
	paper.display();
	imageMode(CENTER);
	image(dustbinImage,boxBottomBody.position.x,boxBottomBody.position.y-140,250,300);

  	
 
}

function keyPressed(){

	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-22})

	}


}

