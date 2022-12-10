let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(width/2, height/2);
  background(51);
}

function draw() {
  stroke(255)
  strokeWeight(2)
  point(walker.pos);
  walker.update();
}
