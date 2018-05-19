var textArea = document.getElementById('text');
var button = document.getElementById('go');

button.onclick = function() {
  // Remove XML Tags
  var cleanText = textArea.value.replace(/<\/?[^>]+(>|$)/g, "");

  // Remove Line Beginnings
  cleanText = cleanText.replace(/[\-]?[0-9][\-a-zA-Z0-9_=:,. ]+=[ a-zA-Z-_0-9=]+[,:]/g, "");

  // Remove Tildes
  cleanText = cleanText.replace(/~/g, "");

  textArea.value = cleanText;
}
