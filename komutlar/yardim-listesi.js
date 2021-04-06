const Discord = require('discord.js');


exports.run = (client, message, args) => {

  let pages = [
              '<a:donenkitap:797810791238860830> **EBAYNAZEC BOT - Yardım** <a:donenkitap:797810791238860830>\n\n<:new:807906596260282419> | **0.3 Güncellemesi**\n0.3 Güncellemesi hakkında daha fazla bilgi için `e!03`\n\n<:info:803186886562152448> | **Kullanıcı Komutları**\nKullanıcı komutları için `e!kullanıcı`\n\n<a:donen_kirmizi:798142492770828318> | **Eğlence**\nEğlence komutları için `e!eğlence`\n\n<a:moderasyon:797806486537371679> | **Yetkili**\nYetkili komutlar için `e!yetkili`\n\n<a:pembekalp:802935575064608788> | **Duygular**\nDuygular komutları için `e!duygular`\n\n:moneybag: | **Ekonomi**\nEkonomi komutları için `e!ekonomi`\n\n:robot: | **Bot Komutları**\nBot komutları için `e!bot`\n\n:battery: | **Uptime**\nUptime komutları için `e!uptime`\n\n<a:elmas:814097615964209212> | **Premium**\nPremium komutlar hakkında bilgi için `e!premium`\n\n<:owner:816278125913833512> | **Bot yetkilileri**\nBot yetkilileri için `e!yetkililer`\n\n<a:hype:797806439066239036> | Linkler\n[Davet Linkim](https://discord.com/oauth2/authorize?client_id=827896168632549398&scope=bot&permissions=8) \n[Destek Sunucum](https://discord.gg/YwkJEdee2J)\n[Ebaynazec Website](https://ebaynazec.ml/)',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setFooter(`Ebaynazec | Yardım Menüsü`)
    .setDescription(pages[page-1])
    .setImage(`https://cdn.discordapp.com/attachments/812761539940450314/816287642265190430/standard.gif`)
  message.channel.send(embed).then(msg => {


      //Filter




    })
};



exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};