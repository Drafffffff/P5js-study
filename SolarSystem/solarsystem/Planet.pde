class Planet {
  float radius;
  float angle;
  float distance;
  float orbitSpeed;
  Planet[] planets;

  Planet(float r, float d) {
    radius = r;
    angle = random(TWO_PI);
    distance = d;
    orbitSpeed =random (0,0.04);
  }

  void spawnMoons(int total) {
    planets = new Planet[total];
    for (int i = 0; i< planets.length; i++) {
      float r =radius*0.3;
      float d = random(75, 300);
      planets[i] = new Planet(r, d);
    }
  }
  void orbit(){
      angle += orbitSpeed;
  }

  void show() {
    pushMatrix();
    rotate(angle);
    translate(distance, 0);
    noStroke();
    fill(255);
    ellipse(0, 0, radius*2, radius*2);
    if (planets != null) {
      for (int i = 0; i< planets.length; i++) {
        planets[i].show();
        planets[i].orbit();
      }
    }
    popMatrix();
  }
}
