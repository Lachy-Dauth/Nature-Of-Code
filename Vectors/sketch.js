let walker;

function setup() {
  createCanvas(500, 500);
  walker = new Walker(width/2, height/2);
}

function draw() {
  walker.show();
  walker.update();
}
