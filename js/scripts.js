var arrayOfCountings;
var arrayOfResults;
var result;
// Counts up to and including the provided number by increments of 1.
function inputCounter(number) {
  arrayOfCountings = [];
  for(var idx = 1; idx <= number; idx++) {
    arrayOfCountings.push(idx);
  }
};
//
function pingPonger(input) {
  pingAndPong: {

    input = parseInt(input);
    inputAsString = input.toString();

    if(inputAsString === "NaN" || input < 1) {
      alert("Not a number or lower than 1!");
      break pingAndPong;
    }

    arrayOfResults = [];
    inputCounter(input);

    for(var idx = 0; idx < arrayOfCountings.length; idx++) {
      if(arrayOfCountings[idx] % 3 === 0){
        arrayOfCountings[idx] = "ping";
      }
    }
  }
};

// UI below this line

$(function() {
  $(".result").append("<ul></ul>");
  $("form#ping-ponging").submit(function(event){
    event.preventDefault();

    var userNumber = $("input#user-number").val();
    pingPonger(userNumber);
    $(".result ul").empty();
    arrayOfCountings.forEach(function(number) {
      $(".result ul").append("<li>" + number + "</li>");
    });
  });
});
