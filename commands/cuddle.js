const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let cuddled = message.mentions.users.first()
    if(!cuddled) {
        return message.channel.send("For this command to work please mention another user.")
    }
      let cuddleembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} Cuddles ${cuddled.username}`)
      .setImage("https://media1.tenor.com/images/6e6b4714e4078946d84b4602992cc363/tenor.gif?itemid=6154171")
    
    return message.channel.send(cuddleembed)
    }


module.exports.help = {
    name: "cuddle",
    description: "",
    usage: ""
}