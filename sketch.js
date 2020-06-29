function setup() {
  createCanvas(800,400);
  
  var movingRect = createSprite(700,300,80,30);
  movingRect.shapeColor= "green";

  var movingRect2 = createSprite(100,200,50,30);
  movingRect2.shapeColor= "green";

  var movingRect3 = createSprite(700,200,50,30);
 movingRect3.shapeColor= "green";

 
  var movingRect4 = createSprite(400,100,50,30);
  movingRect4.shapeColor= "green";

  var movingRect5 = createSprite(400,300,50,30);
  movingRect5.shapeColor= "green";

  var fixedRect = createSprite(400,200,50,30);

}

function draw() {
  background(255,255,255);  

 movingRect.velocityX = World.mouseX
 movingRect.velocityY = World.mouseY 

 movingRect2.velocityX = 5
 movingRect3.velocityX = -5

 movingRect4.velocityY = 5
 movingRect5.velocityY = -5
  
if(movingRect.x - fixedRect.x < movingRect.width + fixedRect.width && 
  fixedRect.x - movingRect.x < fixedRect.width + movingRect.width &&
  movingRect.y - fixedRect.y < movingRect.height + fixedRect.height &&
  fixedRect.y - movingRect.y < fixedRect.height + movingRect.height){

  movingRect.shapeColor= "red";  
  fixedRect.shapeColor= "red";
  } else{

  movingRect.shapeColor= "green";  
  fixedRect.shapeColor= "green";

  }

  if(movingRect2.x - movingRect3.x < movingRect2.width + movingRect3.width && 
    movingRect3.x - movingRect2.x < movingRect3.width + movingRect2.width &&
    movingRect4.y - movingRect5.y < movingRect4.height + movingRect5.height &&
    movingRect5.y - movingRect4.y < movingRect5.height + movingRect4.height){
  
    
    movingRect2.velocityX= movingRect.velocityX * -1

    
    movingRect3.velocityX= movingRect.velocityX * -1

    
    movingRect4.velocityX= movingRect.velocityX * -1

    movingRect5.velocityX= movingRect.velocityX * -1;  
    
    }

  drawSprites();
}