// Device Motion

// As a part of Device Orientation API
// window.addEventListener('devicemotion', listener)
//     An event fired when the significant changes in the device's acceleration or rotation has occured.
// event.acceleration
//     A part of the event's payload returning the data about the current device's acceleration excluding gravity for all three axes (acceleration.x, acceleration.y, acceleration.z).
// event.accelerationIncludingGravity
//     A part of the event's payload returning the data about the current device's acceleration including gravity if the device is unable to provide the data without the gravity effect using event.acceleration.
// event.rotationRate
//     A part of the event's payload returning the data about the current device's rotation rates for all three axes (rotationRate.alpha, rotationRate.beta, rotationRate.gamma).
// event.interval
//     A part of the event's payload returning the interval (in ms) at which the data is obtained from the accelerometer.
//
// Accelerometer API
// sensor = new Accelerometer()
//     Creates an object serving as a direct accessor to the accelerometer readings.
// sensor.addEventListener('reading', listener)
//     An event fired when the accelerometer reading has changed, indicating that the sensor object contains updated acceleration in rad/s for all three axes (sensor.x, sensor.y, sensor.z).
// sensor.start()
//     Starts listening for the sensor readings.
//
// Gyroscope API
// sensor = new Gyroscope()
//     Creates an object serving as a direct accessor to the gyroscope readings.
// sensor.addEventListener('reading', listener)
//     An event fired when the gyroscope reading has changed, indicating that the sensor object contains updated angular velocity in rad/s for all three axes (sensor.x, sensor.y, sensor.z).
// sensor.start()
//     Starts listening for the sensor readings.
//
// Magnetometer API
// sensor = new Magnetometer()
//     Creates an object serving as a direct accessor to the magnetometer readings.
// sensor.addEventListener('reading', listener)
//     An event fired when the magnetometer reading has changed, indicating that the sensor object contains updated magnetic field for all three axes (sensor.x, sensor.y, sensor.z).
// sensor.start()
//     Starts listening for the sensor readings.
//
// Linear Acceleration Sensor API
// sensor = new LinearAccelerationSensor()
//     Creates an object serving as an accessor to the linear acceleration readings based on accelerometer and either gyroscope or magnetometer.
// sensor.addEventListener('reading', listener)
//     An event fired when the accelerometer reading has changed, indicating that the sensor object contains updated acceleration values in m/s2 for all three axes (sensor.x, sensor.y, sensor.z).
// sensor.start()
//     Starts listening for the sensor readings.
//
// Gravity Sensor API
// sensor = new GravitySensor()
//     Creates an object serving as an accessor to the gravity readings based on accelerometer and gyroscope.
// sensor.addEventListener('reading', listener)
//     An event fired when the accelerometer reading has changed, indicating that the sensor object contains updated acceleration values in m/s2 for all three axes (sensor.x, sensor.y, sensor.z).
// sensor.start()
//     Starts listening for the sensor readings.

if ('LinearAccelerationSensor' in window && 'Gyroscope' in window) {
  document.getElementById('moApi').innerHTML = 'Generic Sensor API';

  let lastReadingTimestamp;
  let accelerometer = new LinearAccelerationSensor();
  accelerometer.addEventListener('reading', e => {
    if (lastReadingTimestamp) {
      intervalHandler(Math.round(accelerometer.timestamp - lastReadingTimestamp));
    }
    lastReadingTimestamp = accelerometer.timestamp
    accelerationHandler(accelerometer, 'moAccel');
  });
  accelerometer.start();

  if ('GravitySensor' in window) {
    let gravity = new GravitySensor();
    gravity.addEventListener('reading', e => accelerationHandler(gravity, 'moAccelGrav'));
    gravity.start();
  }

  let gyroscope = new Gyroscope();
  gyroscope.addEventListener('reading', e => rotationHandler({
    alpha: gyroscope.x,
    beta: gyroscope.y,
    gamma: gyroscope.z
  }));
  gyroscope.start();

} else if ('DeviceMotionEvent' in window) {
  document.getElementById('moApi').innerHTML = 'Device Motion API';

  var onDeviceMotion = function (eventData) {
    accelerationHandler(eventData.acceleration, 'moAccel');
    accelerationHandler(eventData.accelerationIncludingGravity, 'moAccelGrav');
    rotationHandler(eventData.rotationRate);
    intervalHandler(eventData.interval);
  }

  window.addEventListener('devicemotion', onDeviceMotion, false);
} else {
  document.getElementById('moApi').innerHTML = 'No Accelerometer & Gyroscope API available';
}

function accelerationHandler(acceleration, targetId) {
  var info, xyz = "[X, Y, Z]";

  info = xyz.replace("X", acceleration.x && acceleration.x.toFixed(3));
  info = info.replace("Y", acceleration.y && acceleration.y.toFixed(3));
  info = info.replace("Z", acceleration.z && acceleration.z.toFixed(3));
  document.getElementById(targetId).innerHTML = info;
}

function rotationHandler(rotation) {
  var info, xyz = "[X, Y, Z]";

  info = xyz.replace("X", rotation.alpha && rotation.alpha.toFixed(3));
  info = info.replace("Y", rotation.beta && rotation.beta.toFixed(3));
  info = info.replace("Z", rotation.gamma && rotation.gamma.toFixed(3));
  document.getElementById("moRotation").innerHTML = info;
}

function intervalHandler(interval) {
  document.getElementById("moInterval").innerHTML = interval;
}
