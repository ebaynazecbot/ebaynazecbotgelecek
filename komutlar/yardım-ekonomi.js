const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#deea00')
.setTitle('EBAYNAZEC Ekonomi')
.setTimestamp()
.addField('e!e-para','Puanını gösterir.')
.addField('e!e-çal @calınacakkisi','Seçtiğin kişinin parasını çalarsın.')
.addField('e!e-gönder @gonderilecekkisi [miktar]','Seçtiğin kişiye, belirttiğin kadar para gönderirsin.')
.addField('e!e-günlük','Günlük paranı alırsın.')
.addField('e!e-kumar','Kumar oynarsın.')
.addField('e!e-satınal','Bakımda!')
.setFooter('EBAYNAZEC | Ekonomi')
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
  name: 'ekonomi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};