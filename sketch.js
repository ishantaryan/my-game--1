var canvas;
var bgImg;
var aircraft, aircraft_Img;
var planet, planet_Img; 
var bullet , bullet_Img;
var asteroid , asteroid_Img;





function preload(){
bgImg = loadImage("assets/background.jpg");
aircraft_Img = loadImage("assets/spacecraft.gif") 
planet_Img = loadImage("assets/planet.gif")
asteroid_Img = loadImage("assets/asteroid.png")
bullet_Img = loadImage("assets/bullet.gif")

}

function setup() {
canvas = createCanvas(windowWidth, windowHeight);

 // creating aircraft
 aircraft = createSprite(650,175,20,40);
 aircraft.addAnimation("spaceCraft" , aircraft_Img);
 aircraft.scale = 2

 // creating planet
 planet = createSprite(650,355,30,30);
 planet.addAnimation("celestial" , planet_Img);
 planet.scale = 0.55
 
}

function draw(){
 background(bgImg);
 drawSprites();
}