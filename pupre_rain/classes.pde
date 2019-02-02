class Drop{

  float x = random(width);
  float y = random(-400,-100);
  float z = random(0,100);
  float yspeed = map(z,0,100,2,7);
  float len = map(z,0,100,10,20);

  
  void fall(){
    y += yspeed;
    yspeed += 0.05;
    if(y > height){
    y = random(-400,-100);
    yspeed = map(z,0,100,2,7);
  }
  }
  
  void show(){
    float thick = map(z,0,100,1,2);
    strokeWeight(thick);
    stroke(138,43,226);
    line(x,y,x,y+len);
  
  }


}
