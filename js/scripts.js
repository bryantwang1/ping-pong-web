var arrayOfCountings;
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

  }
};

// UI below this line

$(function() {
  $(".result").append("<ul></ul>");
  $("form#ping-ponging").submit(function(event){
    event.preventDefault();

    var userNumber = $("input#user-number").val();
    inputCounter(userNumber);
    pingPonger(userNumber);
    $(".result ul").empty();
    arrayOfCountings.forEach(function(number) {
      $(".result ul").append("<li>" + number + "</li>");
    });
  });
});
