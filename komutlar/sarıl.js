const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send('<a:carp:803486836890402846> Yanlış Kullanım <a:carp:803486836890402846>\n**Doğru kullanım:** e!sarıl @sarılacakkisi\n**Örnek Kullanım:** e!sarıl @EBAYNAZEC');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (`PINK`)
	.setDescription(message.author.username+` adlı kullanıcı, ${mesaj} adlı kullanıcıya sarıldı! <a:kalp:799644095466831942>` )
	.setImage(`https://media1.tenor.com/images/fd47e55dfb49ae1d39675d6eff34a729/tenor.gif?itemid=12687187`)
  return message.channel.sendEmbed(embed);
  message.react('617413726768988160')
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['saril'],
    kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'sarıl',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'sarıl'
};