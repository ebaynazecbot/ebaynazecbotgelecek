const Discord = require('discord.js'); 

exports.run = (client, message , args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send('<a:carp:803486836890402846> Yanlış Kullanım <a:carp:803486836890402846>\n**Doğru kullanım:** e!kız @kızılacakkişi\n**Örnek Kullanım:** e!kız @EBAYNAZEC');
	const embed = new Discord.RichEmbed()
	.setAuthor (' ')
	.setColor (`PINK`)
	.setDescription(message.author.username+` adlı kullanıcı, ${mesaj} adlı kullanıcıya kızdı! <a:carp:803486836890402846>` )
	.setImage(`https://media1.tenor.com/images/e1011d32983af8aedc1c61728ce9e528/tenor.gif?itemid=15931246`)
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
	name: 'kız',
	description: 'İstediğiniz kişiyi öpersiniz.',
	usage: 'kız'
};