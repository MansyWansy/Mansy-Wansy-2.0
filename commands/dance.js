const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
   
    
var subreddits = [


  `https://i.pinimg.com/originals/1a/4e/7e/1a4e7e3d9fb7e1d5e8ccc2d3787bc39d.gif`,
  `https://data.whicdn.com/images/305687591/original.gif`,
  `https://data.whicdn.com/images/186184785/original.gif`,
  `https://i.pinimg.com/originals/00/63/71/0063719c03ad81912a165ade89967d6c.gif`,
  `https://media.giphy.com/media/JesPVDfS7yJH2/giphy.gif`,

  
  
  ]

  var subreddits2 = [


    `https://cdn.discordapp.com/attachments/550046114057814032/571022293300412436/dancee.gif`,
    `https://media.giphy.com/media/11lxCeKo6cHkJy/giphy.gif`,
    `https://media.tenor.com/images/07b90f4034ca5572a33bd25a368a8bd7/tenor.gif`,
    `http://i.imgur.com/zmUyr5b.gif`,
    `https://66.media.tumblr.com/2f7473d810f7e91a5b3cea909a0d97c3/tumblr_nmpr7yYkZ61updw00o10_500.gif`,
    `https://media.tenor.com/images/dbe7f4dccee3bd20495947721f6bd2e9/tenor.gif`,
    `https://media.tenor.com/images/c1f9808431a13e0d6240b4a853c8474f/tenor.gif`,
    `https://media.tenor.com/images/46dc1bed8a150539ccd90e931cd8b29b/tenor.gif`,
    `https://media.tenor.com/images/b7645983f54cd2dc6464221928ae64e2/tenor.gif`,
 

  ]

  var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
  var sub2 = subreddits2[Math.round(Math.random() * (subreddits2.length - 1))];
  
         let author = message.author
         let danced = message.mentions.users.first()
         if(!danced) {
             let embed2 = new Discord.RichEmbed()
             .setDescription(`${message.author.username} Is Dancing, Look At Them Go!`)
             .setImage(sub2)
             .setColor("CC00CC")
           return message.channel.send(embed2)
         }
          const embed = new Discord.RichEmbed()
          .setDescription(`${author.username} Is Dancing With ${danced.username}`)
              .setColor("CC00CC")
              .setImage(sub);
          message.channel.send(embed)
         };



module.exports.help = {
    name: "dance",
    description: "",
    usage: ""
}