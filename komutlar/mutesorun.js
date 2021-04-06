const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let pages = [
        '**Seçtiğim kişiyi mutelemiyor bot?**\nBunun olmasınının nedeni çoktur. İlk olarak alttakileri yaptığınızdan emin olun!\n\n<:yesilok:797803697467817994> **Muteden yüksek mi?**: Yani bot, mutelenecek kişinin rolünden yüksek olmalı!\n<:yesilok:797803697467817994> **Rolleri yönet yetkisi var mı?**: Botun, `Rolleri Yönet` yetkisinin olması gereklidir.\n<:yesilok:797803697467817994> **Bot takılmış olabilir**: Biz, EBAYNAZEC botunu geliştirirken bazen reload atmamız gerekiyor. Reload atarken bot hiçbir şeye yanıt veremiyor. Bu nedenle mute atarken çalışmayabilir. 1-2 dakika geçtikten sonra tekrar komudu yazmayı deneyin.\n(:warning: Bunun olma olasılığı düşüktür.)\n\nEğer bunları yaptığınızı düşünüyorsanız [Destek Sunucumuza](https://discord.gg/C6Sk5Ecs2d) gelip sorunu bildirebilirsiniz.',

        ];
let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#008b00')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Mute Sorun Giderme`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {


      //Filter




    })
};



exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['mute-sorun'],
permLevel: 0
};

exports.help = {
name: 'mutesorun',
description: 'Yardım Listesini Gösterir',
usage: 'duygular'
};
