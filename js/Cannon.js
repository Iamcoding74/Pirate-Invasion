class Cannon {
    constructor(x, y, width, height, angle){
        this.x=x;
        this.y=y;
        this.w=width;
        this.h=height;
        this.angle=angle;
    }
    display(){
        if(keyIsDown(RIGHT_ARROW) &&this.angle<0.35){
            this.angle=this.angle+0.02;
           }
           if(keyIsDown(LEFT_ARROW) &&this.angle>-1.45){
               this.angle=this.angle-0.02;
           }
        fill("gray");
        push ();
translate(this.x,this.y);
rotate (this.angle);
rect(-10,-20,this.w,this.h);

        pop ();
        arc(this.x-30,this.y+90,140,200,PI,TWO_PI);

    }
}