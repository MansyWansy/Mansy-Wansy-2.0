const botconfig = require("./botconfig.json")
const Discord = require("discord.js");

const bot = new  Discord.Client({disableEveryone : true});

bot.on("ready", async() => {
   console.log(`${bot.user.username}Lets Go Already`)
    bot.user.setActivity("Becoming Succssesful");
 });

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type ===  "dm") return;

  let prefix= botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);





//action commands





let petted = message.mentions.users.first()
if(cmd === `${prefix}pet`){
  let petembed = new Discord.RichEmbed()
  .setDescription(`${message.author} pet ${petted}`)
  .setImage("https://media1.tenor.com/images/01827ac93db8966ee97e63308ba79965/tenor.gif?itemid=9394441")

  return message.channel.send(petembed)
}


let pecked = message.mentions.users.first()
if(cmd === `${prefix}peck`){
  let peckembed = new Discord.RichEmbed()
  .setDescription(`${message.author} You pecked ${pecked} `)
  .setImage("https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127")

  return message.channel.send(peckembed)
}


let kissed = message.mentions.users.first()
if(cmd === `${prefix}kiss`){
  let kissembed = new Discord.RichEmbed()
  .setDescription(`${message.author} You kissed ${kissed} `)
  .setImage("https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865")

  return message.channel.send(kissembed)
}


let user = message.author()
if(cmd === `${prefix}blush`){
  let blushembed = new Discord.RichEmbed()
  return message.channel.send(blushembed)
  .setDescription(`${user.username} Is Blushing`)
  .setImage(`https://cdn.awwni.me/rti0.gif`)
}


let spanked = message.mentions.users.first()
if(cmd === `${prefix}spank`){
  let spankembed = new Discord.RichEmbed()
  .setDescription(`${message.author} You spanked ${spanked} `)
  .setImage("https://uploads.disquscdn.com/images/53068471f883b11eac1e8eec6e74c42e629e0cbc44ebd784fce24e2a00432ca5.gif")

  return message.channel.send(spankembed)
}


let slapped = message.mentions.users.first()
if(cmd === `${prefix}slap`){
  let slapembed = new Discord.RichEmbed()
  .setDescription(`${message.author} You slapped ${slapped} `)
  .setImage("https://media1.tenor.com/images/b186eb008171023c0dd88373438f1808/tenor.gif?itemid=5057461")

  return message.channel.send(slapembed)
}

let bit = message.mentions.users.first()
if(cmd === `${prefix}bite`){
  let biteembed = new Discord.RichEmbed()
  .setDescription(`${message.author} You bit ${bit} `)
  .setImage("https://cdn.discordapp.com/attachments/560157251071901708/567865613209305090/fWSIugu.gif")

  return message.channel.send(biteembed)
}


let lewdbite = message.mentions.users.first()
if(cmd === `${prefix}lbite`){
  let lbiteembed = new Discord.RichEmbed()
  .setDescription(`${message.author} bites ${lewdbite} lewdly`)
  .setImage("https://img1.ak.crunchyroll.com/i/spire1/38f541ca5c7880b947ea0345e4603a0f1418360963_full.gif")

  return message.channel.send(lbiteembed)
}


let Handheld = message.mentions.users.first()
if(cmd === `${prefix}handhold`){
  let HHembed = new Discord.RichEmbed()
  .setDescription(`${message.author} holds hands with ${Handheld}`)
  .setImage("https://66.media.tumblr.com/2089f3da5e98836d8333c2c961591b8d/tumblr_oukurrIWDD1re8kj6o1_400.gif")

  return message.channel.send(HHembed)
}


if(cmd === `${prefix}hello`){
  let Helloembed = new Discord.RichEmbed()
  .setDescription("Hello i am Mansy Wansy 2.0")
  .setImage("https://media1.giphy.com/media/yyVph7ANKftIs/giphy.gif")

  return message.channel.send(Helloembed)
}


