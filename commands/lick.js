const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        
    
  var subreddits = [


    `https://thumbs.gfycat.com/SomberUnderstatedAnophelesmosquito-size_restricted.gif`,
    `https://media1.tenor.com/images/ec2ca0bf12d7b1a30fea702b59e5a7fa/tenor.gif?itemid=13417195`,
    `https://media1.tenor.com/images/f46762ad38fbfed9e4e46bf7b89497c2/tenor.gif?itemid=12141724`,
    `https://media1.tenor.com/images/c4f68fbbec3c96193386e5fcc5429b89/tenor.gif?itemid=13451325`,
    `https://thumbs.gfycat.com/CrazyFlakyConure-size_restricted.gif`,
    `https://i.kym-cdn.com/photos/images/newsfeed/001/334/768/fbc.gif`,
    
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    
    
            let licked = message.mentions.users.first()
            if(!licked) {
              return message.channel.send("For this command to work please mention another user.")
            }
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${message.author.username} licked ${licked.username}`)
                .setImage(sub);
            message.channel.send(embed)
           };
    
module.exports.help = {
    name: "lick",
    description: "",
    usage: ""
}