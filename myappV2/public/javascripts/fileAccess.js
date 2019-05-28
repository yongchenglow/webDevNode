// File Access

// fileInputElement.files
//     Returns a collection of file objects that were selected by the user using <input type="file">DOM element.
// file.name
//     Returns the original name of the file, without the path.
// file.size
//     Returns the file size in bytes.
// file.type
//     Returns the file's MIME type.
// file.lastModifiedDate
//     Returns the file's last modification date.
// fileReader.readAsText(file)
//     Initiates a process of reading the file and encoding its content as text.
// fileReader.addEventListener('load', listener)
//     An event fired when the reading operation has completed successfully. The data read is available via fileReader.result property.

function getReadFile(reader, i) {
  return function () {
    var li = document.querySelector('[data-idx="' + i + '"]');

    li.innerHTML += 'File starts with "' + reader.result.substr(0, 25) + '"';
  }
}

function handleFiles(files) {
  document.getElementById('fileTarget').innerHTML = files.length;

  var target = document.getElementById('target');
  target.innerHTML = '';

  for (var i = 0; i < files.length; ++i) {
    var item = document.createElement('li');
    item.setAttribute('data-idx', i);
    var file = files[i];

    var reader = new FileReader();
    reader.addEventListener('load', getReadFile(reader, i));
    reader.readAsText(file);

    item.innerHTML = '<b>' + file.name + '</b>, ' + file.type + ', ' + file.size + ' bytes, last modified ' + file.lastModifiedDate + '<br>';
    target.appendChild(item);
  };
}
