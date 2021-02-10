const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score =0;

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  //snake
  snake1= new snake(30,30,30,30);
  //1st row
  food1 = new food(70,100,15);
  food2 = new food(170,100,15);
  food3 = new food(270,100,15);
  food4 = new food(370,100,15);
  food5 = new food(470,100,15);
  food6 = new food(570,100,15);
  food7 = new food(670,100,15);
  food8 = new food(770,100,15);
  food9 = new food(870,100,15);
  food10 = new food(970,100,15);

  //2nd row
  food11 = new food(70,250,15);
  food12 = new food(170,250,15);
  food13 = new food(270,250,15);
  food14 = new food(370,250,15);
  food15 = new food(470,250,15);
  food16 = new food(570,250,15);
  food17 = new food(670,250,15);
  food18 = new food(770,250,15);
  food19 = new food(870,250,15);
  food20 = new food(970,250,15);

  //3rd row
  food21 = new food(70,400,15);
  food22 = new food(170,400,15);
  food23 = new food(270,400,15);
  food24 = new food(370,400,15);
  food25 = new food(470,400,15);
  food26 = new food(570,400,15);
  food27 = new food(670,400,15);
  food28 = new food(770,400,15);
  food29 = new food(870,400,15);
  food30 = new food(970,400,15);

  //4th row
  food31 = new food(70,550,15);
  food32 = new food(170,550,15);
  food33 = new food(270,550,15);
  food34 = new food(370,550,15);
  food35 = new food(470,550,15);
  food36 = new food(570,550,15);
  food37 = new food(670,550,15);
  food38 = new food(770,550,15);
  food39 = new food(870,550,15);
  food40 = new food(970,550,15);

  


  Engine.run(engine);
  
}

function draw() {
  background(0);  
  text("Score: "+score, 500,50);
  score = score+5;

  snake1.display();
  food1.display();
  food2.display();
  food3.display();
  food4.display();
  food5.display();
  food6.display();
  food7.display();
  food8.display();
  food9.display();
  food10.display();
  food11.display();
  food12.display();
  food13.display();
  food14.display();
  food15.display();
  food16.display();
  food17.display();
  food18.display();
  food19.display();
  food20.display();
  food21.display();
  food22.display();
  food23.display();
  food24.display();
  food25.display();
  food26.display();
  food27.display();
  food28.display();
  food29.display();
  food30.display();
  food31.display();
  food32.display();
  food33.display();
  food34.display();
  food35.display();
  food36.display();
  food37.display();
  food38.display();
  food39.display();
  food40.display();


  
  keyPressed();
}
function keyPressed(){
  if (keyCode === DOWN_ARROW) {
   Matter.Body.setPosition(snake1.body,{x:snake1.body.position.x,y:snake1.body.position.y+10});
  }
  if(keyCode === RIGHT_ARROW){
    Matter.Body.setPosition(snake1.body,{x:snake1.body.position.x+10,y:snake1.body.position.y});
 }
 
  if(keyCode === LEFT_ARROW){
    Matter.Body.setPosition(snake1.body,{x:snake1.body.position.x-10,y:snake1.body.position.y});
 }
  if (keyCode === UP_ARROW) {
    Matter.Body.setPosition(snake1.body,{x:snake1.body.position.x,y:snake1.body.position.y-10});
 }
}
