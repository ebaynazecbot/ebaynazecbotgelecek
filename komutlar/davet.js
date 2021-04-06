const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              ':link: | **İşte davet bilgilerim:**\n**[Davet Linkim](https://discord.com/oauth2/authorize?client_id=827896168632549398&scope=bot&permissions=8)**\n[Destek Sunucum](https://discord.gg/YwkJEdee2J)\n\n<:sponsor:804694730667589653> | **Sponsorlarımızın Linki:**\nSponsorumuz yok! Olmak için `e!sponsorluk`',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#8b008b')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Davet`)
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
name: 'davet',
description: 'Yardım Listesini Gösterir',
usage: 'eğlence'
};

