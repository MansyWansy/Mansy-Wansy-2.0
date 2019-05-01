const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let slapped = message.mentions.users.first()
    if(!slapped) {
        return message.channel.send("For this command to work please mention another user.")
     }
  let slapembed = new Discord.RichEmbed()
  .setDescription(`${message.author.username} You slapped ${slapped.username} `)
  .setImage("https://media1.tenor.com/images/b186eb008171023c0dd88373438f1808/tenor.gif?itemid=5057461")

  return message.channel.send(slapembed)
}


module.exports.help = {
    name: "slap",
    description: "",
    usage: ""
}