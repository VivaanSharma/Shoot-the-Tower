
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,block32;
var polygon1;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

    ground1 = new ground(600, 650 , 20, 1200);
    ground2 = new ground(550, 495, 10, 300);
    ground3 = new ground(1000, 300, 10, 300);
    block1 = new block(500,480);
    block2 = new block(515,480);
    block3 = new block(530,480);
    block4 = new block(545,480);
    block5 = new block(560,480);
    block6 = new block(575,480);
    block7 = new block(590,480);
    block8 = new block(515,450);
    block9 = new block(530,450);
    block10 = new block(545,450);
    block11 = new block(560,450);
    block12 = new block(575,450);
    block13 = new block(530,420);
    block14 = new block(545,420);
    block15 = new block(560,420);
    block16 = new block(545,390);
    block17 = new block(1035,285);
    block18 = new block(945,285);
    block19 = new block(960,285);
    block20 = new block(975,285);
    block21 = new block(990,285);
    block22 = new block(1005,285);
    block23 = new block(1020,285);
    block24 = new block(960,255);
    block25 = new block(975,255);
    block26 = new block(990,255);
    block27 = new block(1005,255);
    block28 = new block(1020,255);
    block29 = new block(975,225);
    block30 = new block(990,225);
    block31 = new block(1005,225);
   block32 = new block(990,195);
 


    polygon1 = new polygon(100,150,30,30);
    rope1 = new rope(polygon1.body, {x:100,y:100});
    



    
   
   
	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  block1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  block31.display();
  block32.display();
  
polygon1.display();
rope1.display();
 

}
function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  //  }
}


