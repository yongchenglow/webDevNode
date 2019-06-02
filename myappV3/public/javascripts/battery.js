// Battery

// navigator.getBattery()
//   Returns a Promise resolved with the object containing battery information.
// battery.charging
//   Returns true if the device is currently being charged.
// battery.chargingTime
//   Returns the number of seconds remaining until the battery is fully charged.
// battery.dischargingTime
//   Returns the number of seconds remaining until the battery is fully discharged.
// battery.level
//   Returns the battery charging level as the number in 0 to 1 range.
// battery.addEventListener('chargingchange', listener)
//   An event fired when battery.charging value has changed.
// battery.addEventListener('chargingtimechange', listener)
//   An event fired when battery.chargingTime value has changed.
// battery.addEventListener('dischargingtimechange', listener)
//   An event fired when battery.dischargingTime value has changed.
// battery.addEventListener('levelchange', listener)
//   An event fired when battery.level value has changed.

if ('getBattery' in navigator || ('battery' in navigator && 'Promise' in window)) {
  var target = document.getElementById('battery');

  function handleChange(change) {
    var timeBadge = new Date().toTimeString().split(' ')[0];
    var newState = document.createElement('p');
    newState.innerHTML = '<span class="badge">' + timeBadge + '</span> ' + change + '.';
    target.appendChild(newState);
  }

  function onChargingChange() {
    handleChange('Battery charging changed to <b>' + (this.charging ? 'charging' : 'discharging') + '</b>')
  }
  function onChargingTimeChange() {
    handleChange('Battery charging time changed to <b>' + this.chargingTime + ' s</b>');
  }
  function onDischargingTimeChange() {
    handleChange('Battery discharging time changed to <b>' + this.dischargingTime + ' s</b>');
  }
  function onLevelChange() {
    handleChange('Battery level changed to <b>' + this.level + '</b>');
  }

  var batteryPromise;

  if ('getBattery' in navigator) {
    batteryPromise = navigator.getBattery();
  } else {
    batteryPromise = Promise.resolve(navigator.battery);
  }

  batteryPromise.then(function (battery) {
    document.getElementById('charging').innerHTML = battery.charging ? 'charging' : 'discharging';
    document.getElementById('chargingTime').innerHTML = battery.chargingTime + ' s';
    document.getElementById('dischargingTime').innerHTML = battery.dischargingTime + ' s';
    document.getElementById('level').innerHTML = battery.level;

    battery.addEventListener('chargingchange', onChargingChange);
    battery.addEventListener('chargingtimechange', onChargingTimeChange);
    battery.addEventListener('dischargingtimechange', onDischargingTimeChange);
    battery.addEventListener('levelchange', onLevelChange);
  });
}
