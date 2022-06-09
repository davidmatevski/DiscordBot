//test command to see if bot is recieving and sending back messages
module.exports = {
  name: "ping",
  description: "ping command",
  execute(message, args) {
    message.channel.send("pong");
  },
};
