let x=1;
let y=1;
let z=1;
function preload()
{
  peter=loadImage('Texture/peter.jpeg');
}
function setup() 
{
  createCanvas(400,400,WEBGL);
  angleMode(DEGREES);
}

function draw() 
{
  background(220);
  texture(peter);
  noStroke();
  
  push();
  stroke(1);
  translate(x,y,z);
  texture(0);
  sphere(20);
  pop();

  push();
  translate(0,0,-300);
  plane(400,400);
  pop();

  push();
  translate(200,0,-100);
  rotateY(90);
  plane(400,400);
  pop();

  push();
  translate(-200,0,-100);
  rotateY(90);
  plane(400,400);
  pop();

  push();
  translate(0,-200,-100);
  rotateX(90);
  plane(400,400);
  pop();

  push();
  translate(0,200,-100);
  rotateX(90);
  plane(400,400);
  pop();
}
