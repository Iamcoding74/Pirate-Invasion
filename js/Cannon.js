class Cannon {
    constructor(x, y, width, height, angle){
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.angle=angle;
    }
    display(){
        fill("gray");
        push ();
translate(this.x,this.y);
rotate (this.angle);
rect(-10,-20,this.w,this.h);

        pop ();
        arc(this.x-30,this.y+90,140,200,PI,TWO_PI);
        
    }
}