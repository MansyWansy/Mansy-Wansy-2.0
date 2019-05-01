const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let nommed = message.mentions.users.first()
    if(nommed){
      let nomembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} is eating something but what is it?`)
      .setImage("https://66.media.tumblr.com/546bf013d8bcd04db1da5416e1723e08/tumblr_pc8fdmWPUK1xuvhj0o2_400.gif")
    
      return message.channel.send(nomembed)
      
    } else {
        let nomembed = new Discord.RichEmbed()
        .setDescription(`${message.author.username} is noming on ${nommed.username}`)
        .setImage("https://66.media.tumblr.com/546bf013d8bcd04db1da5416e1723e08/tumblr_pc8fdmWPUK1xuvhj0o2_400.gif")
      
        return message.channel.send(nomembed)
    }
    }



module.exports.help = {
    name: "nom",
    description: "",
    usage: ""
}