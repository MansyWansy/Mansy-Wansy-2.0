const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        
    
    var subreddits = [


        `https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865`,
        `https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif`,
        `https://acegif.com/wp-content/uploads/anime-kiss-m.gif`,
        `https://media1.giphy.com/media/bm2O3nXTcKJeU/giphy.gif`,
        `https://media.tenor.com/images/197df534507bd229ba790e8e1b5f63dc/tenor.gif`,
        `https://media1.giphy.com/media/ONq87vZz4626k/giphy.gif`,
        
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        
        
                let kissed = message.mentions.users.first()
                if(!kissed) {
                    return message.channel.send("For this command to work please mention another user.")
                }
                const embed = new Discord.RichEmbed()
                    .setColor("CC00CC")
                    .setDescription(`${message.author.username} You kissed ${kissed.username} `)
                    .setImage(sub);
                message.channel.send(embed)
               };
        
        
        
module.exports.help = {
    name: "kiss",
    description: "",
    usage: ""
}