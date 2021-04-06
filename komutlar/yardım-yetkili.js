const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '<a:moderasyon:797806486537371679> Yetkili <a:moderasyon:797806486537371679>\nSunucunuzu, bu komutlarla daha rahat yönetin! (bunları kullanmak için, benim `Yönetici` rolüne sahip olmalıyım)\n\n<a:ates:820502057000632371> **e!ototag**: Ototag sistemini gösterir.(<:new:807906596260282419>)\n<:yesilok:797803697467817994> **e!kick @kicklencekkisi [sebep]**: Kullanıcıyı sunucudan kicklersin/atarsın.\n<:yesilok:797803697467817994> **e!ban @banlanacakkisi [sebep]**: Kullanıcıyı sunucudan banlarsın/yasaklarsın.\n<:yesilok:797803697467817994> **e!banlist**: Sunucudan banlananları gösterir.\n<:yesilok:797803697467817994> **e!oylama [oylamaaçıklama]**: Oylama yaparsın.\n<:yesilok:797803697467817994> **e!çekiliş**: Çekiliş yaparsınız.\n<:yesilok:797803697467817994> **e!uyar @uyarılakkişi [sebep]**: Seçtiğiniz kişiye uyarı verirsin.\n<:yesilok:797803697467817994> **e!sil [0-1000]**: Belittiğin kadar mesaj silersin.\n<:yesilok:797803697467817994> **e!davet-takip #logkanalı**: Artık seçtiğin kanala davet mesajları gönderir.\n<:yesilok:797803697467817994> **e!hgbbkanalayarla #kanal**: Hoşgeldin/Göüşürüz kanalını ayarlarsın.\n<:yesilok:797803697467817994> **e!koruma-sistemi**: Sunucuya Bot Eklendiğinde Atılmasını Sağlayan Sistemi Başarıyla Aktifleştirirsiniz/Kapatırsınız.\n<:yesilok:797803697467817994> **e!reklam-engelleme aç/kapat**: Reklam engellemeyi açıp/kapatırsınız.\n\n**Sistemler & Menüler**\n<:yesilok:797803697467817994> **e!otorol-sistemi**: Otorol sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!sayaç-sistemi**: Sayaç sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!kayıt-sistemi**: Kayıt sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!seviye-sistemi**: Seviye Sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!sunucu-kur**: Sunucu kurarsın.\n<:yesilok:797803697467817994> **e!istek-kanal**: İstek kanal menüsünü açar.\n<:yesilok:797803697467817994> **e!mute-sistemi**: Mute sistemini gösterir.',
              '<a:moderasyon:797806486537371679> Yetkili-2 <a:moderasyon:797806486537371679>\nSunucunuzu, bu komutlarla daha rahat yönetin! (bunları kullanmak için, benim `Yönetici` rolüne sahip olmalıyım)\n\n<:yesilok:797803697467817994> **e!kilit [süre]**: Kanalı seçtiğin süre boyunca kilitlersin.\n<:yesilok:797803697467817994> **e!reklam-engelleme aç/kapat**: Reklam engellemeyi açıp/kapatırsınız.\n<:yesilok:797803697467817994> **e!rol-koruma aç/kapat**: Rol korumasını açar/kapatırsınız.\n\n<:yesilok:797803697467817994> **e!sabitle**: Komudu yazmadan önceki yazıyı sabitler.\n<:yesilok:797803697467817994> **e!sa-as aç/kapat**: Botun sa-as demesini açar/kapatır.\n<:yesilok:797803697467817994> **e!kilit [süre]**: Kanalı seçtiğin süre boyunca kilitlersin.\n<:yesilok:797803697467817994> **e!üyedurum**: Sunucudaki üyelerin durumunu gösterir.\n<:yesilok:797803697467817994> **e!reklam-taraması**: Sunucudaki bütün üyelerin durumlarında reklam var mı diye kontrol eder.\n<:yesilok:797803697467817994> **e!terfi @terfiettirilecekkisi @verilecekrol**: Seçtiğin kişiye, seçtiğin rolü verir.\n<:yesilok:797803697467817994> **e!ses-mute @mutelenecekkisi [süre] [sebep]**: Seçtiğin kişiyi seslide muteler.\n\n**Sistemler & Menüler**\n<:yesilok:797803697467817994> **e!otorol-sistemi**: Otorol sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!sayaç-sistemi**: Sayaç sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!kayıt-sistemi**: Kayıt sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!seviye-sistemi**: Seviye Sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!sunucu-kur**: Sunucu kurarsın.\n<:yesilok:797803697467817994> **e!istek-kanal**: İstek kanal menüsünü açar.\n<:yesilok:797803697467817994> **e!mute-sistemi**: Mute sistemini gösterir.',
              '<a:moderasyon:797806486537371679> Yetkili-3 <a:moderasyon:797806486537371679>\nSunucunuzu, bu komutlarla daha rahat yönetin! (bunları kullanmak için, benim `Yönetici` rolüne sahip olmalıyım)\n\n<:yesilok:797803697467817994> **e!küfür-engelle aç/kapat**: Küfür engellemeyi açarsınız/kapatırsınız.\n<:yesilok:797803697467817994> **e!güvenlik #kanal**: Güvenlik kanalını ayarlarsın.\n\n**Sistemler & Menüler**\n<:yesilok:797803697467817994> **e!otorol-sistemi**: Otorol sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!sayaç-sistemi**: Sayaç sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!kayıt-sistemi**: Kayıt sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!seviye-sistemi**: Seviye Sistemi menüsünü açar.\n<:yesilok:797803697467817994> **e!sunucu-kur**: Sunucu kurarsın.\n<:yesilok:797803697467817994> **e!istek-kanal**: İstek kanal menüsünü açar.\n<:yesilok:797803697467817994> **e!mute-sistemi**: Mute sistemini gösterir.',
              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#0000ff')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Yetkili | Sayfa: ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {


  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 900000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 900000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('#0000ff')
        embed.setFooter(`Ebaynazec | Yetkili | Sayfa: ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('#0000ff')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Ebaynazec | Yetkili | Sayfa: ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};



exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'yetkili',
description: 'Yardım Listesini Gösterir',
usage: 'moderasyon'
};
