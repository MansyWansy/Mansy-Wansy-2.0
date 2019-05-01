const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        let helpembed = new Discord.RichEmbed()
        .setColor("CC00CC")
        .setAuthor(`Mansy Wansy 2.0`, message.guild.iconURL)
        .setTimestamp()
        .setFooter(`Mansy Wansy 2.0`, bot.user.displayAvatarURL)
        .setTitle(`My Commands Are`)
        .setDescription(`hug \n cookie \n tackle \n nom \n dance \n poke \n sleep \n tuckin \n cry \n pout \n cuddle \n handhold \n bite \n lick \n lbite \n slap \n spank \n peck \n kiss \n blush \n pet \n avatar \n botinfo \n membercount \m memberinfo \n serverinfo \n \n please be patient this bot is still verry much a work in progress \n i would appreciate any feed back or comments you have about my bot \n thank you have a nice day \n ~Mansy Wansy`)
       
       
       return message.channel.send(helpembed)
       }


module.exports.help = {
    name: "help",
    description: "",
    usage: ""
}