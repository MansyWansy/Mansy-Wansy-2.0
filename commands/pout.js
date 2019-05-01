const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
        let Pembed = new Discord.RichEmbed()
        .setDescription(`${message.author.username} is pouting`)
        .setImage("https://2.bp.blogspot.com/-u41XvsPss4M/V0KNPCFx4EI/AAAAAAAAdhw/edGXAefNFVsaHCv1Wo2fVloGxuytKRSzwCKgB/s1600/Omake+Gif+Anime+-+Tanaka-kun+wa+Itsumo+Kedaruge+-+Episode+7-+Rino+Blushing+Pout.gif")
      
        return message.channel.send(Pembed)
      }



module.exports.help = {
    name: "pout",
    description: "",
    usage: ""
}