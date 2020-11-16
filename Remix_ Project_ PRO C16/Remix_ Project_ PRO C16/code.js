var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","0af5b871-2225-4360-ba3a-1953a8766d64"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"ONcPF8ur8UfgzbbEfyADmvGDJlI7fG5T","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"7nc6dbyub..wBYyw6mLRs3Y.KHo7topr","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":12,"version":"azd.OfcM0sCbC0VwmBW3Ub9MlYiq29G3","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/33841f90-7a53-4346-b956-e51d1961959b.png"},"0af5b871-2225-4360-ba3a-1953a8766d64":{"sourceSize":{"x":1003,"y":771},"frameSize":{"x":1003,"y":771},"frameCount":1,"frameDelay":4,"name":"jungle-min-min.jpg_1","sourceUrl":"assets/v3/animations/LQC-bkXYAYJtyz_oqKOBz48JrfnbInQHIdqPTFs8SFw/0af5b871-2225-4360-ba3a-1953a8766d64.png","size":87268,"version":"LS9ONTuEpmfuV0k3s6XRLfi.hqpOaAlW","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/LQC-bkXYAYJtyz_oqKOBz48JrfnbInQHIdqPTFs8SFw/0af5b871-2225-4360-ba3a-1953a8766d64.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var jungle=createSprite(0,0,400,400);
jungle.setAnimation("jungle-min-min.jpg_1");
jungle.x = jungle.width/2;
jungle.velocityX=-2;
jungle.scale=2

var player=createSprite(100,340,20,50);
player.setAnimation("monkey");
player.scale=0.1;

var ObstaclesGroup=createGroup();
var BananaGroup=createGroup();

var survivalTime = 0;

function draw() {
  
  background(255);
  
  if (jungle.x < 0){
      jungle.x = jungle.width/2;
    }
    createEdgeSprites();
  
  if(keyDown("space")){
      player.velocityY = -12 ;
  }
  
  player.velocityY = player.velocityY + 0.8;
  
  spawnbanana();
  spawnObstacles();
  
  player.collide(bottomEdge);
  
  drawSprites();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100,50);
}
    
function spawnObstacles() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,318,10,40);
    obstacle.velocityX = - 10;
    
    obstacle.setAnimation("Stone")
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.15;
    obstacle.lifetime = 40;
    
    //add each obstacle to the group
ObstaclesGroup.add(obstacle);
  }
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (World.frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = randomNumber(120,200);
    banana.setAnimation("Banana");
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
    
    //adjust the depth
   banana.depth = player.depth;
   player.depth = player.depth + 1;
    
    //add each cloud to the group
    BananaGroup.add(banana);
  }
  
}


  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
