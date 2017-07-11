var addDashes = function(inputWord) {
  var inputWordArray = inputWord.split('');
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
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
  $("#formOne").submit(function(event) {
    var outputWord = addDashes($("input#word").val());
    $("#results").text(outputWord);
    $("#formOne").hide();

    $("#showForm").click(function() {
      $("#formOne").show();
    })
    event.preventDefault();
  });
});
