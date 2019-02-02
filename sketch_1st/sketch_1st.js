var dots = [];
var isCreatable = false;
function setup() {
 var myCanvas = createCanvas(400, 400);
    myCanvas.parent("container");
}

function draw() {
  background(230);
  if (isCreatable) {
    dots.push(new Dot(mouseX, mouseY));
    print(dots.length);
  }
  for (var i = 0; i<dots.length; i++) {
    dots[i].show();
    dots[i].grow();
  }
}

function mousePressed() {
  isCreatable = true;
}


function mouseReleased() {
  isCreatable = false;
}
//new p5(sketch, window.document.getElementById('container'));
