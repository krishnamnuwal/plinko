class Ground{
    constructor(x,y,width,height){
        var option={
            isStatic:true,
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        this.color="red"
        World.add(world,this.body);
    }
    display(){
        fill(this.color);
        var pos=this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}