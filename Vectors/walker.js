class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
  }

  update() {
    this.vel.add(random(-1, 1), random(-1, 1));
    this.vel.mult(0.9)
    this.pos.add(this.vel);
  }

  show() {
    background(51);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32)
  }
}