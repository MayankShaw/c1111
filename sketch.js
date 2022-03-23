var bgImg,catImg1,cat,mouse,mouseImg1,catImg2,mouseImg2,catImg4,mouseImg4;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
       catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
 catImg2=loadAnimation("images/cat2.png","images/cat3.png");
 mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
 //mouseImg3=loadAnimation("images/mouse3.png");
 mouseImg4=loadAnimation("images/mouse4.png");
 //catImg3=loadAnimation("images/cat3.png");
 catImg4=loadAnimation("images/cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,660,30,30);


//cat.velocityX=-3;
cat.addAnimation("images/cat1.png",catImg1);
//cat.addAnimation("images/cat2.png",catImg2);
//cat.addAnimation("images/cat3.png",catImg3);
//cat.addAnimation("images/cat4.png",catImg4);

cat.scale=0.2;
mouse=createSprite(80,660,100,100);
//mouse.velocityX=0;
mouse.addAnimation("images/mouse1.png",mouseImg1);
//mouse.addAnimation("images/mouse2.png",mouseImg2);
//mouse.addAnimation("images/mouse3.png",mouseImg3);
//mouse.addAnimation("images/mouse4.png",mouseImg4);
mouse.scale=0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x- mouse.x < (cat.width - mouse.width)/2){
cat.velocityX=0;
cat.addAnimation("images/cat4.png",catImg4);
cat.changeAnimation("images/cat4.png");
//cat.x=360;
cat.scale=0.2;
}
if(mouse.x- cat.x < (mouse.width - cat.width)/2){
    mouse.velocityX=0;
    mouse.addAnimation("images/mouse4.png",mouseImg4);
    mouse.changeAnimation("images/mouse4.png");
    //mouse.x=300;
    mouse.scale=0.2;
    }
    drawSprites();
}


function keyPressed(){
if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("images/mouse3.png",mouseImg3);
    mouse.changeAnimaton("images/mouse2.png",mouseImg2);
    mouse.frameDelay=26;
  
}
if(keyCode === LEFT_ARROW){
    cat.addAnimation("images/cat2.png",catImg2);
    cat.changeAnimation("images/cat2.png");
 cat.frameDelay=25;
    cat.velocityX=-10;
}

}
