int cols,rows;
int scl = 20 ;
int w = 1600;
int h = 1500;

float flying;

float[][] terrain;

void setup() {

  size(600,600,P3D);
  cols = w/scl;
  rows = h/scl;
terrain = new float [cols][rows];

}

void draw() {
  
  flying += 0.01;
  float yoff = flying;
  for (int y = 0; y< rows; y++) {
    float xoff = 0;
    for (int x = 0; x<cols; x++) {
      terrain[x][y] = map(noise(xoff,yoff),0,1,-100,100);
      xoff+= 0.08;
    }
    yoff += 0.08;
  }
  
  background(0);
  stroke(210,18,145);
  noFill();
  translate(width/2,height/2+50);
  rotateX(PI/3);
  translate(-w/2,-h/2);
  for (int y = 0; y< rows-1; y++) {
    beginShape();
    //beginShape(TRIANGLE_STRIP);
    for (int x = 0; x<cols-1; x++) {
        
      
      //vertex(x*scl,y*scl,terrain[x][y]);
        //vertex(x*scl,(y+1)*scl,terrain[x][y+1]);
        
        vertex(x*scl,y*scl,terrain[x][y]);
        vertex((x+1)*scl,y*scl,terrain[x+1][y]);
        vertex((x+1)*scl,(y+1)*scl,terrain[x+1][y+1]);
        //vertex(x*scl,(y+1)*scl,terrain[x][y+1]);
        
        
          
          
  }
    endShape();
  }
}
