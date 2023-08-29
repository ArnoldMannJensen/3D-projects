function setup() 
{
  x0=300;
  y0=300;
  x1=200;
  y1=200;
  x2=300;
  y2=250;
  s1=1;
  s2=1;
  createCanvas(600, 600);
}

function draw() 
{
  px=x0+s1*(x1-x0)+s2*(x2-x0);
  py=y0+s1*(y1-y0)+s2*(y2-y0);
  background(220);
  circle(x0,y0,20);
  circle(x1,y1,10);
  circle(x2,y2,10);
  circle(px,py,30);
  line(x0,y0,x1,y1);
  line(x0,y0,x2,y2);
  line(x0,y0,px,py);
  line(x1,y1,px,py);
  line(x2,y2,px,py);

}
