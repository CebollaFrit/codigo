var sonic, enemy;
var sonic_run, sonic_jump, sonic_ded;
var floor, invisible_floor,floor_IMG;
var enemy_image;
var gameState = play;



function preload(){
    sonic_run = loadAnimation("Sonic Run1.png","Sonic Run2.png","Sonic Run3.png","Sonic Run4.png","Sonic Run5.png","Sonic Run6.png","Sonic Run7.png","Sonic Run8.png");

    floor_IMG = loadImage("Flat groud.png")

}

function setup() {
    sonic = createSprite(200,200,200,200);
    sonic.Scale = 0.5
    sonic.addAnimation("run",sonic_run);

    invisible_floor = createSprite(180,320)
    invisible_floor.visibility = false

    floor = createSprite(180,320)
    floor.addAnimation("floor",floor_IMG)
 }

function draw() {

    sonic.velocityY = sonic.velocityY + 0.9

    if (gameState===play){

        sonic.collide(invisible_floor)
        
         
       

    }



    drawSprites();
 
}