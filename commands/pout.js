const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        
    
  var subreddits = [


    `https://2.bp.blogspot.com/-u41XvsPss4M/V0KNPCFx4EI/AAAAAAAAdhw/edGXAefNFVsaHCv1Wo2fVloGxuytKRSzwCKgB/s1600/Omake+Gif+Anime+-+Tanaka-kun+wa+Itsumo+Kedaruge+-+Episode+7-+Rino+Blushing+Pout.gif`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvkdjO7MdS7aAX_pfUlMgNkxBNeoLlTxNhemCjo6eCPHV272i`,
    `http://i.imgur.com/V5p3iYb.gif`,
    `https://media.tenor.com/images/594f58accf983316d2b9983c5993c698/tenor.gif  `,
    `https://media.giphy.com/media/7BOWzjYhMPJLy/giphy.gif`
    
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
    
    
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${message.author.username} is pouting`)
                .setImage(sub);
            message.channel.send(embed)
           };



module.exports.help = {
    name: "pout",
    description: "",
    usage: ""
}