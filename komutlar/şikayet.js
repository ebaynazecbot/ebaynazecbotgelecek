const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: e!sikayet <Şikayet>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Şikayetinizi bildirdiğiniz için teşekkürler! Şikayetin, yetkililere iletildi!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının Şikayeti:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı Adı: <@${message.author.id}>`)
.addField("Şikayet", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('816391407584804895').send(embed2); // Kanal ID  BURAYI KESİNLİKLE DÜZENLEYİNİZ!

};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['şikayet'],
  permLevel: 0 
};

exports.help = {
  name: 'sikayet',
  description: 'Şikayet de bulunursunuz..',
  usage: 'sikayet <Şikayet>'
};