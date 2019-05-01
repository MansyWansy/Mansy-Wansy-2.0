const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let licked = message.mentions.users.first()
      if(!licked) {
        return message.channel.send("For this command to work please mention another user.")
    }
      let lickembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} licked ${licked.username}`)
      .setImage("https://thumbs.gfycat.com/SomberUnderstatedAnophelesmosquito-size_restricted.gif")
    
      return message.channel.send(lickembed)
    }



module.exports.help = {
    name: "lick",
    description: "",
    usage: ""
}