var angryButton = document.querySelector(".Send_Message")
var angryMessage = document.querySelector(".Angry_Message")
var messageArray = []

function send_message() {
  let userInput = document.querySelector('.user_input').value; 
  let message = new Message(userInput, new Date)

  messageArray.unshift(message)
  
  var printThis = "Your messages: <br>"
  messageArray.forEach(function(message) {
    printThis += "<br> Message: " + message.content + " <br> Sent at: " + message.createdAt + "<br>";
  })
  angryMessage.innerHTML = printThis
}

angryButton.onclick = function() {
  send_message();
}

class Message {
  constructor(content, createdAt){
    this.content = content;
    this.createdAt = createdAt;
  }

  // timeStamp(createdAt) {
  //   return this.createdAt.getDate()  + "-" + (this.createdAt.getMonth()+1) + "-" + this.createdAt.getFullYear() + " " +
  //   this.createdAt.getHours() + ":" + this.createdAt.getMinutes();
  // }

}