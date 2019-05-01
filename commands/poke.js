const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        let pokeembed = new Discord.RichEmbed()
        .setDescription(`${message.author.username} seems to want your attention`)
        .setImage("https://media.tenor.com/images/c3b9e561131197a739664c6b1ebe5622/tenor.gif")
      
        return message.channel.send(pokeembed)
      }



module.exports.help = {
    name: "poke",
    description: "",
    usage: ""
}