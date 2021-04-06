const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              ':robot: Bot Komutları :robot:\n\n\n<:yesilok:797803697467817994> **e!istatistik**: Botun bilgilerini gösterir.\n<:yesilok:797803697467817994> **e!botkontrol**: Botun çevrimiçi olma durumunu kontrol edersin.\n<:yesilok:797803697467817994> **e!ping**: Botun pingini ölçer.\n<:yesilok:797803697467817994> **e!canlı-destek**: EBAYNAZEC Botun yetkililerinden canlı destek talep edersin.\n<:yesilok:797803697467817994> **e!davet**: Botun davet linklerini gönderir.\n<:yesilok:797803697467817994> **e!öneri**: Bot için öneride bulunursun.\n<:yesilok:797803697467817994> **e!şikayet [şikayet]**: Bot hakkında şikayettte bulunursun.\n<:yesilok:797803697467817994> **e!prefix-menüsü**: Botun prefix menüsünü açar.',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Bot Komutları`)
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
name: 'bot',
description: 'Yardım Listesini Gösterir',
usage: 'eğlence'
};

