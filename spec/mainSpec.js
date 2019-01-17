
describe("Message", function() {
  var message;

  beforeEach(function() {
    message = new Message("Hello world", "01-01-01, 00:00", 1);
  })

  it("should have message class", function() {
    expect(message instanceof Message).toBe(true);
  })

  it("should have message content", function() {
    expect(message.content).toEqual("Hello world");
  })

})