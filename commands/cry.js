const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    
  var subreddits = [


    `https://img.fireden.net/a/image/1446/59/1446592990152.gif`,
    `https://media.tenor.com/images/82c7523a9b203fc4e938d2d027540dea/tenor.gif`,
    `https://media.tenor.com/images/7cba9943d6449423bd9da78929bf6337/tenor.gif`,
    `https://media.tenor.com/images/e8e9485bd27fde7c43858ec0864fc571/tenor.gif`,
    `https://media.tenor.com/images/ea72a5815cd40647d21caac9479c67c1/tenor.gif`,
    `https://media.tenor.com/images/8516e63ed64f255bea993cf52a80194a/tenor.gif`,
    `https://media.tenor.com/images/d7286a667f4c7f5e3af2daf2ac3d9948/tenor.gif`,
    `https://media.tenor.com/images/c8f6d1972f6051cf40fec17da7b18a53/tenor.gif`,
    `https://media.tenor.com/images/7e623e17dd8c776aee5e0c3e0e9534c9/tenor.gif`,
    `https://img.fireden.net/a/image/1446/59/1446592990152.gif`
    


    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
    
    
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${message.author.username} is crying, maybe you should comfort them`)
                .setImage(sub);
            message.channel.send(embed)
           };


module.exports.help = {
    name: "cry",
    description: "",
    usage: ""
}