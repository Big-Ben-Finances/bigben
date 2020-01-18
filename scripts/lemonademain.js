var x = 169;
var y = 169;
function setup() {
  createCanvas(400, 400);
}
function draw(){
  background(100,255,100);
  if(keyIsDown(UP_ARROW)){
    y -= 5;
  }
  if(keyIsDown(LEFT_ARROW)){
      if(x >= 0){
        x -= 5;
      }
  }
  if(keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
      if(x <= 345){
        x += 5;
      }
  }
  if(keyIsDown(DOWN_ARROW)){
      y += 5;
  }
  fill(255,190,70);
  noStroke();
  rect(160,0,70,400);
  rect(0,160,400,70);
  fill(255,100,100);
  noStroke(false);
  rect(x,y,50,50,10,10);
}
