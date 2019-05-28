window.onload = function(){
  canvas = document.getElementById("snakegame");
  contex = canvas.getContext("2d");
  canvas.addEventListener("touchstart",touchStart);
  setInterval(game, 1000/15);
  navigator.vibrate(200);
  Notification.requestPermission().then(function(result) {
    console.log(result);
    new Notification("Touch the snake game to begin");
  });
}

xPlayerPosition = yPlayerPosition = 10;
gridSize = tileCount = 20;
xApple = yApple = 15;
xVelocity = yVelocity = 0;
trail = [];
tail = 5;
start = 0;

function fullScreenCheck() {
  if (document.fullscreenElement) return;
  return document.documentElement.requestFullscreen();
}

document.getElementById("lockScreenOrientation").addEventListener('click', function () {
  fullScreenCheck();
  screen.mozLockOrientation("portrait-primary");
});

document.getElementById("unlockScreenOrientation").addEventListener('click', function () {
  screen.mozUnlockOrientation();
});

function game(){
  xPlayerPosition += xVelocity;
  yPlayerPosition += yVelocity;
  if(xPlayerPosition < 0){
    xPlayerPosition = tileCount-1;
  }
  if(xPlayerPosition > tileCount -1){
    xPlayerPosition = 0;
  }
  if(yPlayerPosition < 0){
    yPlayerPosition = tileCount-1;
  }
  if(yPlayerPosition > tileCount -1){
    yPlayerPosition = 0;
  }

  contex.fillStyle = "black";
  contex.fillRect(0,0,canvas.width, canvas.height);

  contex.fillStyle = "lime";
  for(var i=0; i < trail.length; i++ ){
    contex.fillRect(trail[i].x * gridSize,trail[i].y * gridSize, gridSize - 2, gridSize - 2);
    if(trail[i].x == xPlayerPosition && trail[i].y == yPlayerPosition && start == 1){
      tail = 5;
      navigator.vibrate(500);
    }
  }

  trail.push({x:xPlayerPosition, y:yPlayerPosition});
  while(trail.length > tail){
    trail.shift();
  }

  if(xApple == xPlayerPosition && yApple == yPlayerPosition){
    tail++;
    xApple = Math.floor(Math.random()*tileCount);
    yApple = Math.floor(Math.random()*tileCount);
  }

  contex.fillStyle = "red";
  contex.fillRect(xApple * gridSize, yApple * gridSize, gridSize - 2, gridSize - 2);
}

function touchStart(){
  window.addEventListener("deviceorientation",handleOrientation);
}

var prevMove = "";

function checkStart(){
  if (start == 0)
    start = 1;
}

function handleOrientation(event) {
  var beta = event.beta;
  var gamma = event.gamma;

  // left
  if(gamma < -15 && Math.abs(gamma) > Math.abs(beta + 5) && prevMove != "right"){
    xVelocity = -1;
    yVelocity = 0;
    prevMove = "left";
    checkStart();
  }

  // up
  if(beta < -10 && Math.abs(beta) > Math.abs(gamma - 5) && prevMove != "down"){
    xVelocity = 0;
    yVelocity = -1;
    prevMove = "up";
    checkStart();
  }

  // right
  if(gamma > 15 && Math.abs(gamma) > Math.abs(beta + 5) && prevMove != "left"){
    xVelocity = 1;
    yVelocity = 0;
    prevMove = "right";
    checkStart();
  }

  // down
  if(beta > 10 && Math.abs(beta) > Math.abs(gamma - 5) && prevMove != "up"){
    xVelocity = 0;
    yVelocity = 1;
    prevMove = "down";
    checkStart();
  }

  document.getElementById("betaGamma").innerHTML = "[ "+beta+" , "+gamma+" ]";
}
