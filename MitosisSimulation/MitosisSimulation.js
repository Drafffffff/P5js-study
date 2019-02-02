var cells = [];

function setup() {
    createCanvas(300, 300);

    cells.push(new Cell());

}

function draw() {
    background(51);
    for (var i = 0; i < cells.length; i++) {
        cells[i].move();
        cells[i].show();
        cells[i].grow();
    }

}

function mousePressed() {
    for (var i = cells.length - 1; i >= 0; i--) {
        if (cells[i].clicked(mouseX, mouseY)) {
            cells.push(cells[i].mitosis());
            cells.push(cells[i].mitosis());
            cells.splice(i, 1);
            break;
        }
        }
    }