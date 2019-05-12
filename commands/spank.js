const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
       
    
    var subreddits = [


        `https://uploads.disquscdn.com/images/53068471f883b11eac1e8eec6e74c42e629e0cbc44ebd784fce24e2a00432ca5.gif`,
        `https://tenor.com/5u54.gif`,
        `https://gifimage.net/wp-content/uploads/2018/10/anime-girl-spank-gif-4.gif`,
        
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        
        
                let spanked = message.mentions.users.first()
                if(!spanked) {
                    return message.channel.send("For this command to work please mention another user.")
                }
                const embed = new Discord.RichEmbed()
                    .setColor("CC00CC")
                    .setDescription(`${message.author.username} You spanked ${spanked.username} `)
                    .setImage(sub);
                message.channel.send(embed)
               };



module.exports.help = {
    name: "spank",
    description: "",
    usage: ""
}