let cuddled = message.mentions.users.first()
if(cmd === `${prefix}cuddle`){
  let cuddleembed = new Discord.RichEmbed()
  .setDescription(`${message.author} Cuddles ${cuddled}`)
  .setImage("https://media1.tenor.com/images/6e6b4714e4078946d84b4602992cc363/tenor.gif?itemid=6154171")

return message.channel.send(cuddleembed)
}


if(cmd === `${prefix}pout`){
  let Pembed = new Discord.RichEmbed()
  .setDescription(`${message.author} is pouting`)
  .setImage("https://2.bp.blogspot.com/-u41XvsPss4M/V0KNPCFx4EI/AAAAAAAAdhw/edGXAefNFVsaHCv1Wo2fVloGxuytKRSzwCKgB/s1600/Omake+Gif+Anime+-+Tanaka-kun+wa+Itsumo+Kedaruge+-+Episode+7-+Rino+Blushing+Pout.gif")

  return message.channel.send(Pembed)
}


if(cmd === `${prefix}cry`){
  let cembed = new Discord.RichEmbed()
  .setDescription(`${message.author} is crying, maybe you should comfort them`)
  .setImage("https://img.fireden.net/a/image/1446/59/1446592990152.gif")

  return message.channel.send(cembed)
}


if(cmd === `${prefix}sleep`){
  let sleepembed = new Discord.RichEmbed()
  .setDescription(`${message.author} is going to sleep say goodnight~`)
  .setImage("https://66.media.tumblr.com/868b393c9add9e9e91de1fc05d0b6483/tumblr_pc8fc3ARiq1xuvhj0o1_400.gif")

  return message.channel.send(sleepembed)
}


let hugged2 = message.author;
let hugged = message.mentions.users.first()
if(cmd === `${prefix}hug`){
  if(!hugged) {
      let hugembed2 = new Discord.RichEmbed()
      .setDescription(`${hugged2.username} Hugs Them Self`)
      .setImage(`https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif`)
    return message.channel.send(hugembed2)
  }
  let hugembed = new Discord.RichEmbed()
  .setDescription(`${hugged2.username} gave ${hugged.username} a hug!`)
  .setImage("https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif")

  return message.channel.send(hugembed)
}


let nommed = message.mentions.users.first()
if(cmd === `${prefix}nom`){
  let nomembed = new Discord.RichEmbed()
  .setDescription(`${message.author} is eating something but what is it?`)
  .setImage("https://66.media.tumblr.com/546bf013d8bcd04db1da5416e1723e08/tumblr_pc8fdmWPUK1xuvhj0o2_400.gif")

  return message.channel.send(nomembed)
}


if(cmd === `${prefix}poke`){
  let pokeembed = new Discord.RichEmbed()
  .setDescription(`${message.author} seems to want your attention`)
  .setImage("https://media.tenor.com/images/c3b9e561131197a739664c6b1ebe5622/tenor.gif")

  return message.channel.send(pokeembed)
}


let licked = message.mentions.users.first()
if(cmd === `${prefix}lick`){
  if(!licked) return message.channel.send("you licked yourself");
  let lickembed = new Discord.RichEmbed()
  .setDescription(`${message.author} licked ${licked}`)
  .setImage("https://thumbs.gfycat.com/SomberUnderstatedAnophelesmosquito-size_restricted.gif")

  return message.channel.send(lickembed)
}


let tucked = message.mentions.users.first()
if(cmd === `${prefix}tuckin`){
  if(!tucked) return message.channel.send("you tucked yourself in");
  let tuckembed = new Discord.RichEmbed()
  .setDescription(`${message.author} tucked in ${tucked}`)
  .setImage("http://i.imgur.com/p00iDAj.gif")

  return message.channel.send(tuckembed)
}




let cookied = message.mentions.users.first()
if(cmd === `${prefix}cookie`){
  if(!cookied) return message.channel.send("you gave yourself a cookie");

return message.channel.send(`you gave ${cookied} a cookie!`)
}

