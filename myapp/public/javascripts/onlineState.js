// Online State

// navigator.onLine
//     Returns true when the browser detects network connection available, false otherwise.
// window.addEventListener('online', listener)
//     An event fired when the browser detects network connection has become available.
// window.addEventListener('offline', listener)
//     An event fired when the browser detects network connection has become unavailable.

document.getElementById('onlineStatus').innerHTML = navigator.onLine ? 'online' : 'offline';

var target = document.getElementById('online');

function handleStateChange() {
  var timeBadge = new Date().toTimeString().split(' ')[0];
  var newState = document.createElement('p');
  var state = navigator.onLine ? 'online' : 'offline';
  newState.innerHTML = '<span class="badge">' + timeBadge + '</span> Connection state changed to <b>' + state + '</b>.';
  target.appendChild(newState);
}

window.addEventListener('online', handleStateChange);
window.addEventListener('offline', handleStateChange);
