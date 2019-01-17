class MessageBoard {;
  constructor(){;
    this.messagelist = [];
  }

  add(message){
    return this.messagelist.push(message)
  }

  getMessageList() {
    return this.messagelist
  }

  clearMessageList() {
    this.messagelist = []
  }

  prepareForPrint() {
    var printThis = "Your messages: <br>"
    var messagesReversed = this.messagelist.slice().reverse()
    messagesReversed.forEach(function(message) {
      printThis += "<br> Message: " + message.content + " <br> Sent at: " + message.timeStamp() + "<br>" + "Message Number: " + message.id + "<br>";
    })
    return printThis  
  }
}