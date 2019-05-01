const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let spanked = message.mentions.users.first()
    if(!spanked) {
        return message.channel.send("For this command to work please mention another user.")
       }
      let spankembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} You spanked ${spanked.username} `)
      .setImage("https://uploads.disquscdn.com/images/53068471f883b11eac1e8eec6e74c42e629e0cbc44ebd784fce24e2a00432ca5.gif")
    
      return message.channel.send(spankembed)
    }



module.exports.help = {
    name: "spank",
    description: "",
    usage: ""
}