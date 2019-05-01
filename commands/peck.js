const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
let pecked = message.mentions.users.first()
if(!pecked) {
   return message.channel.send("For this command to work please mention another user.")
   }
let peckembed = new Discord.RichEmbed()
.setColor("CC00CC")
.setDescription(`${message.author.username} You pecked ${pecked.username} `)
.setImage("https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127")

  return message.channel.send(peckembed)
}



module.exports.help = {
    name: "peck",
    description: "",
    usage: ""
}