const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '<:new:807906596260282419> **EBAYNAZEC Bot 0.3 Güncellemesi!** <:new:807906596260282419>\n\n Öncelikle merhaba! Botumuzun 0.3 güncellemesiyle nelerin geldiğini merak ediyorsunuzdur. İşte bu komut ile bunların hepsi anlatmaya çalışacağız.**İşte 0.3 güncellemesiyle gelen bazı özellikler:**\n<:yesilok:797803697467817994> Bütün komutlar yenilendi! (Kodları bazıları silindi, yenileri geldi!)\n<:yesilok:797803697467817994> Otorol Sistemi Eklendi!\n<:yesilok:797803697467817994> Sayaç Sistemi Eklendi!\n<:yesilok:797803697467817994> Kayıt Sİstemi Eklendi!\n<:yesilok:797803697467817994> Seviye Sistemi Eklendi!\n<:yesilok:797803697467817994> Sunucu kura daha fazla sunucular eklendi!\n<:yesilok:797803697467817994> 50+ yeni kod!\n<:yesilok:797803697467817994> 10+ Efekt kodu!\n<:yesilok:797803697467817994> Bazı buglar kaldırıldı!\n<:yesilok:797803697467817994> Bot Hızlandı!\n<:yesilok:797803697467817994> Gold Üyelik eklendi!\n<:yesilok:797803697467817994> Prefix değiştirme eklendi!(e!prefix-menüsü)\n<:yesilok:797803697467817994> Mute sistemi güncellendi!\n<:yesilok:797803697467817994> Ayarlamalı sa-as,reklam-koruma, küfür-engelleme\n<:yesilok:797803697467817994> :moneybag: Ekonomi eklendi!\n<:yesilok:797803697467817994> :battery: Uptime hizmeti eklendi!\n\nVe daha fazlası geldi!\nBaşka güncellemelere...',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | 0.3 güncellemesi`)
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
name: '03',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};