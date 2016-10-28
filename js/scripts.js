// This global variable is pretty much unavoidable as far as I can tell, but at least I kept it to 1 this time.
var arrayOfCountings;
// Counts up to and including the provided number by increments of 1.
function inputCounter(number) {
  arrayOfCountings = [];
  for(var idx = 1; idx <= number; idx++) {
    arrayOfCountings.push(idx);
  }
};
// Checks if input is valid, then goes through arrayOfCountings checking if the numbers contained within are divisible by 3, and then by 5, adding ping and pong respectively, then removes the numbers from array objects that have been modified.
function pingPonger(input) {
  pingAndPong: {

    inputAsString = input.toString();
    input = parseInt(input);
    console.log(/\D+/gi.test(inputAsString));

    if(/\D+/gi.test(inputAsString) || input < 1) {
      arrayOfCountings = ["Your input was no good! It won't work if there are any characters besides numbers or if the number is lower than 1."];
      break pingAndPong;
    }

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
  $(".container").wrap("<div id=\"fancier-or-not\"></div>")
  $("form#ping-ponging").submit(function(event){
    event.preventDefault();

    var userNumber = $("input#user-number").val();
    pingPonger(userNumber);
    $(".result ul").empty();
    arrayOfCountings.forEach(function(number) {
      $(".result ul").append("<li>" + number + "</li>");
    });
  });

  $("#button#imitation").click(function() {
    $(".fancier-or-not").removeClass();
  });

  $("#button#imitation").click(function() {
    $(".fancier-or-not").addClass("fancier");
  });
});
