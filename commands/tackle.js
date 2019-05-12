const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

        
    
  var subreddits = [


    `https://cdn.discordapp.com/attachments/566873682413355029/571519425891794963/image0.gif`,
    `https://tenor.com/uw4l.gif `,

    
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
    
            let tackled = message.mentions.users.first()
            if(!tackled) {
              return message.channel.send("For this command to work please mention another user.")
            }
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${author.username} Tackled ${tackled.username}`)
                .setImage(sub);
            message.channel.send(embed)
           };


module.exports.help = {
    name: "tackle",
    description: "",
    usage: ""
}