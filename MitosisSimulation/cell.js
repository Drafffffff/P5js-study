function Cell(pos, r, c) {

    if (pos) {
        this.pos = pos.copy();
    } else {
        this.pos = createVector(random(width), random(height))
    }
    this.r = r || 30;
    this.biggest = 40;
    this.c = c || color(105, 239, 254, 100);
    this.clicked = function (x, y) {
        var d = dist(this.pos.x, this.pos.y, x, y);
        if (d < this.r) {
            return true;
        } else {
            return false;
        }
    }
    this.move = function () {
        var vel = p5.Vector.random2D();
        this.pos.add(vel);
        this.pos.x = constrain(this.pos.x, 0 + this.r, width - this.r);
        this.pos.y = constrain(this.pos.y, 0 + this.r, height - this.r);

    }

    this.grow = function () {
        if(this.r<this.biggest){
            this.r += 0.05;
        }
    }

    this.mitosis = function () {
        // this.pos.x += random(-this.r, this.r)
        this.newpos = createVector(this.pos);
        var cell = new Cell(this.pos, this.r * 0.8, this.c);
        return cell;

    }

    this.show = function () {
        fill(this.c);
        noStroke();
        // rect(this.pos.x,this.pos.y,10,10);s
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
}