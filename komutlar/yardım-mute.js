const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#ff0000')
.setTitle('Mute Sistemi')
.setDescription('**e!mute @mutelenecekkisi [süre] [sebep]**: Seçtiğiniz kişiyi, belirttiğiniz süre kadar susturur.\n**e!unmute @mutesikaldırılacakkisi**: Seçtiğiniz kişinin mutesini kaldırır.\n**e!mute-log #kanal**: Mute Log Kanalını Ayarlarsınız.\n\nEğer mute çalışmazsa **e!mutesorun** yazmanız yeterlidir.')
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
  name: 'mute-sistemi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};