(function() {
  var selector = document.getElementById("selector");
  var initialX = 237.5;
  var initialY = 100;
  var prevAnswer = "E";
  var prevTiltLR = 0;
  var prevTiltFB = 0;
  var prevVibrate = 5;

  window.addEventListener('deviceorientation', moveDot, false);

  function moveDot (eventData) {
    var tiltLR = eventData.gamma;
    var tiltFB = eventData.beta;

    var newLR = initialX + Math.round(tiltLR)*7;
    var newFB = initialY + Math.round(tiltFB)*7;

    selector.style.left = newLR +"px";
    selector.style.bottom = newFB + "px";

    if(Math.abs(tiltLR - prevTiltLR) > 2 || Math.abs(tiltFB - prevTiltFB) > 2){
      if(Math.abs(tiltLR - prevTiltLR) > Math.abs(tiltFB - prevTiltFB)){
        if(newLR > 287.5){
          if(prevAnswer != "B"){
            document.getElementById("answerB").classList.add("selected");
            document.getElementById("answerA").classList.remove("selected");
            document.getElementById("answerC").classList.remove("selected");
            document.getElementById("answerD").classList.remove("selected");
          }
        }

        if(newLR < 187.5){
          if(prevAnswer != "D"){
            document.getElementById("answerD").classList.add("selected");
            document.getElementById("answerA").classList.remove("selected");
            document.getElementById("answerB").classList.remove("selected");
            document.getElementById("answerC").classList.remove("selected");
          }
        }
      } else {
        if(newFB > 250){
          if(prevAnswer != "A"){
            document.getElementById("answerA").classList.add("selected");
            document.getElementById("answerB").classList.remove("selected");
            document.getElementById("answerC").classList.remove("selected");
            document.getElementById("answerD").classList.remove("selected");
          }
        }

        if(newFB < 150){
          if(prevAnswer != "C"){
            document.getElementById("answerC").classList.add("selected");
            document.getElementById("answerA").classList.remove("selected");
            document.getElementById("answerB").classList.remove("selected");
            document.getElementById("answerD").classList.remove("selected");
          }
        }
      }
      prevTiltFB = tiltFB;
      prevTiltLR = tiltLR;
      if(newFB >= 400 || newFB <= 10 || newLR >= 490 || newLR <= 10){
        if(newFB >= 400){
          if(prevVibrate != 1){
            navigator.vibrate(100);
          }
          prevVibrate = 1;
          console.log(newFB);
          console.log(newLR);
        }
        if(newFB <= 10){
          if(prevVibrate != 2){
            navigator.vibrate(100);
          }
          prevVibrate = 2;
          console.log(newFB);
          console.log(newLR);
        }
        if(newLR >= 490){
          if(prevVibrate != 3){
            navigator.vibrate(100);
          }
          prevVibrate = 3;
          console.log(newFB);
          console.log(newLR);
        }
        if(newLR <= 10){
          if(prevVibrate != 4){
            navigator.vibrate(100);
          }
          prevVibrate = 4;
          console.log(newFB);
          console.log(newLR);
        }

      }
    }
  }

})();
