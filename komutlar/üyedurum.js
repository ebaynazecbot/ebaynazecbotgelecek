const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
const embed = new Discord.RichEmbed()
.setColor(`#CE2D0B`)
.setTimestamp()
.addField(`:busts_in_silhouette: | Toplam Üye`, `**${üyesayi}**`, true)
.addField(`:bust_in_silhouette: | Kullanıcılar`, `**${kullanıcılar}**`, true)
.addField(`:robot: | Botlar`, `**${botlar}**`, true)
.addField(`Üye Durumları`, `**${message.guild.members.filter(o => o.presence.status === 'online').size}** <:online:807906592082755584> | Çevrimiçi\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** <:idle:809355069400940554> | Boşta\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** <:dnd:807906596931239956> | Rahatsız Etmeyin\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** <:offline:807906595820142624> | Çevrimdışı/Görünmez`, true)
message.channel.send(embed)
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyedurum","üyeler","durumlar","durum"],
  permLevel: 0
};

module.exports.help = {
  name: 'üyedurum',
  description: 'Üye Durumlarını ve sunucudaki üye sayısını gösterir',
  usage: 'üyedurum'
};