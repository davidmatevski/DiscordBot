//leave command

module.exports = {
  name: "leave",
  description: "bot leave the channel",
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to stop the music!"
      );
    await voiceChannel.leave();
    await message.channel.send("Bye babe :kissing_heart:");
  },
};
