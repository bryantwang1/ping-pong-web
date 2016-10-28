var arrayOfCountings = [];

function inputCounter(number) {
  for(var idx = 1; idx <= number; idx++) {
    arrayOfCountings.push(idx);
  }
};

// UI below this line

$(function() {
  $("form#ping-ponging").submit(function(event){
    event.preventDefault();
    $(".result").append("<ul></ul>");

    var userNumber = $("input#user-number").val();
    inputCounter(userNumber);
  });
});
