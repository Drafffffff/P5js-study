// let angle = 0;
// let ma ;
// let maxD;
// function setup() {
//     createCanvas(windowWidth, windowHeight, WEBGL);
//     ma = -atan(1/sqrt(3));
//     maxD = dist (0,0,width/2,height/2);

// }


// function draw() {
//     let recWidth = width/12;

//     background(120);
//     ortho(-1600,1600,-1600,1600,-1600,1600);
//     // translate(width / 2, height / 2);
//     rectMode(CENTER);
//     // directionalLight(240, 135, 200,0,-1, 0);

//     let offset = 0;
//     let Yoffset = 0;
//     rotateX(PI/6);
//     // rotateY(PI / 3);
//     rotateZ(PI/4);
//     for (let y = 0; y < width; y += recWidth + 5) {
//         offset = Yoffset;
//         for (let x = 0; x < width; x += recWidth + 5) {
//             push();
//             let d = dist(x,y,width/2,height/2);
//             let offset = map(d,0,maxD,-PI,PI);
//             let a = angle + offset;
//             // noStroke();
//             // fill(255);
//             // ambientMaterial(255);
//             normalMaterial();
//             translate(x - width / 2, y - width / 2,0);
//             let h = floor(map(sin(a), -1, 1, 400, 1600));
//             box(recWidth, recWidth, h);
//             // rect(x - width /2 + recWidth/2, 0,recWidth, h);
//             // offset += TWO_PI / (width / recWidth);
//             pop();
//         }
//         Yoffset -= TWO_PI / (width / recWidth);
//     }
//     angle += 0.08;
// }
// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Video: https://youtu.be/H81Tdrmz2LA

// Original GIF: https://beesandbombs.tumblr.com/post/149654056864/cube-wave

let angle = 0;
let w = 26.6;
let ma;
let maxD;

function setup() {
  createCanvas(windowWidth, 400, WEBGL);
  ma = atan(cos(QUARTER_PI));
  maxD = dist(0, 0, width/2, width/2);
}

function draw() {
  background(100);
  ortho(-400, 400, 400, -400, 0, 1000);
  rotateX(ma);
  rotateY(-QUARTER_PI);

  for (let z = 0; z < width; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, width / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = floor(map(sin(a), -1, 1, 150, width));
      translate(x - width / 2, 0, z - width / 2);
      normalMaterial();
      box(w, h, w);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);
      pop();
    }
  }
  angle += 0.054;
}