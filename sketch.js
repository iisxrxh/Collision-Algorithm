var movingrect, fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect =  createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "blue"
  fixedrect = createSprite(500, 200, 50, 50);
  fixedrect.shapeColor = "blue"
}

function draw() {
  background(255,255,255);  
  drawSprites();

  movingrect.y = mouseY;
  movingrect.x = mouseX;

  
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 && 
    movingrect.y - fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
      fixedrect.shapeColor = "red";
      movingrect.shapeColor = "red";
    }
    else{
      fixedrect.shapeColor = "blue";
      movingrect.shapeColor = "blue";
      
    }

  
}