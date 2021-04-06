const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#7f00ff')
.setTitle('EBAYNAZEC Sayaç Komutları')
.setTimestamp()
.addField('e!sayaç-ayarla','Sayaç Kanal ve Sayıyı Ayarlarsınız.')
.addField('e!sayaç-sıfırla','Sayaçı Sıfırlarsınız.')
.setFooter('EBAYNAZEC | Sayaç Sistemi')
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
  name: 'sayaç-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};