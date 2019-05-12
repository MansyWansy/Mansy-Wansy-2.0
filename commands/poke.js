const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        
    
  var subreddits = [


    `https://media.tenor.com/images/c3b9e561131197a739664c6b1ebe5622/tenor.gif`,
    `https://media.giphy.com/media/aZSMD7CpgU4Za/giphy.gif`,
    `https://66.media.tumblr.com/913f6c8b397a28cce5d739d9e5440f13/tumblr_on0ks5LR3P1ridyfoo1_400.gif`
    
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${message.author.username} seems to want your attention`)
                .setImage(sub);
            message.channel.send(embed)
           };
    



module.exports.help = {
    name: "poke",
    description: "",
    usage: ""
}