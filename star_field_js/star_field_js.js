
var World = [];
var tSpeed;
function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < 400; i++) {
    World.push(new star());
  }

}

function draw() {
  tSpeed = map(mouseX, 0, width, 0, 20);
  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < World.length; i++) {

    World[i].Execute();

  }
}

function star() {
  this.x = random(-width / 2, width / 2);
  this.y = random(-height / 2, height / 2);
  this.z = random(width);

  this.Show = function () {

    fill(255);
    noStroke();

    this.rx = map(this.x / this.z, 0, 1, 0, width);
    this.ry = map(this.y / this.z, 0, 1, 0, width);
    this.size = map(this.z, 0, width, 12, 0);

    ellipse(this.rx, this.ry, this.size);

  }

  this.Create = function () {
    this.z -= tSpeed;

    if (this.z < 1) {
      this.z = width;
    }
  }

  this.Execute = function () {

    this.Create();
    this.Show();

  }


}