const Discord = require('discord.js');

exports.run = async (client, message, params) => {
    if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
  var channel = client.channels.find('id', '805085108150468628')
    const asdf = await client.channels.get(message.channel.id).createInvite()
  message.delete();
  const embed = new Discord.RichEmbed()
  .setTitle("<a:onay:797742261424488458> Canlı Destek İstendi! <a:onay:797742261424488458>")
  .setDescription("Canlı Destek İsteme başarılı! En kısa zamanda iletişime geçilecektir!")
  .setFooter("Geri dönüş yapılmazsa Destek Sunucumuza hatayı bildir!")
 message.channel.send(embed)
      const invite = new Discord.RichEmbed()
  .setAuthor("» Canlı Destek | Talep")
  .addField('**» Kullanıcı Adı: **', message.author.username + '#' + message.author.discriminator)
  .addField('**» Kullanıcı hangi sunucudan istedi?: **', message.guild.name)
  .setDescription(asdf.url)
      channel.send(invite)
};
  
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['canlıdestek', 'canlı', 'canlı destek', 'destek'],
  permLevel: 0
};

exports.help = {
  name: 'canlı-destek',
  description: 'Canlı Destek Tablebi Oluşturur.',
  usage: 'canlı-destek'
};