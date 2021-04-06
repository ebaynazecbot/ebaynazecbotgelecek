const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#007fff')
.setTitle('Otorol Komutları')
.setTimestamp()
.addField('e!otorol @verilecekrol','Sunucuya yeni katılan kişinin otomatik rolünü ayarlarsınız.\n')
.addField('e!otorol-kanal #kanal','Otorol Log Kanalını Ayarlarsınız.')
.setFooter('EBAYNAZEC | Otorol Sistemi')
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
  name: 'otorol-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};