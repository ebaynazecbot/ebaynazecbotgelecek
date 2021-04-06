const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send('<a:carp:803486836890402846> Yanlış Kullanım <a:carp:803486836890402846>\n**Doğru kullanım:** e!özürdilerim @ozurdilenecekkisi\n**Örnek Kullanım:** e!özürdilerim @EBAYNAZEC');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (`PINK`)
	.setDescription(message.author.username+` adlı kullanıcı, ${mesaj} adlı kullanıcıdan özür diledi! <a:pembekalp:802935575064608788>` )
	.setImage(`https://media1.tenor.com/images/1c15a721b23cff0db6210cfdfb198242/tenor.gif?itemid=14333561`)
  return message.channel.sendEmbed(embed);
  message.react('617413726768988160')
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['öd','özür','özür-dilerim'],
    kategori: 'eğlence',
	permLevel: 0
};

exports.help = {
	name: 'özürdilerim',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'özürdilerim'
};