const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '<:owner:816278125913833512> Bot yetkililer <:owner:816278125913833512>\n\n\n**Kurucu / Bot Sahibi** <:yesilok:797803697467817994> <@565536682946985999>\n**Bot Geliştiricisi** <:yesilok:797803697467817994> <@565536682946985999>\n**Canlı Destek** <:yesilok:797803697467817994> <@565536682946985999>\n**Bot Tester** <:yesilok:797803697467817994> <@565536682946985999>\n',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Yetkili Kadromuz`)
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
name: 'yetkililer',
description: 'Yardım Listesini Gösterir',
usage: 'yetkililer'
};
