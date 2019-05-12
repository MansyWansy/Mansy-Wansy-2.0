const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    
    var subreddits = [


        `https://66.media.tumblr.com/546bf013d8bcd04db1da5416e1723e08/tumblr_pc8fdmWPUK1xuvhj0o2_400.gif`,
        `https://media2.giphy.com/media/qpZ4jZN2cMkgg/source.gif`,
        `https://media.tenor.com/images/15f3beb2b31a9cba0b15f35e3c3eb5b8/tenor.gif`,
        `https://media3.giphy.com/media/Pl4LoOqZL8skE/source.gif`,
        `https://media.tenor.com/images/df37ea5a268795305cb5a25f85366208/tenor.gif`,
        `http://pa1.narvii.com/7047/6550b0f1c42f2e627dfa370cf6488323116c4df3r5-320-179_00.gif`,
        
        
        ]
      
        var subreddits2 = [
      
      
          `https://media.tenor.com/images/d65c6eaa8b0a6d7c782945f213fd4f60/tenor.gif`,
          `https://media.giphy.com/media/4iqn14Ns72tig/giphy.gif`,
          `https://media.giphy.com/media/ZNoP4o13sUxHO/giphy.gif`,
          `https://i.gifer.com/MDJ5.gif`,
          `http://i.imgur.com/tKsIDec.gif`,

      
        ]
      
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        var sub2 = subreddits2[Math.round(Math.random() * (subreddits2.length - 1))];
        
      
               let nommed = message.mentions.users.first()
               if(!nommed) {
                   let embed = new Discord.RichEmbed()        
                   .setImage(sub)
                   .setDescription(`${message.author.username} is eating something but what is it?`)
                   .setColor("CC00CC")
                 return message.channel.send(embed)
               }
                const embed2 = new Discord.RichEmbed()
                    .setColor("CC00CC")
                    .setDescription(`${message.author.username} nomed ${nommed.username}`)
                    .setImage(sub2);
                message.channel.send(embed2)
               };



module.exports.help = {
    name: "nom",
    description: "",
    usage: ""
}