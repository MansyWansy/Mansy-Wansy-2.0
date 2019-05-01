const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        let cembed = new Discord.RichEmbed()
        .setDescription(`${message.author.username} is crying, maybe you should comfort them`)
        .setImage("https://img.fireden.net/a/image/1446/59/1446592990152.gif")
      
        return message.channel.send(cembed)
      }


module.exports.help = {
    name: "cry",
    description: "",
    usage: ""
}