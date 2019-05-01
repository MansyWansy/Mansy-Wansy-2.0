const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let bit = message.mentions.users.first()
    if(!bit) {
        return message.channel.send("For this command to work please mention another user.")
    }
      let biteembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} You bit ${bit.username} `)
      .setImage("https://cdn.discordapp.com/attachments/560157251071901708/567865613209305090/fWSIugu.gif")
    
      return message.channel.send(biteembed)
    }
    


module.exports.help = {
    name: "bite",
    description: "",
    usage: ""
}