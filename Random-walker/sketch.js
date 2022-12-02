let x;
let y;

function setup() {
  createCanvas(2000, 2000);
  x = 1000;
  y = 1000;
  background(51);
  console.log(9**10)
}

function draw() {
  stroke(255)
  strokeWeight(2)
  for (let i = 0; i < 1000; i++) {
    point(x, y);
    let randint = floor(random(4))
    switch(randint){
      case 0:
        x ++;
        break;
      case 1:
        x --;
        break;
      case 2:
        y ++;
        break;
      case 3:
        y --;
    }
  }
}
