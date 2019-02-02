var ship;
var flowers = [];
var drops = [];


function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (var i = 0; i < 6; i++) {
        flowers[i] = new Flower(i * 100 + 50, 50);
    }
}

function draw() {
    background(51);
    var right = false;

    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();
        if (flowers[i].x > width || flowers[i].x < 0) {
            right = true;
        }

    }

    if (right) {

        for (var i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
            if (flowers[i].y > height) {
                flowers[i].y = 0;
            }
        }

    }

    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
        for (var j = 0; j < flowers.length; j++) {
            if (drops[i].hits(flowers[j])) {
                flowers[j].grow();
                drops[i].evaporate();
            }
        }
        if (drops[i].y < 0) {
            drops[i].evaporate();
        }
        if (drops[i].toDelete) {
            drops.splice(i, 1);
        }
    }
    ship.show();
    ship.move();

}



function keyPressed() {
    // switch (keyCode) {
    //     case RIGHT_ARROW:
    //         ship.move(1);
    //     case LEFT_ARROW:
    //         ship.move(-1);
    //     case SPACE:
    //         var drop = new Drop(ship.x,ship.y);
    //         drops.push(drop);
    // }
    if (keyCode === 32) {
        var drop = new Drop(ship.x, ship.y);
        print(drops.length);
        drops.push(drop);
    }

    if (keyCode === 68) {            //d
        ship.setDir(1);

    } else if (keyCode === 65) {          //a
        ship.setDir(-1);
    }
}


function keyReleased() {
    if (key != ' ') {
        ship.setDir(0);
    }
}