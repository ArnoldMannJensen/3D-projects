camX=0;
camY=0;
lookX=0;
lookY=0;
lookZ=0;
value=0;
boxX=0;
boxY=0;
z=0;
ZZize=20;
cooler=10;
function preload()
{
  SOE=loadImage('SchoolOfError.jpeg');
}
function setup() 
{
  createCanvas(400,400,WEBGL);
  camZ=(height/2)/(tan(PI/6));
}

function draw() 
{
  background(220);
  camera(camX,camY,camZ,lookX,lookY,lookZ,0,1,0);

  z=z+10;
  push();
  translate(boxX+value,boxY+value,z);
  fill(cooler);
  box(ZZize);
  pop();
if(boxX+value>boxX+ZZize/2)
{
 if(boxX-value>boxX+ZZize/2)
 {
  cooler=cooler+1;
 }
}
if(camZ-z<=ZZize/2)
{
z=-200;
boxX=camX;
boxY=camY;
value=random(-20,20);
}

  push();
  translate(0,0,-100);
  texture(SOE);
  plane(1000);
  pop();
  if(keyIsDown(RIGHT_ARROW))
  {
    camX=camX+10;
  }
  if(keyIsDown(LEFT_ARROW))
  {
    camX=camX-10;
  }
  if(keyIsDown(UP_ARROW))
  {
    camY=camY-10;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    camY=camY+10;
  }
  lookX=camX;
  lookY=camY;

}