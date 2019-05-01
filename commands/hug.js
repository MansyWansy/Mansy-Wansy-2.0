const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
let hugged2 = message.author;
let hugged = message.mentions.users.first()
  if(!hugged) {
      let hugembed2 = new Discord.RichEmbed()
      .setColor("CC00CC")
      .setDescription(`${hugged2.username} Hugs Them Self`)
      .setImage(`https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif`)
    return message.channel.send(hugembed2)
  }
  let hugembed = new Discord.RichEmbed()
  .setColor("CC00CC")
  .setDescription(`${hugged2.username} gave ${hugged.username} a hug!`)
  .setImage("https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif")

  return message.channel.send(hugembed)
}




module.exports.help = {
    name: "hug"
  }