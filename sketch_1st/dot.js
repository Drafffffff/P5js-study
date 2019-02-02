function Dot(px, py) {
  this.x = px;
  this.y = py;
  this.r = 7;
  this.l = 0;
  this.growSpeed = 2;
  this.colR = random(255); 
  this.colG = random(255);
  this.colB = random(255);


  this.show = function() {
    noStroke();
    fill(this.colR, this.colG, this.colB);
    ellipse(this.x, this.y, this.r*2, this.r*2);
    rect(this.x-this.r, this.y, this.r*2, this.l);
    ellipse(this.x, this.y+this.l, this.r*2, this.r*2);
  }

  this.grow = function() {

    if (this.l<height) {
      this.l+=this.growSpeed;
    }
  }
}
