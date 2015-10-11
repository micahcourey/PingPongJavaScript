$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    $("#numberList li").remove();
    var yourNumber = parseInt($("input#yourNumber").val());
    for (var num = 1; num <= yourNumber; num++) {
      if (num % 3 === 0 && num % 5 === 0) {
        $("#numberList").append("<li>" + "Ping-Pong" + "</li>");
      } else if (num % 3 === 0) {
        $("#numberList").append("<li>" + "Ping" + "</li>");
      } else if (num % 5 === 0) {
        $("#numberList").append("<li>" + "Pong" + "</li>");
      } else {
        $("#numberList").append("<li>" + num + "</li>");
      }
    }
  event.preventDefault();
  })
})
