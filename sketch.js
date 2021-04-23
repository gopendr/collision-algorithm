var p2, movingRect;
var object1,object2,object3,object4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(100,50,20,20);
  object1.shapeColor="yellow";
  object2=createSprite(200,50,20,30);
  object2.shapeColor="pink";
  object3=createSprite(300,50,20,30);
  object3.shapeColor="black";
  object4=createSprite(400,50,20,30);
  object4.shapeColor="purple";






}

function draw() {
  background("white");  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if (isTouching(movingRect,object1)){
  movingRect.shapeColor = "red";
  object1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  object1.shapeColor = "yellow";
}
  

  drawSprites();
  
}
function isTouching(p1,p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
 return true;
}
else {
 return false;
}






}