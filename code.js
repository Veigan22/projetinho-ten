var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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


//criando raquete e bola
var paddle = createSprite(200, 375, 75, 10);
paddle.shapeColor = "#00f9ff";
var ball = createSprite(200, 200, 20, 20);
ball.shapeColor = "black";

//ciando a pontuaçãp
var pont = 0;

//primeira linha de caixas
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//segunda linha de caixas
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";


function draw() {

  //fazer voce ganhar o jogo
  if (pont == 16){
    background("black");
    stroke ("red");
    textSize("150");
    text("VOCE GANHOU!!");
  }
  
  
  //mudar o plano de fundo
   background("white");
  //criar o placar
  stroke("black");
  textSize("45");
  text("placar: "+pont,190,35);
  
  //mover a bola ao pressionar a tecla enter
  if(keyDown("enter")){
    ball.velocityX = 3;
    ball.velocityY = 4;
  }
  
  //fazer a bola rebater na raquete e em três lados da tela
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

  //mover a raquete com o mouse ao longo do eixo x
  paddle.x=World.mouseX;
  
  //destruir as caixas quando a bola tocar nelas, e adicinar os pontos
  if(ball.isTouching(box1))
  {
    box1.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box2))
  {
    box2.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box2))
  {
    box2.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box3))
  {
    box3.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box4))
  {
    box4.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box5))
  {
    box5.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box6))
  {
    box6.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box7))
  {
    box7.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box8))
  {
    box8.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box9))
  {
    box9.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box10))
  {
    box10.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box11))
  {
    box11.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box12))
  {
    box12.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box13))
  {
    box13.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box14))
  {
    box14.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box15))
  {
    box15.destroy();
    pont = pont + 1;
  }
    if(ball.isTouching(box16))
  {
    box16.destroy();
    pont = pont + 1;
  }
    //fazer voce ganhar o jogo
  if (pont == 16){
    background("black");
    stroke  ("red");
    textSize("40");
    text("VOCE GANHOU!!!",33,200);
    paddle.destroy();
    ball.destroy();
  }
  

  drawSprites();
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
