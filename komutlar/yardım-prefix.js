const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
  
  
  let açıkmı = await data.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {

    exports.run = function(client, message) {
        const embed = new Discord.RichEmbed()
        .setColor('#666666')
        .setTitle('EBAYNAZEC Prefix Menüsü')
        .setTimestamp()
        .addField('e!prefix','Sunucudaki bütün prefixlerini atar.')
        .addField('e!prefix ekle [prefix]','Bota prefix eklersin.')
        .addField('e!prefix kaldır [prefix]','Botun prefixini kaldırırsın.')
        .addField('e!prefix sıfırla','Botun prefixlerini sıfırlar.')
        .setFooter('EBAYNAZEC | Prefix Menüsü')
        .setTimestamp()
        .setThumbnail(client.user.avatarURL)
        message.channel.send(embed)
        };

} else { return message.channel.send(new Discord.RichEmbed() .setColor('#ee2c2c') .setAuthor(`Ops! Premium yok!`) .setDescription(`:x: | ${message.author}, kullanmaya çalıştığın komut bir premium komuttur. Ve bu sunucuda premium yok.\n<a:elmas:814097615964209212> | Premium hakkında bilgi için **e!premium** yazmanız yeterlidir.`)) }
 
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'prefix-menüsü',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};