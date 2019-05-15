// Screen

// window.screen.orientation.type
//     Returns the current screen orientation type as one of portrait-primary, portrait-secondary (upside down),  landscape-primary and landscape-secondary (upside down).
// window.screen.orientation.addEventListener('change', listener)
//     An event fired when the document orientation has changed.
// window.screen.orientation.lock(lockType)
//     Requests a screen lock in the lockType specified. Returns a Promise resolved when the lock was acquired successfully.
// window.screen.orientation.unlock()
//     Removes previously acquired screen orientation lock.

var $ = document.getElementById.bind(document);

var orientKey = 'orientation';
if (screen["mozOrientation"] !== undefined) {
  orientKey = 'mozOrientation';
} else if (screen['msOrientation'] !== undefined) {
  orientKey = 'msOrientation';
}

var target = $('orientationLock');
var device = $('device');
var orientationTypeLabel = $('orientationType');

function logChange (event) {
  var timeBadge = new Date().toTimeString().split(' ')[0];
  var newState = document.createElement('p');
  newState.innerHTML = '<span class="badge">' + timeBadge + '</span> ' + event + '.';
  target.appendChild(newState);
}

if (screen[orientKey]) {
  function update() {
    var type = screen[orientKey].type || screen[orientKey];
    orientationTypeLabel.innerHTML = type;

    var landscape = type.indexOf('landscape') !== -1;

    if (landscape) {
      device.style.width = '180px';
      device.style.height = '100px';
    } else {
      device.style.width = '100px';
      device.style.height = '180px';
    }

    var rotate = type.indexOf('secondary') === -1 ? 0 : 180;
    var rotateStr = 'rotate(' + rotate + 'deg)';

    device.style.webkitTransform = rotateStr;
    device.style.MozTransform = rotateStr;
    device.style.transform = rotateStr;
  }

  update();

  var onOrientationChange = null;

  if (screen["onmozorientationchange"] !== undefined) { // older API
    onOrientationChange = function () {
      logChange('Orientation changed to <b>' + screen[orientKey] + '</b>');
      update();
    };

    screen.addEventListener('onmozorientationchange', onOrientationChange);
  } else if (screen["orientation"]["onchange"] !== undefined) { // newer API
    onOrientationChange = function () {
      logChange('Orientation changed to <b>' + screen[orientKey].type + '</b>');
      update();
    };
      screen[orientKey].addEventListener('change', onOrientationChange);
  }

  // browsers require full screen mode in order to obtain the orientation lock
  var goFullScreen = null;
  var exitFullScreen = null;
  if ('requestFullscreen' in document.documentElement) {
    goFullScreen = 'requestFullscreen';
    exitFullScreen = 'exitFullscreen';
  } else if ('mozRequestFullScreen' in document.documentElement) {
    goFullScreen = 'mozRequestFullScreen';
    exitFullScreen = 'mozCancelFullScreen';
  } else if ('webkitRequestFullscreen' in document.documentElement) {
    goFullScreen = 'webkitRequestFullscreen';
    exitFullScreen = 'webkitExitFullscreen';
  } else if ('msRequestFullscreen') {
    goFullScreen = 'msRequestFullscreen';
    exitFullScreen = 'msExitFullscreen';
  }

  $('lock').addEventListener('click', function () {
    document.documentElement[goFullScreen] && document.documentElement[goFullScreen]();

    var promise = null;
    if (screen[orientKey].lock) {
      promise = screen[orientKey].lock(screen[orientKey].type);
    } else {
      promise = screen.orientationLock(screen[orientKey]);
    }

    promise
      .then(function () {
        logChange('Screen lock acquired');
        $('unlock').style.display = 'block';
        $('lock').style.display = 'none';
      })
      .catch(function (err) {
        logChange('Cannot acquire orientation lock: ' + err);
        document[exitFullScreen] && document[exitFullScreen]();
      });
  });

  $('unlock').addEventListener('click', function () {
    document[exitFullScreen] && document[exitFullScreen]();

    if (screen[orientKey].unlock) {
      screen[orientKey].unlock();
    } else {
      screen.orientationUnlock();
    }

    logChange('Screen lock removed.');
    $('unlock').style.display = 'none';
    $('lock').style.display = 'block';
  });
}
