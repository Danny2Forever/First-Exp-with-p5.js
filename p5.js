let x = 200;
let y = 270;

function setup() {
  createCanvas(400, 300);
}

function keyPressed() {
  if (keyIsDown(DOWN_ARROW)) {
    y += 1;
  }
  if (keyIsDown(UP_ARROW)) {
    y -= 1;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x -= 1;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 1;
  }
}

function draw() {
  keyPressed();
  background(0);
  noStroke();
  fill(255);
  ellipse(x, y, 50, 50);
}
