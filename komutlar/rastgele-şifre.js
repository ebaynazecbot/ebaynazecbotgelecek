const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');

    if (!uzunluk) return message.reply('<a:carp:803486836890402846> İşlem Başarısız Oldu! <a:carp:803486836890402846>\n**Sebep:** Şifre uzunluğu girilmemiş.\n**Doğru Kullanım**: e!rastgeleşifre [0-30]\n**Örnek Kullanım:** e!rastgeleşifre 20')



    var password = generator.generate({
        length: uzunluk,
        numbers: true,
    })

    message.channel.send(password);
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'rastgeleşifre', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre uzunluk'
};