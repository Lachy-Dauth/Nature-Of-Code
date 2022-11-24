// let x_off = 0;
let inc = 0.02;
let z_off = 0;
// let y_const = 100;

function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
}

function draw() {
  let y_off = 0;
  loadPixels();
  for (let y = 0; y < width; y++) {
    let x_off = 0;
    for (let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(x_off, y_off, z_off) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = 0;
      pixels[index + 2] = 0;
      pixels[index + 3] = 255;

      x_off += inc;
    }
    y_off += inc;
  }
  updatePixels();
  z_off += inc;
}
