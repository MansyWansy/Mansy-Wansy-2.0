const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let kissed = message.mentions.users.first()
    if(!kissed) {
        return message.channel.send("For this command to work please mention another user.")
    }
    let kissembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} You kissed ${kissed.username} `)
      .setImage("https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865")
    
      return message.channel.send(kissembed)
    }


module.exports.help = {
    name: "kiss",
    description: "",
    usage: ""
}