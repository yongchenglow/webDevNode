(function() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(75 , window.innerWidth / window.innerHeight, 0.1, 1000);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement);

  window.addEventListener('resize', function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize( width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  //create the shape
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );

  // create a material, colour or image texture
  var material = new THREE.MeshBasicMaterial ({color: 0xFFFFFF, wireframe: true});
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 3;

  // game logic
  var update = function(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.005;
  };

  // draw scene
  var render = function(){
    renderer.render( scene, camera);
  }

  // rune game loop (update, render, repeat)
  var GameLoop = function(){
    requestAnimationFrame (GameLoop);
    update();
    render();
  };

  GameLoop();


  // var selector = document.getElementById("selector");
  // var initialX = 237.5;
  // var initialY = 100;
  // var prevAnswer = "E";
  // var prevTiltLR = 0;
  // var prevTiltFB = 0;
  // var prevVibrate = 5;
  //
  // window.addEventListener('deviceorientation', moveDot, false);
  //
  // function moveDot (eventData) {
  //   var tiltLR = eventData.gamma;
  //   var tiltFB = eventData.beta;
  //
  //   var newLR = initialX + Math.round(tiltLR)*7;
  //   var newFB = initialY + Math.round(tiltFB)*7;
  //
  //   selector.style.left = newLR +"px";
  //   selector.style.bottom = newFB + "px";
  //
  //   if(Math.abs(tiltLR - prevTiltLR) > 2 || Math.abs(tiltFB - prevTiltFB) > 2){
  //     if(Math.abs(tiltLR - prevTiltLR) > Math.abs(tiltFB - prevTiltFB)){
  //       if(newLR > 287.5){
  //         if(prevAnswer != "B"){
  //           document.getElementById("answerB").classList.add("selected");
  //           document.getElementById("answerA").classList.remove("selected");
  //           document.getElementById("answerC").classList.remove("selected");
  //           document.getElementById("answerD").classList.remove("selected");
  //         }
  //       }
  //
  //       if(newLR < 187.5){
  //         if(prevAnswer != "D"){
  //           document.getElementById("answerD").classList.add("selected");
  //           document.getElementById("answerA").classList.remove("selected");
  //           document.getElementById("answerB").classList.remove("selected");
  //           document.getElementById("answerC").classList.remove("selected");
  //         }
  //       }
  //     } else {
  //       if(newFB > 250){
  //         if(prevAnswer != "A"){
  //           document.getElementById("answerA").classList.add("selected");
  //           document.getElementById("answerB").classList.remove("selected");
  //           document.getElementById("answerC").classList.remove("selected");
  //           document.getElementById("answerD").classList.remove("selected");
  //         }
  //       }
  //
  //       if(newFB < 150){
  //         if(prevAnswer != "C"){
  //           document.getElementById("answerC").classList.add("selected");
  //           document.getElementById("answerA").classList.remove("selected");
  //           document.getElementById("answerB").classList.remove("selected");
  //           document.getElementById("answerD").classList.remove("selected");
  //         }
  //       }
  //     }
  //     prevTiltFB = tiltFB;
  //     prevTiltLR = tiltLR;
  //     if(newFB >= 400 || newFB <= 10 || newLR >= 490 || newLR <= 10){
  //       if(newFB >= 400){
  //         if(prevVibrate != 1){
  //           navigator.vibrate(100);
  //         }
  //         prevVibrate = 1;
  //         console.log(newFB);
  //         console.log(newLR);
  //       }
  //       if(newFB <= 10){
  //         if(prevVibrate != 2){
  //           navigator.vibrate(100);
  //         }
  //         prevVibrate = 2;
  //         console.log(newFB);
  //         console.log(newLR);
  //       }
  //       if(newLR >= 490){
  //         if(prevVibrate != 3){
  //           navigator.vibrate(100);
  //         }
  //         prevVibrate = 3;
  //         console.log(newFB);
  //         console.log(newLR);
  //       }
  //       if(newLR <= 10){
  //         if(prevVibrate != 4){
  //           navigator.vibrate(100);
  //         }
  //         prevVibrate = 4;
  //         console.log(newFB);
  //         console.log(newLR);
  //       }
  //
  //     }
  //   }
  // }

})();
