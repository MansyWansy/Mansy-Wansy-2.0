const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let lewdbite = message.mentions.users.first()
    if(!lewdbite){
        return message.channel.send("For this command to work please mention another user.")
    }
      let lbiteembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} bites ${lewdbite.username} lewdly`)
      .setImage("https://img1.ak.crunchyroll.com/i/spire1/38f541ca5c7880b947ea0345e4603a0f1418360963_full.gif")
    
      return message.channel.send(lbiteembed)
    }


module.exports.help = {
    name: "lbite",
    description: "",
    usage: ""
}