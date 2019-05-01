const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        return message.channel.send(`There are currently ${message.guild.memberCount} members in the server!`)
      }
    

module.exports.help = {
    name: "membercount",
    description: "",
    usage: ""
}