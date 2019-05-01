const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("CC00CC")
    .setThumbnail(bicon)
    .setFooter("Made by Mansy Wansy#0047")
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField(`Number Of Servers Currently Occupying`, `${bot.guilds.size}`)
    .addField(`Number Of Members Currently Stalking`, `${bot.users.size}`)
  
  
    return message.channel.send(botembed);
  }



module.exports.help = {
    name: "botinfo",
    description: "",
    usage: ""
}