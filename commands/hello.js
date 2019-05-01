const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        let Helloembed = new Discord.RichEmbed()
        .setDescription("Hello i am Mansy Wansy 2.0")
        .setImage("https://media1.giphy.com/media/yyVph7ANKftIs/giphy.gif")
      
        return message.channel.send(Helloembed)
      }


module.exports.help = {
    name: "hello",
    description: "",
    usage: ""
}