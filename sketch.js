var ship, sailingShip;
var sea, seaImage;


function preload(){
  sailingShip = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  
  createCanvas(1000,600);
 
  sea = createSprite(500,100,10,10);
  sea.addImage("sea",seaImage);
  sea.x = sea.width/2;
  sea.velocityX = -4;

  ship = createSprite(300,250,20,20);
  ship.addAnimation("movingShip", sailingShip);
  ship.scale = 0.25;

}

function draw() {
  background("blue");

  if(sea.x < 0) {
   sea.x = sea.width/2
  }
  drawSprites();
}