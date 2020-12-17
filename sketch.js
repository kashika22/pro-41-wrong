const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var drops = [];
var thunderIMG,playerIMG


function preload(){
//thunderIMG = loadAnimation("thunderbolt/1.png,thunderbolt/2.png,thunderbolt/3.png,thunderbolt/4.png")    
//playerIMG = loadAnimation("")
}

function setup(){
 createCanvas(400,1200)  

 engine = Engine.create();
 world = engine.world;  

 
    
}

function draw(){
 

    spawnDrops()
    drawSprites()
}   

function spawnDrops(){
if (frameCount % 5 === 0){
    var maxDrops = 100;
    for (var i=0; i<maxDrops; i++){
        drops.push(new Drops(random (0,400),random(0,400)));
    }
}
}
 