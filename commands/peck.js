const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

        
    
  var subreddits = [


    `https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127`,
    `http://66.media.tumblr.com/3b8a73c70947679a6af56178762bdc1f/tumblr_mk8xzkenY71qzd219o1_500.gif`,
    `https://www.gifimage.net/wp-content/uploads/2018/10/anime-peck-gif-5.gif`,
    `https://media1.tenor.com/images/605aeeed61e38a52870c1dfdb6db9a87/tenor.gif?itemid=9440732`,
    `https://media.tenor.com/images/bc0a3c276fe81aa0e6d22659d6009855/tenor.gif`
    
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
    
            let pecked = message.mentions.users.first()
            if(!pecked) {
               return message.channel.send("For this command to work please mention another user.")
               }
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${message.author.username} You pecked ${pecked.username} `)
                .setImage(sub);
            message.channel.send(embed)
           };

           
module.exports.help = {
    name: "peck",
    description: "",
    usage: ""
}