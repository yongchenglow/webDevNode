// Clipboard

// document.addEventListener('cut/copy/paste', listener)
//     An event fired when the user invoked the particular clipboard operation (either cut, copy or paste).
// event.clipboardData.setData('text/plain', data)
//     Sets the data that is to be written to the clipboard by the cut or copy operations in the specified format.
// event.clipboardData.getData('text/plain')
//     Returns the data that has been read from the clipboard by the paste operation in the specified format.
// document.execCommand('cut/copy/paste')
//     Programatically invokes the specified clipboard operation (either cut, copy or paste) on the data or element currently having a focus.
// Newer, asynchronous API
// navigator.clipboard.writeText(text)
//     Writes the data to the clipboard. Returns a Promise resolved when the operation has succeeded.
// navigator.clipboard.readText()
//     Returns a Promise resolved with the data read from the clipboard.

var logTarget = document.getElementById('copyLog');

function useAsyncApi() {
  return document.querySelector('input[value=async]').checked;
}

function log(event) {
  var timeBadge = new Date().toTimeString().split(' ')[0];
  var newInfo = document.createElement('p');
  newInfo.innerHTML = '<span class="badge">' + timeBadge + '</span> ' + event + '</b>.';
  logTarget.appendChild(newInfo);
}

function performCopyEmail() {
  var selection = window.getSelection();
  var emailLink = document.querySelector('.js-emaillink');

  if (useAsyncApi()) {
    navigator.clipboard.writeText(emailLink.textContent)
      .then(() => log('Async writeText successful, "' + emailLink.textContent + '" written'))
      .catch(err => log('Async writeText failed with error: "' + err + '"'));
  } else {
    selection.removeAllRanges();
    var range = document.createRange();
    range.selectNode(emailLink);
    selection.addRange(range);

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      log('Copy email command was ' + msg);
    } catch (err) {
      log('execCommand Error', err);
    }

    selection.removeAllRanges();
  }
}

function performCutTextarea() {
  var cutTextarea = document.querySelector('.js-cuttextarea');

  if (useAsyncApi()) {
    navigator.clipboard.writeText(cutTextarea.textContent)
      .then(() => {
        log('Async writeText successful, "' + cutTextarea.textContent + '" written');
        cutTextarea.textContent = '';
      })
      .catch(err => log('Async writeText failed with error: "' + err + '"'));
  } else {
    var hasSelection = document.queryCommandEnabled('cut');
    cutTextarea.select();

    try {
      var successful = document.execCommand('cut');
      var msg = successful ? 'successful' : 'unsuccessful';
      log('Cutting text command was ' + msg);
    } catch (err) {
      log('execCommand Error', err);
    }
  }
}

// Get the buttons
var cutTextareaBtn = document.querySelector('.js-textareacutbtn');
var copyEmailBtn = document.querySelector('.js-emailcopybtn');

// Add click event listeners
copyEmailBtn.addEventListener('click', performCopyEmail);
cutTextareaBtn.addEventListener('click', performCutTextarea);

function logUserOperation(event) {
  log('User performed <b>' + event.type + '</b> operation. Payload is: <b>' + event.clipboardData.getData('text/plain') + '</b>');
}

document.addEventListener('cut', logUserOperation);
document.addEventListener('copy', logUserOperation);
document.addEventListener('paste', logUserOperation);
