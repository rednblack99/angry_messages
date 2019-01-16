var angryButton = document.querySelector(".Send_Message")
var angryMessage = document.querySelector(".Angry_Message")
var messageArray = []

function send_message() {
  let message = prompt("What's your message?");
  
  var d = new Date();
  var timeStamp = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes();

  messageArray.unshift(message)
  
  var printThis = "Your messages: <br>"
  messageArray.forEach(function(message) {
    printThis += "<br> Message: " + message + " <br> Sent at: " + timeStamp + "<br>";
  })
  angryMessage.innerHTML = printThis
}

angryButton.onclick = function() {
  send_message();
}