const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let danced = message.mentions.users.first()
    if(!danced) {
        let danceembed = new Discord.RichEmbed()
        .setDescription(`${message.author.username} Is Dancing, Look At Them Go!`)
        .setImage(`https://cdn.discordapp.com/attachments/550046114057814032/571022293300412436/dancee.gif`)
      return message.channel.send(danceembed)
    }
     let author = message.author;
     let danceembed = new Discord.RichEmbed()
     .setDescription(`${author.username} Is Dancing With ${danced.username}`)
     .setImage(`https://i.pinimg.com/originals/1a/4e/7e/1a4e7e3d9fb7e1d5e8ccc2d3787bc39d.gif`)
      return message.channel.send(danceembed)
    }



module.exports.help = {
    name: "dance",
    description: "",
    usage: ""
}