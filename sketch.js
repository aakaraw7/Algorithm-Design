var fixedRect,movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(300, 200, 100, 50);
  movingRect=createSprite(400,200,100,50);

 // fixedRect.debug=true;
 // movingRect.debug=true;

  fixedRect.shapeColor='green';
  movingRect.shapeColor='green';
  
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
  && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
  fixedRect.shapeColor='red';
  movingRect.shapeColor='red';
}
else{
  fixedRect.shapeColor='green';
  movingRect.shapeColor='green';
}

  drawSprites();
}
