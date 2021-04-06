const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '<:info:803186886562152448> Kullanıcı Komutları <:info:803186886562152448>\n\n\n<:yesilok:797803697467817994> **e!havadurumu**: Hava durumunu gösterir.\n<:yesilok:797803697467817994> **e!rastgeleşifre [0-30]**: Seçtiğiniz miktarda şifre oluşturur.\n<:yesilok:797803697467817994> **e!ilginçbilgi**: İlginç bir bilgi verir.\n<:yesilok:797803697467817994> **e!tekerleme**: Sana tekerleme söyler.\n<:yesilok:797803697467817994> **e!davetoluştur**: Sunucunun davet linkini gönderir.\n<:yesilok:797803697467817994> **e!davetsıralaması**: Sunucunun davet sıralamasını gösterir.\n<:yesilok:797803697467817994> **e!emojiyükle [emojilink]**: Yolladığın linkin emojisini, sunucuna ekler.\n<:yesilok:797803697467817994> **e!servericon**: Server iconunu gönderir.\n<:yesilok:797803697467817994> **e!id @idisinebakılacakkisi**: Seçtiğin kişinin IDsini yollar.\n<:yesilok:797803697467817994> **e!avatar @avatarabakılacakkisi**: Seçtiğin kişinin avatarına bakarsın.\n<:yesilok:797803697467817994> **e!kullanıcıbilgim**: Kullanıcı bilgini gösterir.\n<:yesilok:797803697467817994> **e!başvuru [başvurun] @sen**: Sunucunun yetkili olma başvurusunda bulunursun. **Not!** Bu komudun çalışması için `yetkili-başvurusu` kanalı olmak zorunda!\n<:yesilok:797803697467817994> **e!ekranpaylaş**: Sesli kanalda ekran paylaşırsın.\n<:yesilok:797803697467817994> **e!istek [isteğin]**:İsteğini gönderirsin.\n<:yesilok:797803697467817994> **e!kısalt [link]**: Yazdığın linki kısaltır.\n<:yesilok:797803697467817994> **e!roller**: Sunucudaki rolleri gösterir.\n<:yesilok:797803697467817994> **e!sunucu**: Sunucu bilgilerini gösterir.',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#00ff7f')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Kullanıcı`)
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
name: 'kullanıcı',
description: 'Yardım Listesini Gösterir',
usage: 'anakomutlar'
};
