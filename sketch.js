var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score;
var survivalTime;

function preload() { 

  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;

  foodGroup = new Group();
  obstacleGroup = new Group();
   
  score = 0;
  survivalTime = 0;
}


function draw() {
  background("#222222");


  
  spawnBanana();
  spawnObstacle();
  
stroke("white");
textSize(15);
fill("white");
text("Score:"+score,335,30);
  
stroke("white");
textSize(15);
fill("white");
//survivalTime=Math.ceil(frameCount/frameRate())
survivalTime = survivalTime + Math.round(frameCount/300);
text("Survivaltime:"+ survivalTime,200,30);
  
  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;
  }


  monkey.velocityY = monkey.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  monkey.collide(ground);

  drawSprites();
}

function spawnBanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(370, Math.round(random(120, 200)), 40, 40);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    banana.lifetime = 215;
    foodGroup.add(banana);
  }
}

function spawnObstacle() {
 if (frameCount % 300 === 0) {
   obstacle = createSprite(370,327,10,40);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -4;
   obstacle.scale = 0.1;
   obstacle.lifetime = 215;
   obstacleGroup.add(obstacle);
   
 }

}