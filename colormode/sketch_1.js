



function setup() {
    noStroke()
    colorMode(HSB, 100)
}

function draw() {
    createCanvas(100, 100)
    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            stroke(i, j, 100)
            point(i,j)
        }
    }

}


