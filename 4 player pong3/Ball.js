class Ball{
    constructor(x,y,color){
        this.x = x
        this.y = y
        this.shapeColor = color;
    }

    display(){

        push();
        fill(this.shapeColor);
        circle(this.x,this.y,10);
        pop();
    }

}