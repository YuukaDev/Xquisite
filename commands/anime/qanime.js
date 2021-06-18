const Discord = require('discord.js');

module.exports = {
    name: 'qanime',
    aliases: 'quoteanime',
    description: 'this command sends anime quote',
    category: 'anime',
    example: ['!qanime', /* Or */ '!quoteanime'],
    callback({message}) {
        let member = message.author;
        let quotes = require('../base/animequote.json');
        const objectKey = Object.keys(quotes)
        const randomQuote = Math.floor(Math.random() * objectKey.length)
        const quote = quotes[randomQuote]

        const embed = new Discord.MessageEmbed()
        .setAuthor(`📜 Quote for ${member.username}`)
        .setColor('#FF00A6')
        .setDescription(`${quote}`)
        message.channel.send(embed);
    }
}