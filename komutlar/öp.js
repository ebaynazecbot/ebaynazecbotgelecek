const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send('<a:carp:803486836890402846> Yanlış Kullanım <a:carp:803486836890402846>\n**Doğru kullanım:** e!öp @öpülecekkişi\n**Örnek Kullanım:** e!öp @EBAYNAZEC');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (`PINK`)
	.setDescription(message.author.username+`adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü! <a:kalp:799644095466831942>` )
	.setImage(`https://media1.tenor.com/images/1068d8e68c23abe079b1693ee044ea3f/tenor.gif?itemid=12752386`)
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
	name: 'öp',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'öp'
};