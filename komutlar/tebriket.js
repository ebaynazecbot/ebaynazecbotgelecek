const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send('<a:carp:803486836890402846> Yanlış Kullanım <a:carp:803486836890402846>\n**Doğru kullanım:** e!tebriket @tebrikedilecekkisi\n**Örnek Kullanım:** e!tebriket @EBAYNAZEC');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (`PINK`)
	.setDescription(message.author.username+` adlı kullanıcı,\n ${mesaj} adlı\n kullanıcıyı tebrik etti! <a:kalp:799644095466831942>` )
	.setImage(`https://media1.tenor.com/images/c28e2d9cbac4cc0a077c64d4a8bd4945/tenor.gif?itemid=9289766`)
  return message.channel.sendEmbed(embed);
  message.react('617413726768988160')
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
    kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'tebriket',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'tebriket'
};