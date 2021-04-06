const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('EBAYNAZEC Kayıt Komutları')
.setTimestamp()
.addField('e!kayıt','Mevcut Kanal Kayıtını Gösterir.')
.addField('e!kayıt-rol','Kayıt Rolünü Belirlersiniz.')
.addField('e!kayıt-log','Kayıt Log Kanalını Belirlersiniz.')
.addField('e!kayıt-kanal','Kayıt Kanalını Belirlersiniz.')
.setFooter('EBAYNAZEC | Kayıt Sistemi')
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
  name: 'kayıt-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};