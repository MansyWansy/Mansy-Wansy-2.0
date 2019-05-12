const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
       
    
    var subreddits = [


        `https://66.media.tumblr.com/2089f3da5e98836d8333c2c961591b8d/tumblr_oukurrIWDD1re8kj6o1_400.gif`,
        `https://media1.tenor.com/images/47d18b56a850217a46b517da4325d132/tenor.gif?itemid=11496625`,
        `https://i.pinimg.com/originals/02/29/b3/0229b33cbea8b3c3f431ca309fb4e597.gif`,
        `https://i.kym-cdn.com/photos/images/newsfeed/000/932/364/770.gif`,
        `https://data.whicdn.com/images/107121260/original.gif`,
        `https://data.whicdn.com/images/264916106/original.gif`,
        
        
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        
        
                let Handheld = message.mentions.users.first()
                   if(!Handheld){
                       return message.channel.send("For this command to work please mention another user.")
                   }
                const embed = new Discord.RichEmbed()
                    .setColor("CC00CC")
                    .setDescription(`${message.author.username} holds hands with ${Handheld.username}`)
                    .setImage(sub);
                message.channel.send(embed)
               };
        
        
        
module.exports.help = {
    name: "handhold",
    description: "",
    usage: ""
}