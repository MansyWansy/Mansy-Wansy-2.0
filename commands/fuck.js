const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {


    
  var subreddits = [


    `https://cdn.discordapp.com/attachments/563834490615496716/571706310786285568/th.gif`,
    `https://images.sex.com/images/pinporn/2016/01/30/620/14893952.gif`,
    `https://images.sex.com/images/pinporn/2018/10/23/620/20122757.gif`,
   
    
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
    
           let fucked = message.mentions.users.first()
           if(!fucked) {
             return message.channel.send("For this command to work please mention another user.")
           }
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${message.author.username} Fucked ${fucked.username}`)
                .setImage(sub);
            message.channel.send(embed)
           };



module.exports.help = {
    name: "fuck",
    description: "",
    usage: ""
}
