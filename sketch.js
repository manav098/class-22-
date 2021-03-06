const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;


function setup(){
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ground_options={
    isStatic:true
  }
  ground=Bodies.circle(200,390,200,ground_options);
  World.add(world,ground)

  var ball_options={
    restitution:1.5
  }
  ball=Bodies.circle(200,50,20,ball_options);
  World.add(world,ball)

}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball.position.x,ball.position.y,20,20);

  
}
