const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let blushembed = new Discord.RichEmbed()
    .setDescription(`${message.author.username} Is Blushing`)
    .setImage(`https://cdn.awwni.me/rti0.gif`)
  
    return message.channel.send(blushembed)
  }


module.exports.help = {
    name: "blush",
    description: "",
    usage: ""
}