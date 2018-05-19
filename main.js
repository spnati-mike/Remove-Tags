var textArea = document.getElementById('text');
var goButton = document.getElementById('go');
var downloadButton = document.getElementById('download');

goButton.onclick = function() {
  // Remove XML Tags
  var cleanText = textArea.value.replace(/<\/?[^>]+(>|$)/g, "");

  // Remove Line Beginnings
  cleanText = cleanText.replace(/[\-]?[0-9][\-a-zA-Z0-9_=:,. ]+=[ a-zA-Z-_0-9=]+[,:]/g, "");

  // Remove Tildes
  cleanText = cleanText.replace(/~/g, "");

  // Remove Duplicate Lines
  var pieces = cleanText.split("\n"); //This will split your string
  var output = []; //Output array

  for (var i = 0; i < pieces.length; i++) { //Iterate over input...

     if (pieces[i] == '<BR>' || output.indexOf(pieces[i]) < 0) { //If it is <BR> or not in output, add to output
        output.push(pieces[i]);
     }

  }

  cleanText = output.join("\n"); //Concatenates the string back, you don't have to do this if you want your lines in the array

  textArea.value = cleanText;
}

downloadButton.onclick = function() {
  download(textArea.value, "removed_tags.txt", "text/plain");
}

// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
