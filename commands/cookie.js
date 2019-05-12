const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let cookied = message.mentions.users.first()
      if(!cookied) {
         return message.channel.send("you gave yourself a cookie");
    }
    return message.channel.send(`you gave ${cookied.username} a cookie!`)
    }



module.exports.help = {
    name: "cookie",
    description: "",
    usage: ""
}