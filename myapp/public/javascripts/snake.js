window.onload = function(){
  canvas = document.getElementById("snakegame");
  contex = canvas.getContext("2d");
  canvas.addEventListener("touchstart",touchStart);
  setInterval(game, 1000/15);
}

xPlayerPosition = yPlayerPosition = 10;
gridSize = tileCount = 20;
xApple = yApple = 15;
xVelocity = yVelocity = 0;
trail = [];
tail = 5;

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
    if(trail[i].x == xPlayerPosition && trail[i].y == yPlayerPosition){
      tail = 5;
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
function handleOrientation(event) {

  var beta = event.beta;
  var gamma = event.gamma;

  // left
  if(gamma < -15 && beta > -10 && beta < 10 && prevMove != "right"){
    xVelocity = -1;
    yVelocity = 0;
    prevMove = "left";
  }

  // up
  if(beta < -10 && gamma > -15 && gamma < 15 && prevMove != "down"){
    xVelocity = 0;
    yVelocity = -1;
    prevMove = "up";
  }

  // right
  if(gamma > 15 && beta > -10 && beta < 10 && prevMove != "left"){
    xVelocity = 1;
    yVelocity = 0;
    prevMove = "right";
  }

  // down
  if(beta > 10 && gamma > -15 && gamma < 15 && prevMove != "up"){
    xVelocity = 0;
    yVelocity = 1;
    prevMove = "down";
  }

  document.getElementById("betaGamma").innerHTML = "[ "+beta+" , "+gamma+" ]";
}
