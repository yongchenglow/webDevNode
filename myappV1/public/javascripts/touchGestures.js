// Touch Gestures

// element.addEventListener('touchstart', listener)
//     An event triggered when the finger has been placed on a DOM element.
// element.addEventListener('touchmove', listener)
//     An event triggered when the finger has been dragged along a DOM element.
// element.addEventListener('touchend', listener)
//     An event triggered when the finger has been removed from a DOM element.
// Pointer Events API
// element.addEventListener('pointerdown', listener)
//     An event triggered when the finger has been placed on a DOM element.
// element.addEventListener('pointermove', listener)
//     An event triggered when the finger has been dragged along a DOM element.
// element.addEventListener('pointerup', listener)
//     An event triggered when the finger has been removed from a DOM element.

function startDrag(e) {
  this.ontouchmove = this.onmspointermove = moveDrag;

  this.ontouchend = this.onmspointerup = function () {
    this.ontouchmove = this.onmspointermove = null;
    this.ontouchend = this.onmspointerup = null;
  }

  var pos = [this.offsetLeft, this.offsetTop];
  var that = this;
  var origin = getCoors(e);

  function moveDrag(e) {
    var currentPos = getCoors(e);
    var deltaX = currentPos[0] - origin[0];
    var deltaY = currentPos[1] - origin[1];
    this.style.left = (pos[0] + deltaX) + 'px';
    this.style.top = (pos[1] + deltaY) + 'px';
    return false; // cancels scrolling
  }

  function getCoors(e) {
    var coors = [];
    if (e.targetTouches && e.targetTouches.length) {
      var thisTouch = e.targetTouches[0];
      coors[0] = thisTouch.clientX;
      coors[1] = thisTouch.clientY;
    } else {
      coors[0] = e.clientX;
      coors[1] = e.clientY;
    }
    return coors;
  }
}

var elements = document.querySelectorAll('.test-element');
[].forEach.call(elements, function (element) {
  element.ontouchstart = element.onmspointerdown = startDrag;
});

document.ongesturechange = function () {
  return false;
}
