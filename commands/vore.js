const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {

    
    
var subreddits = [

    `https://media.tenor.com/images/7568abafdf094079a894f1362f003fdb/tenor.gif`,
    `https://media1.tenor.com/images/5e489512116170fa06d01cc9614e8f6b/tenor.gif?itemid=11413495`,
    `https://media.tenor.com/images/14225e1f437c39d33f3aadfa61c494c0/tenor.gif`,
    `https://thumbs.gfycat.com/UnfoldedRelievedAmericanpainthorse-max-1mb.gif`,
    `https://archive-media-1.nyafuu.org/vp/image/1391/82/1391822024588.gif`,
    `https://memestatic.fjcdn.com/gifs/Tart+ragged+starling+blood+c_160d25_6881915.gif`,
    `http://i.imgur.com/2wzQsW9.gif`,
 


     ]
     var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
 
     
    
             let vored = message.mentions.users.first()
             if(!vored) {
             return message.channel.send("For this command to work please mention another user.")
             }
             const embed = new Discord.RichEmbed()
             .setDescription(`You Vored ${vored}, Yummy!`)
                 .setColor("CC00CC")
                 .setImage(sub);
             message.channel.send(embed)
            };
             



module.exports.help = {
    name: "vore",
    description: "",
    usage: ""
}