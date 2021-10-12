var bath;
var brush,brushs;
var drink;
var food;
var gymm,gymm2;
var iss,iss2;
var sleep;


function preload(){
  bath=loadAnimation("images/bath1.png","images/bath2.png");
  brush=loadImage("images/brush.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  food=loadAnimation("images/eat1.png","images/eat2.png");
  gymm=loadAnimation("images/gym1.png","images/gym2.png")
  gymm2=loadAnimation("images/gym11.png","images/gym12.png")
  iss=loadImage("images/iss.png");
  sleep=loadImage("images/sleep.png");
  
  
  
}

function setup() {
  createCanvas(400, 337);
  
  
  astronaut = createSprite(200,200);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.07
  
}

function draw() {
  background(iss);
  drawSprites();
  textSize(14)
  fill("magenta")
  text("Brushing: Up Arrow",15,15);
  text("Drinking: Left Arrow",15,35);
  text("Gym Exercise 1: Down Arrow",15,55);
  text("Eating: Right Arrow",15,75);
  text("Gym Exercise 2: g key",15,95);
  text("Bath: b key",15,115);


  
  
  if (keyDown("UP_ARROW")){
      astronaut.addAnimation("brushing",brush);
      astronaut.changeAnimation("brushing");
      astronaut.y=230
      astronaut.x=180
      
     
      }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("drink",drink);
    astronaut.changeAnimation("drink");
    astronaut.y=230;
    
     
     }
  
    if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("food",food);
    astronaut.changeAnimation("food");
    astronaut.y=230;
      
      
    
     
     }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym",gymm);
    astronaut.changeAnimation("gym");
    astronaut.y=230;
    
     
     }

     if(keyDown("g")){
      astronaut.addAnimation("gymm",gymm2);
      astronaut.changeAnimation("gymm");
      astronaut.y=230;
      
       
       }
       if(keyDown("b")){
        astronaut.addAnimation("bat",bath);
        astronaut.changeAnimation("bat");
        astronaut.y=230;
        
         
         }

       
}