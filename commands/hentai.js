    
const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {


    var subreddits = [


       'https://images.sex.com/images/pinporn/2019/02/14/620/20687928.gif',
       'https://images.sex.com/images/pinporn/2019/02/24/300/20740023.gif',
       'https://images.sex.com/images/pinporn/2016/06/13/300/15913413.gif',
       'https://images.sex.com/images/pinporn/2019/04/25/620/21046205.gif',
       'https://images.sex.com/images/pinporn/2019/01/28/620/20605188.gif',
       'https://images.sex.com/images/pinporn/2016/08/12/620/16353120.gif',
       'https://cdn.discordapp.com/attachments/568056226093596682/573109825760657408/lolololokkoikjkiuhnj.gif',
       'https://cdn.discordapp.com/attachments/563839273900572692/573004907494375454/image0.jpg',
       'https://cdn.discordapp.com/attachments/563839273900572692/573004842390519808/image0.jpg',
       'https://cdn.discordapp.com/attachments/563839273900572692/573004825097404416/image0.jpg',
       'https://images.sex.com/images/pinporn/2017/04/12/620/17618743.gif',
       'https://images.sex.com/images/pinporn/2018/10/23/620/20122757.gif',
       'https://images.sex.com/images/pinporn/2018/03/11/620/19228958.gif',
       'https://images.sex.com/images/pinporn/2017/05/09/300/17742571.gif',
       'https://images.sex.com/images/pinporn/2015/11/04/300/14212684.gif',
    
            
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