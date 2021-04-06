const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '<a:donen_kirmizi:798142492770828318> Eğlence Komutları <a:donen_kirmizi:798142492770828318>\n\n\n<:yesilok:797803697467817994> **e!espri**: Espri yapar.\n<:yesilok:797803697467817994> **e!rip:** Avatarına rip efekti ekler.\n<:yesilok:797803697467817994> **e!kralol**: Kral olursun.\n<:yesilok:797803697467817994> **e!düello @düelloyapılacakkisi**: Seçtiğin kişiyle düello yaparsın.\n<:yesilok:797803697467817994> **e!wasted @efektyapalackkisi**: Seçtiğin kişinin avatarına wasted efekti koyar.\n<:yesilok:797803697467817994> **e!partner @efektverilecekkisi**: Seçtiğiniz kişiye partner efekti verir.\n<:yesilok:797803697467817994> **e!yazı-tura**: Yazı-Tura atarsın.\n<:yesilok:797803697467817994> **e!doğrulukcesaret**: Doğruluk-Cesaretlik oynarsın.\n<:yesilok:797803697467817994> **e!tutuklandın @efektverilecekkisi**: Seçtiğin kişinin avaatına hapis efekti koyar.\n<:yesilok:797803697467817994> **e!afewlater @efektyapılcakkisi**: Seçtiğin kişinin avatarına AFewLater efekti koyar.\n<:yesilok:797803697467817994> **e!azeri @efektyapılcakkisi**: Seçtiğin kişinin avatarına Azerbaycan efekti koyar.\n<:yesilok:797803697467817994> **e!bulanık @efektlenecekkisi**: Seçtiğin kişinin avatarını bulanıklaştırır.\n<:yesilok:797803697467817994> **e!banner [yazılacakyazı]**: Bannere yazı yazarsın.\n<:yesilok:797803697467817994> **e!sigarayak**: Sigara yakarsın.\n<:yesilok:797803697467817994> **e!atla**: Efsane bir atlayış gösterir.\n<:yesilok:797803697467817994> **e!köpek**: Rastgele köpek fotoğrafı atar.\n<:yesilok:797803697467817994> **e!ara155**: Polis geliyor GIFi gönderir.\n<:yesilok:797803697467817994> **e!fbi**: FBI GIFi gönderir.\n<:yesilok:797803697467817994> **e!yazan-kazanır @yarısılacakkisi**: Seçtiğin kişiyle yazan-kazanır oynarsın.',
              '<:yesilok:797803697467817994> **e!zula-deste-aç**: Zula destesi açarsın.\n<:yesilok:797803697467817994> **e!kasaaç**: CS-GO kasası açarsın.\n<:yesilok:797803697467817994> **e!aşkımı-ölç @kinleölcülüşeceksin**: Seçtiğin kişiyle aşkını ölçersin.\n<:yesilok:797803697467817994> **e!mesajdöndür [döndürülecekyazı]**: Yazdığın mesajı ter çevirir.\n<:yesilok:797803697467817994> **e!balıktut**: Balık tutarsın.\n<:yesilok:797803697467817994> **e!spoiler [yazılacakyazı]**: Yazdığın yazıyı spoiler olarak gösterir.\n<:yesilok:797803697467817994> **e!stresçarkı**: Stres çarkı çevirirsin.\n<:yesilok:797803697467817994> **e!boks-makinesi**: Boks makinesine bir vuruş yaparsın.\n<:yesilok:797803697467817994> **e!atasözü**: Atasözü söyler.\n<:yesilok:797803697467817994> **e!steam [oyunadı]**: Yazdığın oyun hakkında bilgi verir.\n<:yesilok:797803697467817994> **e!ateşle @ateşlenecekkisi**: Seçtiğin kişiye ateş edersin.\n<:yesilok:797803697467817994> **e!fakebotyazı @kişi [yazılacakyazı]**: Fake olarak bot yazıyı yazdırır.\n<:yesilok:797803697467817994> **e!zarat**: Zar atarsın.\n<:yesilok:797803697467817994> **e!çeviri [çevirilecekyazı]**: Yazdığın kelimeyi türkçeye çevirir.\n<:yesilok:797803697467817994> **e!kapak @kapakyapılacakkisi**: Seçtiğin kişiye kapak yaparsın.\n<:yesilok:797803697467817994> **e!soygunyap**: Soygun yaparsın.\n<:yesilok:797803697467817994> **e!pixel @efektiyapılacakkisi**: Seçtiğin kişinin avatının pixelini dürür.\n<:yesilok:797803697467817994> **e!beşiktaş**: Avatarına Beşiktaş efekti ekler.\n<:yesilok:797803697467817994> **e!winner**: Avatarına winner efekti ekler.\n<:yesilok:797803697467817994> **e!galatasaray**: Avatarına Galatasaray efekti ekler.\n<:yesilok:797803697467817994> **e!fenerbahçe**: Avatarına fenerbahçe efekti ekler.',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#ff00ff')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Eğlence | Sayfa: ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {


  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 10000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 10000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('#ff00ff')
        embed.setFooter(`Ebaynazec | Eğlence | Sayfa: ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('#ff00ff')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Ebaynazec | Eğlence | Sayfa: ${page} / ${pages.length}`)
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
name: 'eğlence',
description: 'Yardım Listesini Gösterir',
usage: 'eğlence'
};