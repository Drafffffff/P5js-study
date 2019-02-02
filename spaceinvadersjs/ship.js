function Ship() {
    this.x = width / 2;
    this.xspeed = 2;
    this.y = height - 30;
    this.dir= 0;

    this.show = function () {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, 20, 20);
    }

    this.left = function () {
        this.x -= this.xspeed;
    }
    this.right = function () {
        this.x += this.xspeed;
    }
    this.move = function () {
        this.x += this.dir * this.xspeed;
    }
    this.setDir = function(a){
        this.dir = a;
    }
}