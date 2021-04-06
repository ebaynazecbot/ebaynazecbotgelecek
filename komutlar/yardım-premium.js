const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let pages = [
        '<a:elmas:814097615964209212> Premium <a:elmas:814097615964209212>\nMerhaba! Premium ile benim daha fazla özelliklerime ulaşabileceğinizi biliyormuydunuz? İşte sunucunuza premium alarak kazanabileceğiniz komutlar:\n\n<:yesilok:797803697467817994> **e!prefix-menüsü**: Botun prefixini değiştirirsiniz.\n<:yesilok:797803697467817994> **e!sunucu-kur**: 5 saniyede güzel sunucular kurarsınız.\n<:yesilok:797803697467817994> Destek sunucumuzda Premium Kullanıcı rolüne sahip olursunuz.\n[Bu özellikleri test etmek için tıklayınız!](https://discord.gg/YwkJEdee2J)\n\nPremium almak için ve her türlü soru için <@565536682946985999> ile iletişime geçin!',

        ];
let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#1874cd')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Premium Bilgi`)
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
name: 'premium',
description: 'Yardım Listesini Gösterir',
usage: 'duygular'
};
