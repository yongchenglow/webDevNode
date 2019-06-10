// Notifications

// Notification.requestPermission([callback])
//     Asks a user for the permission to show Notifications. Returns a Promise with the prompt result. As a legacy, it also calls callback function, if provided.
// Notification.permission
//     Returns current permission state - default (user not yet decided), granted or denied.
// new Notification(title, [options])
//     Displays local non-persistent notification outside of the browser tab area.
// navigator.serviceWorker.getRegistration()
//   .then(reg => reg.showNotification(title, [options])
//     Displays local persistent notification outside of the browser tab area.

var $status = document.getElementById('notificationStatus');

if ('Notification' in window) {
  $status.innerText = Notification.permission;
}

function requestPermission() {
  if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
  }

  Notification.requestPermission(function (result) {
    $status.innerText = result;
  });
}

function nonPersistentNotification() {
  if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
  }

  try {
    var notification = new Notification("Hi there - non-persistent!");
  } catch (err) {
    alert('Notification API error: ' + err);
  }
}

function persistentNotification() {
  if (!('Notification' in window) || !('ServiceWorkerRegistration' in window)) {
    alert('Persistent Notification API not supported!');
    return;
  }

  try {
    navigator.serviceWorker.getRegistration()
      .then(reg => reg.showNotification("Hi there - persistent!"))
      .catch(err => alert('Service Worker registration error: ' + err));
  } catch (err) {
    alert('Notification API error: ' + err);
  }
}
