var angryButton = document.querySelector(".Send_Message")
var angryMessage = document.querySelector(".Angry_Message")
var deleteButton = document.querySelector(".Delete")
var editButton = document.querySelector(".Edit")
var messageArray = []
var messageId = 1

function save_message() {
  let userInput = document.querySelector('.user_input').value; 
  let message = new Message(userInput, new Date, messageId);
  messageArray.unshift(message);
  messageId +=1
}

function print_messages() {
  var printThis = "Your messages: <br>"
  messageArray.forEach(function(message) {
    printThis += "<br> Message: " + message.content + " <br> Sent at: " + message.createdAt + "<br>" + "Message Number: " + message.id + "<br>";
  })
  angryMessage.innerHTML = printThis
}

function edit_message() {
  var messageNum = prompt("To select a message, enter its message number:");
  var newContent = prompt("What should the message now say?");
  toEdit = messageArray[messageNum-1]
  toEdit.content = newContent
  console.log(toEdit)
  print_messages();
}

editButton.onclick = function() {
  edit_message()
}

angryButton.onclick = function() {
  save_message();
  print_messages();
}

deleteButton.onclick = function() {
  messageArray = [];
  print_messages();
}

class Message {
  constructor(content, createdAt, id){
    this.content = content;
    this.createdAt = createdAt;
    this.id = id
  }

  // timeStamp(createdAt) {
  //   return this.createdAt.getDate()  + "-" + (this.createdAt.getMonth()+1) + "-" + this.createdAt.getFullYear() + " " +
  //   this.createdAt.getHours() + ":" + this.createdAt.getMinutes();
  // }

}