var angryButton = document.querySelector(".Send_Message")
var angryMessage = document.querySelector(".Angry_Message")
var deleteButton = document.querySelector(".Delete")
var editButton = document.querySelector(".Edit")
var messageArray = new MessageBoard
var messageId = 1

function save_message() {
  let userInput = document.querySelector('.user_input').value; 
  let message = new Message(userInput, new Date, messageId);
  messageArray.add(message);
  messageId +=1
}

function edit_message() {
  var messageNum = document.querySelector(".messageNum").value;
  var newContent = document.querySelector(".newContent").value;
  var toEdit = messageArray[(messageNum-1)]
  toEdit.content = newContent
  print_messages();
}

editButton.onclick = function() {
  
  edit_message()
}

angryButton.onclick = function() {
  save_message();
  angryMessage.innerHTML = messageArray.prepareForPrint();
}

deleteButton.onclick = function() {
  messageArray.clearMessageList();
  messageId = 1
  angryMessage.innerHTML = messageArray.prepareForPrint();
}
 
// document.createElement('p')
// append (child?)