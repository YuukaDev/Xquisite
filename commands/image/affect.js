const Discord = require("discord.js");
const { Canvas } = require("canvacord");

module.exports = {
  name: "affect",
  description: "This command sends inverted color user avatar",
  category: "image",
  example: ["!affect" || "!affect @member"],
  callback: async ({ message }) => {
    try {
      let member = message.mentions.users.first() || message.author;
      let avatar = member.displayAvatarURL({
        dynamic: false,
        format: "png",
        size: 1024,
      });

      let image = await Canvas.affect(avatar);
      let attachment = new Discord.MessageAttachment(image, "image.gif");

      return message.reply(attachment);
    } catch (err) {
      return message.reply(`There was an error ${err}`);
    }
  },
};
