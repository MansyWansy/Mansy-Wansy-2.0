const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let vored = message.mentions.users.first()
    if(!user) {
        return message.channel.send("For this command to work please mention another user.")
      }
      let voredembed = new Discord.RichEmbed()
      .setDescription(`You Vored ${vored}, Yummy!`)
      .setImage("https://media.tenor.com/images/7568abafdf094079a894f1362f003fdb/tenor.gif")
    
      return message.channel.send(voredembed)
    }



module.exports.help = {
    name: "vore",
    description: "",
    usage: ""
}