var arrayOfCountings;
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

    inputAsString = input.toString();
    input = parseInt(input);
    console.log(/\D+/gi.test(inputAsString));

    if(/\D+/gi.test(inputAsString) || input < 1) {
      arrayOfCountings = ["Your input was no good! It won't work if there are any characters besides numbers or if the number is lower than 1."];
      break pingAndPong;
    }

    arrayOfResults = [];
    inputCounter(input);

    for(var idx = 0; idx < arrayOfCountings.length; idx++) {
      console.log("loop for pingpong");
      if(arrayOfCountings[idx] % 3 === 0){
        arrayOfCountings[idx] = arrayOfCountings[idx].toString();
        arrayOfCountings[idx] += "ping";
      }
      if(parseInt(arrayOfCountings[idx]) % 5 === 0){
        arrayOfCountings[idx] = arrayOfCountings[idx].toString();
        arrayOfCountings[idx] += "pong";
      }
      if(typeof arrayOfCountings[idx] === "string"){
        arrayOfCountings[idx] = arrayOfCountings[idx].replace(/\d*/g, "");
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
