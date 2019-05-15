// Network Type

// navigator.connection.type
//     Returns the theoretical type of the current connection, based on the underlying connection technology, i.e. cellular, wifi, none etc.
// navigator.connection.effectiveType
//     Returns the information about the quality of the current connection based on recently observed performance metrics, regardless of the underlying connection technology, i.e. slow-2g, 2g, 3g, 4g.
// navigator.connection.downlinkMax
//     Returns the theoretical maxinum downlink speed, in Mbps, for the underlying technology of the current connection.
// navigator.connection.addEventListener('change', listener)
//     An event fired when the connection type has changed.

function getConnection() {
  return navigator.connection || navigator.mozConnection ||
    navigator.webkitConnection || navigator.msConnection;
}

function updateNetworkInfo(info) {
  document.getElementById('networkType').innerHTML = info.type;
  document.getElementById('effectiveNetworkType').innerHTML = info.effectiveType;
  document.getElementById('downlinkMax').innerHTML = info.downlinkMax;
}

var info = getConnection();
if (info) {
  info.addEventListener('change', updateNetworkInfo);
  updateNetworkInfo(info);
}
