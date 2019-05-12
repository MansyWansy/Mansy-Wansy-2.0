const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {


  var subreddits = [


    `https://cdn.awwni.me/rti0.gif`,
    `https://media.tenor.com/images/d0abd8b02ad8122a1228ee96f0062f11/tenor.gif`,
    `https://media.tenor.com/images/62eaf1d2b70f364b77e6dbaf1421c0cc/tenor.gif`,
    `https://media.tenor.com/images/0e90fd1edbc7e8cb10d94ff8ead1590c/tenor.gif`,
    `https://media.tenor.com/images/7d72e5623677d60496ddda5958aab95d/tenor.gif`,
    `https://media.tenor.com/images/a426e322fc671776f40b148b7aed757a/tenor.gif`,
   
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
    
    
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${message.author.username} Is Blushing`)
                .setImage(sub);
            message.channel.send(embed)
           };


module.exports.help = {
    name: "blush",
    description: "",
    usage: ""
}    
