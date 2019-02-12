function Planet(c, r, d, a) {
    this.color = c;
    this.r = r*200;
    this.a = a/10;
    this.d = d;
    this.angle =0.261;// random(PI);

    this.show = function () {
        push();
        noStroke();
        fill(this.color);
        rotate(this.angle);
        translate(d, 0);
        ellipse(0, 0, r*2, r*2);
        pop();
        this.move();
    }

    this.move = function () {
        this.angle += this.a;
    }

}