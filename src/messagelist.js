var messageId = 1

class MessageBoard {;
  constructor(){;
    this.messagelist = [];
  }

  getMessageList() {
    return this.messagelist
  }

  saveMessage(userInput) {
    var message = new Message(userInput, new Date, messageId);
    this.messagelist.push(message);
    messageId += 1
  }

  clearMessageList() {
    this.messagelist = []
    messageId = 1
  }

  prepareForPrint() {
    var printThis = "Your messages: <br>"
    var messagesReversed = this.messagelist.slice().reverse()
    messagesReversed.forEach(function(message) {
      printThis += "<br> Message: " + message.content + " <br> Sent at: " + message.timeStamp() + "<br>" + "Message Number: " + message.id + "<br>";
    })
    return printThis  
  }

  editMessage(messageNum, newContent) {
    var toEdit = this.messagelist[(messageNum-1)]
    toEdit.content = newContent
  }
}