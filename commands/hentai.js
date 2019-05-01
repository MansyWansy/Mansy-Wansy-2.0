    
const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {


    var subreddits = [


       'https://images.sex.com/images/pinporn/2019/02/14/620/20687928.gif',
       'https://images.sex.com/images/pinporn/2019/02/24/300/20740023.gif',
       'https://images.sex.com/images/pinporn/2016/06/13/300/15913413.gif',
    
    
    
    
            
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
        
       
            
                const embed = new Discord.RichEmbed()
                    .setColor("CC00CC")
                    .setImage(sub);
                message.channel.send({
                    embed
                });

}
module.exports.help = {
    name: "hentai",
    description: "Sends one of many selected hentai gifs",
    usage: ""
}