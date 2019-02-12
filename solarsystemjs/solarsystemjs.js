var solar;
var SIZE = 1;
var scl = 20;
var solarRadius = 200;

function setup() {
    createCanvas(600, 600);
    solar = new Planet("#d4370b",solarRadius, 0, 0);
    Mercury = new Planet("#e3ae6b",0.77 * SIZE, 0.387 * scl + solarRadius, 0.76);
    Venus = new Planet("#d2b58d",1.898 * SIZE, 0.723 * scl + solarRadius, 0.123);
    earth = new Planet("#2d5cdb",2 * SIZE, scl + solarRadius, 0.314);
    Mars = new Planet("#",1.065 * SIZE, 1.524 * scl + solarRadius, 0.0402);
    Jupiter = new Planet("#",22.417, 5.205 * scl + solarRadius, 0.00641);
    Saturn = new Planet("#",18.898, 9.576 * scl + solarRadius, 0.00257);
    Uranus = new Planet("#",8.014, 19.18 * scl + solarRadius, 0.0009);
    Neptune = new Planet("#",7.7653, 30.13 * scl + solarRadius, 0.00046);
}

function draw() {
    background(0);
    translate(-40, -40);
    showPlanet();
}

function showPlanet() {
    solar.show();
    Mercury.show();
    Venus.show();
    earth.show();
    Mars.show();
    Jupiter.show();
    Saturn.show();
    Uranus.show();
    Neptune.show();
}