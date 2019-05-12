const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
       
    
  var subreddits = [
  
  
    `https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif`,
    `https://media.tenor.com/images/fec973cdb301f5179dca6eef16499ab0/tenor.gif`,
    `https://media.giphy.com/media/143v0Z4767T15e/giphy.gif`,
    `https://i.imgur.com/r9aU2xv.gif`,
    `https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif`,
    `http://33.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif`,
    `https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif`,
    `https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093`,
    `https://steamuserimages-a.akamaihd.net/ugc/952967077052994075/5C34A1E221D4954ADA54FC1261466DDFFF93D670/`,
    `http://i.imgur.com/tuH4gqZ.gif`,
    `http://66.media.tumblr.com/tumblr_m770yus1Rh1ro4cfco1_500.gif`
    
    
    ]
    var subreddits2 = [
  
  
  `https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif`,
  
  
    ]
  
  
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    var sub2 = subreddits2[Math.round(Math.random() * (subreddits2.length - 1))];
    
            let hugged2 = message.author;
            let hugged = message.mentions.users.first()
            if(!hugged) {
                let hugembed2 = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${hugged2.username} Hugs Them Self`)
                .setImage(sub2)
              return message.channel.send(hugembed2)
            }
            const embed = new Discord.RichEmbed()
                .setColor("CC00CC")
                .setDescription(`${hugged2.username} gave ${hugged.username} a hug!`)
                .setImage(sub);
            message.channel.send(embed)
           };


module.exports.help = {
    name: "hug"
  }