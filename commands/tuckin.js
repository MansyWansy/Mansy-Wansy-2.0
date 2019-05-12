const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {




    
  var subreddits = [


    ``,
    ``,
    ``,
    ``,
    ``,
    ``,
    
    
    ]
  
    var subreddits2 = [
  
  
      `http://i.imgur.com/p00iDAj.gif`,
      `https://thumbs.gfycat.com/MammothTinyBedlingtonterrier-size_restricted.gif`,
      `https://thumbs.gfycat.com/ForcefulGloriousGelding-size_restricted.gif`
   
  
    ]
  
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    var sub2 = subreddits2[Math.round(Math.random() * (subreddits2.length - 1))];
  
  
           let tucked = message.mentions.users.first()
           if(!tucked) {
               let embed2 = new Discord.RichEmbed()        
               .setImage(sub)
               .setDescription("you tucked yourself in")
               .setColor("CC00CC")
             return message.channel.send(embed2)
           }
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${message.author.username} tucked in ${tucked.username}`)
                .setImage(sub2);
            message.channel.send(embed)
           };

           
module.exports.help = {
    name: "tuckin",
    description: "",
    usage: ""
}