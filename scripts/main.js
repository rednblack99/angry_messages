var AngryButton = document.querySelector(".Send_Message")
var AngryMessage = document.querySelector(".Angry_Message")

function send_message() {
  let message = prompt("What's your message?");
  localStorage.setItem("message", message);
  AngryMessage.textContent = "Your message: " + message;
}

// if(!localStorage.getItem('message')) {
//   sendMessage();
// } else {
//   let storedMessage = localStorage.getItem('message');
//   Angry_Message.textContent = "Hello, " + storedMessage;
// }

AngryButton.onclick = function() {
  send_message();
}