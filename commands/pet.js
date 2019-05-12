const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
         
    
var subreddits = [


  `https://media1.tenor.com/images/01827ac93db8966ee97e63308ba79965/tenor.gif?itemid=9394441`,
  `https://thumbs.gfycat.com/SpectacularRepentantLamprey-size_restricted.gif`,
  `https://media1.tenor.com/images/73a746bada06751716d3173fbb9e6864/tenor.gif?itemid=5452079`,

  
  ]
  var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
  
  
          let petted = message.mentions.users.first()
          if(!petted) {
          return message.channel.send("For this command to work please mention another user.")
          }
          const embed = new Discord.RichEmbed()
              .setColor("CC00CC")
              .setDescription(`${message.author.username} pet ${petted.username}`)
              .setImage(sub);
          message.channel.send(embed)
         };
  



module.exports.help = {
    name: "pet",
    description: "",
    usage: ""
}
