// Vibration

// navigator.vibrate(durationOrPattern)
//    Vibrate the device once for the duration given or according to durations pattern given.

function vibrateSimple() {
  navigator.vibrate(200);
}

function vibratePattern() {
  navigator.vibrate([100, 200, 200, 200, 500]);
}
