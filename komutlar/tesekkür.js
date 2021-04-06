const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send('<a:carp:803486836890402846> Yanlış Kullanım <a:carp:803486836890402846>\n**Doğru kullanım:** e!teşekkür @tesekküredilecekkisi\n**Örnek Kullanım:** e!teşekkür @EBAYNAZEC');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (`PINK`)
	.setDescription(message.author.username+` adlı kullanıcı, ${mesaj} adlı kullanıcıya teşekkür etti! <a:kalp:799644095466831942>` )
	.setImage(`https://media1.tenor.com/images/34f1d8973dfbbe0d4442102053c2317a/tenor.gif?itemid=14105969`)
  return message.channel.sendEmbed(embed);
  message.react('617413726768988160')
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['teşekkürler','tşk','tsk','teşekkürederim','teşekkür-ederim'],
    kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'teşekkür',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'teşekkür'
};