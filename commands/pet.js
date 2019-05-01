const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let petted = message.mentions.users.first()
    if(!petted) {
    return message.channel.send("For this command to work please mention another user.")
    }
      let petembed = new Discord.RichEmbed()
      .setDescription(`${message.author.username} pet ${petted.username}`)
      .setImage("https://media1.tenor.com/images/01827ac93db8966ee97e63308ba79965/tenor.gif?itemid=9394441")
    
      return message.channel.send(petembed)
    }



module.exports.help = {
    name: "pet",
    description: "",
    usage: ""
}