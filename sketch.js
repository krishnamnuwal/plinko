const Engine=Matter.Engine;
const World=Matter.World
const Body=Matter.Body;
const Bodies=Matter.Bodies;
var ground,border;
var divisions=[];
var plinkos=[];
var particles=[];
var divisionheight=700;


function setup(){
    createCanvas(1200,1400);
    engine=Engine.create();
    world=engine.world;
    ground=new Ground(580,1300,1000,30);
    ground2=new Ground(580,100,1000,30);
    ground3=new Ground(80,700,30,1400)
    ground4=new Ground(1085,700,30,1400);
    border=new Border(600,1350,1200,100);
    border2=new Border(28,825,100,1650);
    border3=new Border(1145,825,120,1650);
    border4=new Border(600,50,1200,100)
    for(var i=170;i<=1000;i=i+100){
      divisions.push(new Divisions(i,height-divisionheight/3,15,divisionheight/3));
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,210));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,270))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,330));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,390))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,450));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,510))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,570));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,630))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,690));
    }
    for(var k=180;k<=1000;k=k+70){
      plinkos.push(new Plinko(k,750))
    }
    for(var k=150;k<=1050;k=k+70){
      plinkos.push(new Plinko(k,810));
    }
    

  /*  ground1=new Ground(105,565,10,900)
    ground2=new Ground(893,565,10,900)
    ground4=new Ground(500,125,800,10)
    
    border=new Ground(10,500,110,1200);*/
    


}
function draw(){
    background(260)
    Engine.update(engine);
    ground.display();
    ground2.display();
    ground3.display();
    ground4.display();
    border.display();
    border2.display();
    border3.display();
    border4.display();
    textSize(55)
    fill("black")
    textFont("Arial Black")
    text("'PLINKO'",500,60);
   
    for(var i=0;i<divisions.length;i++){
      divisions[i].display();
    }
    for(var k=0;k<plinkos.length;k++){
      plinkos[k].display();
    }
    if(frameCount% 55===0){
      particles.push(new Particle(random(width/2+50,width/2-50),200))

    }
    for(j=0;j<particles.length;j++){
      particles[j].display();
    }
  /*  for(k=0;k<plinkos.length;k++){
      plinkos[k].display();
    }   */
    
 /*   ground1.display();
    ground2.display();
    ground4.display();
    border.display();*/
}