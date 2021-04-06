const Discord = require('discord.js');


exports.run = (client, message, args) => {

  let pages = [
              ':battery: **Uptime** :battery:\nUptime hizmeti!\n\nBir linki uptime etmek mi istiyorsun? O zaman doğru yerdesin! `e!link` yazarak bütün uptime komutlarına ulaşabilirsin.\n\nİyi uptimeler!!',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setFooter(`Ebaynazec | Uptime`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {


      //Filter




    })
};



exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'uptime',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};