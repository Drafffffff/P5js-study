var Stars = [];  

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 600; i++) {
    Stars.push(new Star());
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < Stars.length; i++) {
    Stars[i].show();
    Stars[i].updata();
  }
}

function Star() {
  this.x = random(width);
  this.y = random(-400,-0);
  this.z = random(0,100);
  this.yspeed = map(this.z,0,100,2,7);
  this.len = map(this.z,0,100,7,12);

  this.show = function () {
    strokeWeight(map(this.z,0,100,0,2))
    print(this.yspeed);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len);
  }

  this.updata = function () {
    this.y += this.yspeed;
    this.yspeed += 0.2;
    if(this.y>360){
      this.y = random(-400,0) ;
      this.yspeed = 2;
    }
  }
}
