function Flower(x, y) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.xdir = 0.2;
    this.ydir = 0;

    this.show = function () {
        fill('#fc83fc');
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.grow = function(){
        this.r += 2;
    }

    this.move = function(){
        this.x += this.xdir;
        this.y += this.ydir;
    }

    this.shiftDown = function(){
        this.xdir = -(this.xdir);
        this.y+= this.r;
    }


}