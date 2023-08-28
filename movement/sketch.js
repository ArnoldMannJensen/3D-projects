let x=1;
let y=1;
function setup() {
  createCanvas(400, 400,WEBGL)
  ;
}

function draw() {
  background(220);
  camera(x,y,(height/2)/(tan(PI/6)),x,y,0,0,1,0);
  box(50);
  if(keyIsDown(68))
  {
    x=x+10;
  }
  if(keyIsDown(65))
  {
    x=x-10;
  }
  if(keyIsDown(87))
  {
    y=y-10;
  }
  if(keyIsDown(83))
  {
    y=y+10;
  }
}