let user2 = message.author;
let user = message.mentions.users.first()
if (cmd === `${prefix}avatar`){
if(!user) {
    let avatarembed = new Discord.RichEmbed()
    .setImage(user2.displayAvatarURL)
  return message.channel.send(avatarembed)
}
 let avatarembed = new Discord.RichEmbed()
 .setDescription(`${user.username}'s avatar is`)
 .setImage(user.displayAvatarURL)
  return message.channel.send(avatarembed)
}




                                    //help commands






if(cmd === `${prefix}help`){
 let helpembed = new Discord.RichEmbed()
 .setColor("CC00CC")
 .setAuthor(`Mansy Wansy 2.0`, message.guild.iconURL)
 .setTimestamp()
 .setFooter(`Mansy Wansy 2.0`, bot.user.displayAvatarURL)
 .setTitle(`My Commands Are`)
 .setDescription(`hug \n cookie \n nom \n dance \n poke \n sleep \n tuckin \n cry \n pout \n cuddle \n handhold \n bite \n lick \n lbite \n slap \n spank \n peck \n kiss \n blush \n pet \n avatar \n botinfo \n membercount \m memberinfo \n serverinfo \n \n please be patient this bot is still verry much a work in progress \n i would appreciate any feed back or comments you have about my bot \n thank you have a nice day \n ~Mansy Wansy`)


return message.channel.send(helpembed)
}



let meminfoed = message.mentions.users.first()
if(cmd === `${prefix}memberinfo`){
  if(!meminfoed){
    let user = message.author;
    let membericon2 = user.displayAvatarURL;
    let meminfoembed2 = new Discord.RichEmbed()
    .setTitle("Your Information")
    .setColor("CC00CC")
    .setThumbnail(membericon2)
    .setFooter("Made by Mansy Wansy#0047")
    .addField("Created On", user.createdAt)
    .addField("You Joined", message.member.joinedAt)

    return message.channel.send(meminfoembed2);
  }
  let membericon = meminfoed.displayAvatarURL;
  let meminfoembed = new Discord.RichEmbed()
  .setTitle("Your Information")
  .setColor("CC00CC")
  .setThumbnail(membericon)
  .setFooter("Made by Mansy Wansy#0047")
  .addField("Created On", meminfoed.createdAt)
  .addField("You Joined", message.member.joinedAt)

  return message.channel.send(meminfoembed);
}


if(cmd === `${prefix}botinfo`){

  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("Bot Information")
  .setColor("CC00CC")
  .setThumbnail(bicon)
  .setFooter("Made by Mansy Wansy#0047")
  .addField("Bot Name", bot.user.username)
  .addField("Created On", bot.user.createdAt)
  .addField(`Number Of Servers Currently Occupying`, `${bot.guilds.size}`)
  .addField(`Number Of Members Currently Stalking`, `${bot.users.size}`)


  return message.channel.send(botembed);
}


if(cmd === `${prefix}serverinfo`){

  let sicon = message.guild.iconURL;
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Information")
  .setColor("CC00CC")
  .setFooter("Made by Mansy Wansy#0047")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created On", message.guild.createdAt)
  .addField("You Joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed)
}


if(cmd === `prefix`){
  return message.channel.send("My prefix is mw!")

}


if(cmd === `${prefix}membercount`){
  return message.channel.send(`There are currently ${message.guild.memberCount} members in the server!`)
}








//custom Commands


let vored = message.mentions.users.first()
if(cmd === `${prefix}vore`){
  let voredembed = new Discord.RichEmbed()
  .setDescription(`You Vored ${vored}, Yummy!`)
  .setImage("https://media.tenor.com/images/7568abafdf094079a894f1362f003fdb/tenor.gif")

  return message.channel.send(voredembed)
}





if(cmd === `Nyaa`){
  return message.channel.send(`hey thats arryns word!`)
}



if(cmd === `ehh`){
  return message.channel.send("Hey Thats Cams Word")

}



if(cmd === `Ruby`){
  return message.channel.send("Pick A Word Ruby")

}





});

 bot.login(botconfig.token);
