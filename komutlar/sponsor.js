const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '<:sponsor:804694730667589653> Sponsorluk <:sponsor:804694730667589653>\n\n\n**Bota Sponsor nasıl olunur?**\nSponsor olmayı mı düşünüyorsun? Bu çok iyi! Şimdi hangi yöntemle sponsor olmak istiyorsun?\n**1-)** Nitro vererek Sponsor olmak istiyorum.\n**2-)** Para vererek Sponsor olmak istiyorum.\n**3-)** VDS vererek sponsor olmak istiyorum.\n\nÜçünden birini seçip, <@565536682946985999> a seçtiğiniz seçeneği iletmeniz gerekecektir.\n\n**Bota Sponsor olmak bana ne kazandırır?**\n<:yesilok:797803697467817994> Reklamınız olur.(e!yardım sponsor kısmında olursunuz.)\n<:yesilok:797803697467817994> Sana özel bir komuda sahip olursun.\n<:yesilok:797803697467817994> EBAYNAZEC, 150+ sunucuda ve 750.000+ kullanıcıya **aktif olarak** hizmet vermekte. Her yardım istediğinde reklamınız gösterilecektir. Bu da size müşteri kazandıracaktır.',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Sponsorluk`)
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
name: 'sponsor',
description: 'Yardım Listesini Gösterir',
usage: 'sponsorluk'
};