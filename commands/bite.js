const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    
    
    var subreddits = [

        `https://cdn.discordapp.com/attachments/560157251071901708/567865613209305090/fWSIugu.gif`,
        `https://media1.tenor.com/images/f308e2fe3f1b3a41754727f8629e5b56/tenor.gif?itemid=12390216`,
        `https://media1.tenor.com/images/d97e4bc853ed48bf83386664956d75ec/tenor.gif?itemid=10364764`,
        `https://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-4.gif`,
        `https://gifimage.net/wp-content/uploads/2017/09/anime-bite-gif-7.gif`,
        
        
        
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        
        
        
                let bit = message.mentions.users.first()
                if(!bit) {
                    return message.channel.send("For this command to work please mention another user.")
                }
                const embed = new Discord.RichEmbed()
                    .setColor("CC00CC")
                    .setDescription(`${message.author.username} You bit ${bit.username} `)
                    .setImage(sub);
                message.channel.send(embed)
               };
    


module.exports.help = {
    name: "bite",
    description: "",
    usage: ""
}