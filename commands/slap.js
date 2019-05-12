const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        
    
    var subreddits = [


        `https://media1.tenor.com/images/b186eb008171023c0dd88373438f1808/tenor.gif?itemid=5057461`,
        `https://media1.tenor.com/images/4eed54377433c396ce2d9ad9ee5d22ef/tenor.gif?itemid=11234788`,
        `https://media.giphy.com/media/jLeyZWgtwgr2U/giphy.gif`,
        `https://media.giphy.com/media/oL7evncYvZ9II/giphy.gif`,
        `https://data.whicdn.com/images/236764642/original.gif`,
        `https://i.pinimg.com/originals/b6/e3/9e/b6e39e693be3968d212b0fe5754f85db.gif`,
    
        
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        
        
                let slapped = message.mentions.users.first()
                if(!slapped) {
                    return message.channel.send("For this command to work please mention another user.")
                }
                const embed = new Discord.RichEmbed()
                    .setColor("CC00CC")
                    .setDescription(`${message.author.username} You slapped ${slapped.username} `)
                    .setImage(sub);
                message.channel.send(embed)
               };
        


module.exports.help = {
    name: "slap",
    description: "",
    usage: ""
}