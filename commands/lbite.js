const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
           
    
var subreddits = [


    `https://img1.ak.crunchyroll.com/i/spire1/38f541ca5c7880b947ea0345e4603a0f1418360963_full.gif`,
    `https://media.giphy.com/media/3pwJhGARx6Hp6/giphy.gif`,
    `http://66.media.tumblr.com/tumblr_lp22ysdlrQ1qbvovho1_500.gif`
    
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
    
            let lewdbite = message.mentions.users.first()
            if(!lewdbite){
                return message.channel.send("For this command to work please mention another user.")
            }
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${message.author.username} bites ${lewdbite.username} lewdly`)
                .setImage(sub);
            message.channel.send(embed)
           };



module.exports.help = {
    name: "lbite",
    description: "",
    usage: ""
}