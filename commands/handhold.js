const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let Handheld = message.mentions.users.first()
    if(!Handheld){
        return message.channel.send("For this command to work please mention another user.")
    }
      let HHembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} holds hands with ${Handheld.username}`)
      .setImage("https://66.media.tumblr.com/2089f3da5e98836d8333c2c961591b8d/tumblr_oukurrIWDD1re8kj6o1_400.gif")
    
      return message.channel.send(HHembed)
    }


module.exports.help = {
    name: "handhold",
    description: "",
    usage: ""
}