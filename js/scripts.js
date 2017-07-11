var addDashes = function(inputWord) {
  var inputWordArray = inputWord.split('');
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < inputWordArray.length; i++) {
    var currentLetter = inputWordArray[i];
    if (vowels.indexOf(currentLetter) != -1) {
      inputWordArray[i] = "-";
    }
  }
  var output = inputWordArray.join('');
  return output;
}

$(document).ready(function() {
  

});
