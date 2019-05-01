const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let tackled = message.mentions.users.first()
      if(!user) {
        return message.channel.send("For this command to work please mention another user.")
      }
        let author = message.author;
        let tackleembed = new Discord.RichEmbed()
        .setDescription(`${author.username} Tackled ${tackled.username}`)
        .setImage(`https://cdn.discordapp.com/attachments/566873682413355029/571519425891794963/image0.gif`)
    
        return message.channel.send(tackleembed)
    
    }


module.exports.help = {
    name: "tackle",
    description: "",
    usage: ""
}