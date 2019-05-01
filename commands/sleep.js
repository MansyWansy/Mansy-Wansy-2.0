const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        let sleepembed = new Discord.RichEmbed()
        .setDescription(`${message.author.username} is going to sleep say goodnight~`)
        .setImage("https://66.media.tumblr.com/868b393c9add9e9e91de1fc05d0b6483/tumblr_pc8fc3ARiq1xuvhj0o1_400.gif")
      
        return message.channel.send(sleepembed)
      }



module.exports.help = {
    name: "sleep",
    description: "",
    usage: ""
}