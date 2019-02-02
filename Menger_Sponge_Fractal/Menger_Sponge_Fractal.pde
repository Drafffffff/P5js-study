float a = 0;
ArrayList<Box> sponge;
Box b;
void setup() {
  size(400, 400, P3D);
  sponge = new ArrayList<Box>();
  b = new Box(0, 0, 0, 200);
  sponge.add(b);
}

void mousePressed() {
  ArrayList<Box> next = new ArrayList<Box>();
  for (Box b : sponge) {
    ArrayList<Box> newBoxes = b.generate();
    next.addAll(newBoxes);
  }
  sponge = next;
}

void draw() {
  background(51);
  noStroke(); 
  lights();
  fill(255);
  translate(width/2, height/2);
  rotateX(a);
  rotateY(a*0.2);
  rotateZ(a*0.4);
  for (Box b : sponge) {
    b.show();
  }
  a += 0.01;
}
