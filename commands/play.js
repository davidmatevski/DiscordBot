//main command to play songs
//use command followed by a song and the bot will search for and play the song from youtube

const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");

const { joinVoiceChannel } = require("@discordjs/voice");

module.exports = {
  name: "play",
  description: "Joins channel and plays video from YouTube",
  async execute(message, args) {
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a channel to execute this command."
      );

    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.channel.send(
        "You do not have permissions to use the Play command"
      );
    if (!permissions.has("SPEAK"))
      return message.channel.send(
        "You do not have permissions to use the Play command"
      );
    if (!args.length)
      return message.channel.send("You need to send a second argument!");

    const connection = await voiceChannel.join();

    const videoFinder = async (query) => {
      const videoResult = await ytSearch(query);

      return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
    };

    const video = await videoFinder(args.join(" "));

    if (video) {
      const stream = ytdl(video.url, { filter: "audioonly" });
      connection.play(stream, { seek: 0, volume: 1 }).on("finish", () => {
        voiceChannel.leave();
      });

      await message.reply(`:thumbsup: Now Playing ${video.title}!`);
    } else {
      message.channel.send("No results found!");
    }
  },
};
