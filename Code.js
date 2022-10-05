var trex = createSprite(50, 350, 20, 30);
var ground = createSprite(200, 375, 400, 30);
ground.setAnimation("ground.png_1");
ground.depth = -1;
var invisible_ground = createSprite(200, 400, 400, 40);
invisible_ground.visible = false;



var gamestate = "start";

var cactusGrp=createGroup();
var cloudGrp=createGroup();
var game_over=createSprite(200,150)
game_over.setAnimation("game-over.png_1");
game_over.scale = 3;
game_over.visible =false;


var resetBt=createSprite(200,250)
resetBt.setAnimation("restart.png_1");
resetBt.scale = 0.8;
resetBt.visible = false;

var score=0;


function draw() {
  background("white");
  trex.collide(invisible_ground);
  drawSprites();
  if (gamestate=="start") {
    textSize(25);
    text("Press space to start", 100, 210);
    game_over.visible = false;
    resetBt.visible = false;
    if (keyDown("space")&&gamestate=="start") {
      gamestate="play";
      if (gamestate=="play") {
        trex.setAnimation("trex_run0.png_2");
        score=score+Math.round(World.frameRate/60)
      }
    }
  }
}
