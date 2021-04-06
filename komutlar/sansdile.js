const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send('<a:carp:803486836890402846> Yanlış Kullanım <a:carp:803486836890402846>\n**Doğru kullanım:** e!şansdile @dilenecekkisi\n**Örnek Kullanım:** e!şansdile @EBAYNAZEC');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (`PINK`)
	.setDescription(message.author.username+` adlı kullanıcı, ${mesaj} adlı kullanıcıya şans diledi! <a:kalp:799644095466831942>` )
	.setImage(`https://media1.tenor.com/images/54e25cf6730deca8d136875b54bc1c16/tenor.gif?itemid=13393251`)
  return message.channel.sendEmbed(embed);
  message.react('617413726768988160')
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['şans','sans','şans-dile','sans-dile'],
    kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'şansdile',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'şansdile'
};