// Camera

// navigator.mediaDevices.getUserMedia(constraints)
//    Prompts user for an access to the media interface specified by the constraints and returns a Promise that is resolved with the interface's stream handler.
// stream.getAudioTracks()
//    Returns a collection of audio tracks objects being provided by the device's microphone.
// stream.getVideoTracks()
//    Returns a collection of video tracks objects being provided by the device's camera.
// mediaElement.srcObject = stream
//    Sets a stream to be rendered into the provided <audio> or <video> DOM element.

function getUserMedia(options, successCallback, failureCallback) {
  var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;
  if (api) {
    return api.bind(navigator)(options, successCallback, failureCallback);
  }
}

function getStream (type) {
  if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
    !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
    alert('User Media API not supported.');
    return;
  }

  var constraints = {};
  constraints[type] = true;
  getUserMedia(constraints, function (stream) {
    var mediaControl = document.querySelector(type);

    if ('srcObject' in mediaControl) {
      mediaControl.srcObject = stream;
      mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
    } else if (navigator.mozGetUserMedia) {
      mediaControl.mozSrcObject = stream;
    }
  }, function (err) {
    alert('Error: ' + err);
  });
}
