var pc , fish1 , fish2 , fish3 , fish4;
var beachy;
var fishGroup;
var shark1;
var mine1,mine,mineGroup;
var score;


function preload(){

 
  shark = loadImage("jawr.png");
  
  //mine
  mine1 = loadImage("mine.png")

  //background
  beachy = loadImage("sea background.png");
  
  //fish
  fish1 = loadImage("1.png");
  fish2 = loadImage("2.png");
  fish3 = loadImage("3.png");
  fish4 = loadImage("4.png");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  //creating pc sprites
   pc = createSprite(displayWidth/2,displayHeight/2,50,50);
   pc.addImage(shark);
   pc.scale = 0.5;

   fishGroup = new Group();
   mineGroup = new Group();

   score=0;
}

function draw() {  
  background(beachy);
 

  pc.y=mouseY;
  pc.x=mouseX;

  spwanFish();
  spawnMines();
  
  if(fishGroup.isTouching(pc)){
          score++;
        fishGroup.destroyEach();
  }
   if(mineGroup.isTouching(pc)){
          score-=10;
          mineGroup.destroyEach();
  }
  drawSprites();
  text("score : "+score,displayWidth/4,displayHeight/3);
}

function spwanFish(){
if(frameCount % 120 === 0) {
fish = createSprite(displayWidth+5,Math.round(random(displayHeight/2+100,displayHeight)),10,40);
fish.velocityX=-2
fish.setCollider("rectangle",0,0,200,130);
fish.debug=true;
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: fish.addImage(fish1);
              break;
      case 2: fish.addImage(fish2);
              break;
      case 3: fish.addImage(fish3);
              break;
      case 4: fish.addImage(fish4);
              break;
      
      default: break;
    }   
    fishGroup.add(fish);
    fish.scale = 0.5;
    fish.lifetime=displayWidth/2;
} 
}

function spawnMines(){
 if(frameCount % 250 === 0) { 
  mine= createSprite(displayWidth+5,Math.round(random(displayHeight/2+100,displayHeight)),20,40)   
  mine.addImage(mine1);
  
  mine.scale=0.3;
  mine.velocityX=-4;
  mineGroup.add(mine);
  mine.lifetime=displayWidth/mine.velocityX;
 
}
}

