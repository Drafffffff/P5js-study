// let t = 0.001;
function setup() {
    createCanvas(400, 400);
    strokeWeight(width/180);
    }
    
    
    function draw() {
        background(240);
        harom(width/1.08,height/1.174,width/13.4,height/1.174,6,(sin(0.0005*millis()%(2*PI))+1)/2);
    }
    function harom(ax,  ay, bx,  by, level, ratio){
    if(level!=0){
        var  vx,vy,nx,ny,cx,cy;
        vx=bx-ax;
        vy=by-ay;
        nx=cos(PI/3)*vx-sin(PI/3)*vy; 
        ny=sin(PI/3)*vx+cos(PI/3)*vy; 
        cx=ax+nx;
        cy=ay+ny;
        line(ax,ay,bx,by);
        line(ax,ay,cx,cy);
        line(cx,cy,bx,by);
        harom(ax*ratio+cx*(1-ratio),ay*ratio+cy*(1-ratio),ax*(1-ratio)+bx*ratio,ay*(1-ratio)+by*ratio,level-1,ratio);
        }
    
    }