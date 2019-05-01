const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
let tucked = message.mentions.users.first()
if(!tucked){
    return message.channel.send("For this command to work please mention another user.")
}
  if(!tucked) return message.channel.send("you tucked yourself in");
  let tuckembed = new Discord.RichEmbed()
  .setDescription(`${message.author.username} tucked in ${tucked.username}`)
  .setImage("http://i.imgur.com/p00iDAj.gif")

  return message.channel.send(tuckembed)
}


module.exports.help = {
    name: "tuckin",
    description: "",
    usage: ""
}