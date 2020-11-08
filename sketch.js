
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var treeObj;
var mango1, mango2, mango3, mango4, mango5;
var ground;
var boy, boyImage;
var stone;
var slingShot;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

  boy = createSprite(175,430);
  boy.addImage(boyImage);
  boy.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

    treeObj = new Tree(600,275,500,500);
    mango1 = new Mango(600,100,40);
    mango2 = new Mango(700,125,40);
    mango3 = new Mango(500,170,40);
    mango4 = new Mango(600,200,40);
    mango5 = new Mango(750,200,40);
    ground = new Ground(400,500,800,10);
    // boy = new Boy(175,430,100,100);
    stone = new Stone(120,380);
    slingShot = new Rope(stone.body,{x: 120 , y: 380});
	
    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);

 treeObj.display();
 // boy.display();
 
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 stone.display();
 ground.display();
 
 slingShot.display();

 
 
 drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingShot.fly(); 
}

function detectCollision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position;
  stoneBodyPosition=Lstone.body.position;

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance<=Lmango.r+Lstone.r) {
    Matter.Body.setStaic(Lmango.body, false);
  }
}

// function keyPressed() {
//   if(keyCode === 32) {
//     Matter.Body.setPosition(stone.body, {x:235, y:420});
    
//   }
// }


