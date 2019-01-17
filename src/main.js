var angryButton = document.querySelector(".Send_Message")
var angryMessage = document.querySelector(".Angry_Message")
var deleteButton = document.querySelector(".Delete")
var editButton = document.querySelector(".Edit")
var messageArray = new MessageBoard

editButton.onclick = function() {
  var messageNum = document.querySelector(".messageNum").value;
  var newContent = document.querySelector(".newContent").value;
  messageArray.editMessage(messageNum, newContent)
  angryMessage.innerHTML = messageArray.prepareForPrint();
}

angryButton.onclick = function() {
  let userInput = document.querySelector('.user_input').value; 
  messageArray.saveMessage(userInput)
  angryMessage.innerHTML = messageArray.prepareForPrint();
}

deleteButton.onclick = function() {
  messageArray.clearMessageList();
  messageId = 1
  angryMessage.innerHTML = messageArray.prepareForPrint();
}