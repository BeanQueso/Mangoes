
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, tree, stone;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(500, 400, 300, 300);
	stone = new Stone(100, 600, 40);
	ground = new Ground(800, 690, 1600, 20);
	boy = new Boy(stone.body, {x:40, y:600});
	mango1  = new Mangoes(700,450,20);

	mango2  = new Mangoes(600,460,20);
	mango3  = new Mangoes(640,450,20);
	mango4  = new Mangoes(640,530,20);
	mango5  = new Mangoes(750,530,20);
	
	




	Engine.run(engine);
  
}


function draw() {
	
  background(0);
  tree.display();
  stone.display();
  ground.display();
  boy.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

text(mouseX+":"+mouseY, 20,100);

detectcollision(stone,mango1);
detectcollision(stone,mango2);
detectcollision(stone,mango3);
detectcollision(stone,mango4);
detectcollision(stone,mango5);

 
}
function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}
function keyPressed(){
	if(keyCode === 32){
		boy.attach(stone.body);
	}
}

function mouseReleased(){
    boy.fly();
    
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}




