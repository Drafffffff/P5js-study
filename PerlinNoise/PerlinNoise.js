// var cols, rows;
// var scl = 20;
// var w = 1600;
// var h = 1500;

// var flying = 0;

// var terrain = [];

// function setup() {
//     createCanvas(300, 300, WEBGL);
//     cols = w / scl;
//     rows = h / scl;


//     for (var x = 0; x < cols; x++) {
//         terrain[y] = [];
//         for (var y = 0; y < rows; y++) {
//             terrain[x][y] = 0;
//         }

//     }



// }

// function draw() {



//     flying += 0.01;
//     var yoff = flying;
//     for (var x = 0; x < cols; x++) {
//         var xoff = 0;
//         for (var y = 0; y < rows; y++) {
//             terrain[x][y] = map(noise(xoff,yoff,0,1,-150,150));
//             xoff += 0.08;
//         }
//         yoff += 0.08;
//     }

//     background(0);
//     stroke(210, 18, 145);
//     noFill();
//     translate(width / 2, height / 2 + 50);
//     rotateX(PI / 3);
//     translate(-w / 2, -h / 2);
//     for (var y = 0; y < rows - 1; y++) {
//         beginShape();
//         for (var x = 0; x < cols - 1; x++) {

//             vertex(x * scl, y * scl, terrain[y][x]);
//             vertex((x+1)*scl,y*scl,terrain[y+1][x]);
//             vertex((x+1)*scl,(y+1)*scl,terrain[y+1][x+1]);
//         }
//         endShape();
//     }



// }







var cols, rows;
var scl = 20;
var w = 300;
var h = 300;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(300, 300, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {

  flying += 0.01;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -150, 150);
      xoff += 0.08;
    }
    yoff += 0.08;
  }


  background(0);
  translate(0, 50);
  rotateX(PI/3);
  fill(255,255,255, 30);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
    }
    endShape();
  }
}


