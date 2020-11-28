var fixedRect, movingRect;

function setup() {
  createCanvas(2000,2000);
  fixedRect = createSprite(400, 250, 250, 250);
  movingRect = createSprite(400,200,100,100);
  fixedRect.shapeColor = "darkred";
  movingRect.shapeColor = "darkred";
}


function draw() {
  background('white');

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
    {
    movingRect.shapeColor = "darkgreen";
    fixedRect.shapeColor = "lightgreen";
  }
  else{
    movingRect.shapeColor = "darkred";
    fixedRect.shapeColor = "darkred";
  }

  //fixedRect.debug = true ;
  //movingRect.debug = true ;

  drawSprites();
}