const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

        
    
var subreddits = [


`https://i.imgur.com/hrK0Zi0.jpg`,


]
var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];



        const embed = new Discord.RichEmbed()
            .setColor("CC00CC")
            .setDescription(`${message.author.username} is begging for a pat`)
            .setImage(sub);
        message.channel.send(embed)
       };



module.exports.help = {
    name: "pleasepat",
    description: "",
    usage: ""
}   