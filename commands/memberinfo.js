const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let meminfoed = message.mentions.users.first()
      if(!meminfoed){
        let user = message.author;
        let membericon2 = user.displayAvatarURL;
        let meminfoembed2 = new Discord.RichEmbed()
        .setTitle("Your Information")
        .setColor("CC00CC")
        .setThumbnail(membericon2)
        .setFooter("Made by Mansy Wansy#0047")
        .addField("Created On", user.createdAt)
        .addField("You Joined", message.member.joinedAt)
    
        return message.channel.send(meminfoembed2);
      }
      let membericon = meminfoed.displayAvatarURL;
      let meminfoembed = new Discord.RichEmbed()
      .setTitle("Your Information")
      .setColor("CC00CC")
      .setThumbnail(membericon)
      .setFooter("Made by Mansy Wansy#0047")
      .addField("Created On", meminfoed.createdAt)
      .addField("You Joined", message.member.joinedAt)
    
      return message.channel.send(meminfoembed);
    }



module.exports.help = {
    name: "memberinfo",
    description: "",
    usage: ""
}