var n = 0;
var c = 3.2;
var Angle = 137.5;

function setup() {
  createCanvas(300, 300);
  angleMode(DEGREES);
  background(0);

}

function draw() {

  var a = n * Angle;
  var r = c * sqrt(n);
  var x = r * cos(a) + width / 2;
  var y = r * sin(a) + height / 2;
  fill(255);
  noStroke();
  ellipse(x, y, 4);
  n++;

}

function getInputValue() {
  var inputValue = document.getElementById("degree").value;
  if (inputValue) {
    return inputValue;
  }
}



function restart() {

  background(0);
  n = 0;
  if( getInputValue()){
    Angle = getInputValue()
  }

}