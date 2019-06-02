// Foreground Detection

// document.hidden
//     Returns true if the page is currently hidden.
// document.visibilityState
//     Returns current visibility state: visible, hidden, prerender or unloaded.
// document.addEventListener('visibilitychange')
//     An event fired when the visibility state of the page has changed.

var target = document.getElementById('visbilityTarget');

var hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
} else {
  target.innerText = 'Page Visibility API not supported.';
}

function handleVisibilityChange() {
  var timeBadge = new Date().toTimeString().split(' ')[0];
  var newState = document.createElement('p');
  newState.innerHTML = '<span class="badge">' + timeBadge + '</span> Page visibility changed to <b>' + (document[hidden] ? 'hidden' : 'visible') + '</b>.';
  target.appendChild(newState);
}

document.addEventListener(visibilityChange, handleVisibilityChange, false);

if (hidden in document) {
  document.getElementById('visibilityStatus').innerHTML = document[hidden] ? 'hidden' : 'visible';
}
