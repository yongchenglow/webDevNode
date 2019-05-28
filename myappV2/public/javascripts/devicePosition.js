// Device Position

// window.addEventListener('deviceorientation', listener)
//     An event fired when the significant changes in the device's orientation has occured.
// event.alpha
//     Returns device's current heading (direction) in degrees, counted counterclockwise from the North (0) through West (90), South (180) and East (270).
// event.beta
//     Returns device's current front/back tilt in degrees, 0 when lying horizontally upward facing, 90 when in vertical position, -90 in vertical upside down, -180 when horizontal upside down.
// event.gamma
//     Returns device's current left/right tilt in degrees, from -90 when turned left to 90 when turned right.
// Absolute Orientation Sensor API
// sensor = new AbsoluteOrientationSensor()
//     Creates an object serving as an accessor to the orientation readings in relation to the Earth’s reference coordinate system, based on accelerometer, gyroscope and magenetometer readings.
// sensor.addEventListener('reading', listener)
//     An event fired when the orientation reading has changed, indicating that the sensor object contains updated quaternion representing the device's orientation.
// sensor.start()
//     Starts listening for the sensor readings.
// sensor.quaternion
//     Returns the last available reading expressed as quaternion representing the device's orientation.
// Relative Orientation Sensor API
// sensor = new RelativeOrientationSensor()
//     Creates an object serving as an accessor to the orientation readings in relation to a stationary reference coordinate system, based on accelerometer and gyroscope readings.
// sensor.addEventListener('reading', listener)
//     An event fired when the orientation reading has changed, indicating that the sensor object contains updated quaternion representing the device's orientation.
// sensor.start()
//     Starts listening for the sensor readings.
// sensor.quaternion
//     Returns the last available reading expressed as quaternion representing the device's orientation.

if ('DeviceOrientationEvent' in window) {
  window.addEventListener('deviceorientation', deviceOrientationHandler, false);
} else {
  document.getElementById('logoContainer').innerText = 'Device Orientation API not supported.';
}

function deviceOrientationHandler (eventData) {
  var tiltLR = eventData.gamma;
  var tiltFB = eventData.beta;
  var dir = eventData.alpha;

  document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
  document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
  document.getElementById("doDirection").innerHTML = Math.round(dir);

  // var logo = document.getElementById("imgLogo");
  // logo.style.webkitTransform = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)";
  // logo.style.MozTransform = "rotate(" + tiltLR + "deg)";
  // logo.style.transform = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)";
}
