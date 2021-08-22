var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  spawnapple();
  spawnleaves();
  drawSprites();
}

function spawnapple() {
  if(frameCount%80==0) {
   apple = createSprite(100,100,10,10);
   apple.addImage(appleImg);
   apple.scale=0.1;
   apple.velocityY= 2;
   apple.y=Math.round(random(50,50));
   rabbit.depth=apple.depth;
   rabbit.depth=apple.depth+1;
  }
}

function spawnleaves() {
  if(frameCount%80==0) {
   leaves = createSprite(300,200,10,10);
   leaves.addImage(leavesImg);
   leaves.scale=0.1;
   leaves.velocityY= 2;
   leaves.y=Math.round(random(50,50));
   rabbit.depth=leaves.depth;
   rabbit.depth=leaves.depth+1;
  }
}