var wall1, wall2, wall3, wall4, innerwall1, innerwall2, innerwall3, innerwall4, striker, coin
function setup() {
  wall1 = createSprite(200,5, 400, 10);
  wall2 = createSprite(200, 395, 400, 10);
  wall3 = createSprite(395, 200, 10, 400);
  wall4 = createSprite(5, 200, 10, 400);

  innerwall1 = createSprite(200, 45, 300, 3);
  innerwall2 = createSprite(200, 355, 300, 3);
  innerwall3 = createSprite(355, 200, 3, 285);
  innerwall4 = createSprite(45, 200, 3, 285);
  
  innerwall5 = createSprite(200, 25, 300, 3);
  innerwall6 = createSprite(200, 375, 300, 3);
  innerwall7 = createSprite(375, 200, 3, 285);
  innerwall8 = createSprite(25, 200, 3, 285);

  coin = createSprite(200, 200, 10, 10);
  coin2 = createSprite(220, 200, 10, 10);
  coin3 = createSprite(200, 180, 10, 10);
  coin4 = createSprite(180, 200, 10, 10);
  coin5 = createSprite(200, 220, 10, 10);
  striker = createSprite(200, 365, 20, 20);
  striker.shapeColor="skyblue";
  
}

function draw() {
  background("lavender");
  
  noStroke();
  circle(48,35,23);
  circle(348,35,23);
  circle(48,365,23);
  circle(348,365,23);
  circle(35,60,23);
  circle(35,340,23);
  circle(365,340,23);
  circle(365,60,23);
  
  
   if (keyDown("UP_ARROW")) {
      striker.velocityX = 0;
      striker.velocityY = -5;
    }
    if (keyDown("DOWN_ARROW")) {
      striker.velocityX = 0;
      striker.velocityY = 5;
    }
    if (keyDown("LEFT_ARROW")) {
      striker.velocityX = -5;
      striker.velocityY = 0;
    }
    if (keyDown("RIGHT_ARROW")) {
      striker.velocityX = 5;
      striker.velocityY = 0;
    }
    
    
    striker.bounceOff(wall1);
    striker.bounceOff(wall2);
    striker.bounceOff(wall3);
    striker.bounceOff(wall4);
    
    
    striker.bounce(coin);
    striker.bounce(coin2);
    striker.bounce(coin3);
    striker.bounce(coin4);
    striker.bounce(coin5);
  drawSprites();
}