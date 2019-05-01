const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    let fucked = message.mentions.users.first()
      if(!fucked) {
        return message.channel.send("For this command to work please mention another user.")
      }
      let fuckembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} Fucked ${fucked.username}`)
      .setImage(`https://cdn.discordapp.com/attachments/563834490615496716/571706310786285568/th.gif`)
    
      return message.channel.send(fuckembed)
    }
    



module.exports.help = {
    name: "fuck",
    description: "",
    usage: ""
}