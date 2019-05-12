const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    
    var subreddits = [


        `https://media1.tenor.com/images/6e6b4714e4078946d84b4602992cc363/tenor.gif?itemid=6154171`,
        `https://media.tenor.com/images/3fa3d515afaab7ebaddfe76927ef55b9/tenor.gif`,
        `https://media.tenor.com/images/21c0c48fe94e9f0f0ebe0e1328638cc3/tenor.gif`,
        `https://media1.tenor.com/images/c5b638dac95e6da9b27a888ad59052a2/tenor.gif?itemid=13284054`
       
        
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        
        
            let cuddled = message.mentions.users.first()
            if(!cuddled) {
                return message.channel.send("For this command to work please mention another user.")
            }
                const embed = new Discord.RichEmbed()
                    .setColor("CC00CC")
                    .setDescription(`${message.author.username} Cuddles ${cuddled.username}`)
                    .setImage(sub);
                message.channel.send(embed)
               };


module.exports.help = {
    name: "cuddle",
    description: "",
    usage: ""
}