const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let user2 = message.author;
    let user = message.mentions.users.first()
    if(!user) {
        let avatarembed = new Discord.RichEmbed()
        .setImage(user2.displayAvatarURL)
      return message.channel.send(avatarembed)
    }
     let avatarembed = new Discord.RichEmbed()
     .setDescription(`${user.username}'s avatar is`)
     .setImage(user.displayAvatarURL)
      return message.channel.send(avatarembed)
    }


module.exports.help = {
    name: "avatar",
    description: "",
    usage: ""
}