function Message(content, createdAt, id) {
  this.content = content;
  this.createdAt = createdAt;
  this.id = id
}

Message.prototype.timeStamp = function() {
  return this.createdAt.getDate()  + "-" + (this.createdAt.getMonth()+1) + "-" + this.createdAt.getFullYear() + " " +
  this.createdAt.getHours() + ":" + this.createdAt.getMinutes();
}
