class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }

  update() {
    this.acc.add(random(-0.1, 0.1), random(-0.1, 0.1));
    this.acc.mult(0.9)
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  show() {
    background(51);
    strokeWeight(2);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, 32)
  }
}