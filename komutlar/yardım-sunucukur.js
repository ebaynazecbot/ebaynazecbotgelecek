const Discord = require('discord.js');
const data = require('quick.db')

    exports.run = (client, message, args) => {

      let pages = [
                  '<a:settings:804951411288440882> Sunucu Kurma <a:settings:804951411288440882>\nSaniyeler içinde sunucu kurmaya ne dersin?\n\nNasıl bir sunucu kurmak istediğini alt taraftan seçip, herhangi bir kanala yaz. Saniyeler içinde sunucun kurulur.\n\nOyun Sunucusu Kurmak İçin <:yesilok:797803697467817994> `e!oyun-sunucusu-kur`\nSohbet Sunucusu Kurmak İçin <:yesilok:797803697467817994> `e!sohbet-sunucusu-kur`\nBotList Sunucusu Kurmak İçin <:yesilok:797803697467817994> `e!botlist-sunucusu-kur`\n\n:warning: Bu komutları kullanmak için premium gereklidir! Almak için **e!premium**',
    
                  ];
      let page = 1;
    
    
      const embed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
        .setFooter(`Ebaynazec | Sunucu Kurma Menüsü`)
        .setDescription(pages[page-1])
      message.channel.send(embed).then(msg => {
    
    
          //Filter
    
    
    
    
        })
    };


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucukur','serverkur','kursunucu','kur-sunucu','sunucu-oluştur','sunucuoluştur','create-server','createserver','server-kur'],
  permLevel: 0
  };
  
  exports.help = {
  name: 'sunucu-kur',
  description: 'Yardım Listesini Gösterir',
  usage: 'sunucu-kur'
  };