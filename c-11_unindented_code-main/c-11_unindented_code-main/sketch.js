var tsest;
var epiccloud,epiccloudImage
var obstacle1;
var obstacle2;
var obstacle3;
var obstacle4;
var obstacle5;
var obstacle6;
var epicobstacle;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    epiccloudImage=loadImage("cloud.png")
    obstacle1=loadImage("obstacle1.png")
    obstacle2=loadImage("obstacle2.png")
    obstacle3=loadImage("obstacle3.png")
    obstacle4=loadImage("obstacle4.png")
    obstacle5=loadImage("obstacle5.png")
    obstacle6=loadImage("obstacle6.png")
}
function setup() {
    createCanvas(600, 200);
    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;
    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    invisibleGround=createSprite(200,195,400,20)
    invisibleGround.visible=false
}
function draw() {
    background("black")
    //jump when the space button is pressed
    if (keyDown("space")&&trex.y>=100) {
    trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8 
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }
    trex.collide(invisibleGround);
    spawnClouds();
    spawnObstacles();
    drawSprites();
}

function spawnClouds(){
    if(frameCount%40===0){
        epiccloud=createSprite(600,30,50,10)
        epiccloud.velocityX=-4;
        epiccloud.addImage(epiccloudImage)
        epiccloud.scale=0.2
        epiccloud.y=Math.round(random(20,70))
        epiccloud.depth=trex.depth
        trex.depth=trex.depth+1;
epiccloud.lifetime=125



    }

}
function spawnObstacles(){

    if(frameCount%60===0){
        epicobstacle = createSprite(600,165,10,40)
        epicobstacle.velocityX=-4;
        var num=Math.round(random(1,6))
        switch(num){
           
            case 1:epicobstacle.addImage(obstacle1)
            break;
            case 2: epicobstacle.addImage(obstacle2)
            break;
            case 3: epicobstacle.addImage(obstacle3)
            break;
            case 4: epicobstacle.addImage(obstacle4)
            break;
            case 5: epicobstacle.addImage(obstacle5)
            break;
            case 6: epicobstacle.addImage(obstacle6)
            deafault:break;
        
        }
        epicobstacle.scale=0.1
    }


}















































