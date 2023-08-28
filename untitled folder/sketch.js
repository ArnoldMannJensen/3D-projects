camX=0;
camY=0;
lookX=0;
lookY=0;
lookZ=0;
value=0;
boxX=20;
boxY=0;
z=400;
ZZize=100;
cooler=10;
function preload()
{
  SOE=loadImage('SchoolOfError.jpeg');
}
function setup() 
{
  createCanvas(400,400,WEBGL);
  angleMode=(DEGREES);
  camZ=(400/2)/(tan(PI/6));
}

function draw() 
{
  background(220);
  camera(camX,camY,camZ,lookX,lookY,lookZ,0,1,0);

  z=z+10;
  push();
  translate(boxX,boxY,z-200);
  fill(cooler);
  box(ZZize);
  pop();

  if(boxY-ZZize/2<=camY && boxY+ZZize/2>=camY)
  {
    if(boxX-ZZize/2<=camX && boxX+ZZize/2>=camX)
    {
    cooler=100;
    }
  }
  if(camZ+ZZize/2<=z)
  {
  value=random(-20,20);
  z=-200;
  cooler=0;
  }

  push();
  noStroke();
  translate(0,0,-200);
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