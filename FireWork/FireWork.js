var gravity;
var fireworks = [];
function setup() {
  createCanvas(300, 300);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  background(51, 70);
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].updata();
    fireworks[i].show();
    // if (fireworks[i].firework.pos.y > height){
    //   fireworks.splice(i,1);
    // }
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
