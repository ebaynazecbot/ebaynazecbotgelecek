const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#3f007f')
.setTitle('EBAYNAZEC Seviye Komutları')
.setTimestamp()
.addField('e!seviye','Seviyenizi atar.')
.addField('e!seviye-ayarlar','seviye komutlarının sunucudaki ayarlarını atar.')
.addField('e!seviye-aç','Seviye Sistemini açarsınız.')
.addField('e!seviye-kapat','Seviye sistemini kapatırsınız.')
.addField('e!seviye-log','Level atlayan kullanıcıları bu kanala atar.')
.addField('e!seviye-rol','Seviye ödülünü ayarlarsınız.')
.addField('e!seviye-xp','mesaj başına gelecek puanı ayarlarsınız.')
.setFooter('EBAYNAZEC | Seviye Sistemi')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'seviye-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};