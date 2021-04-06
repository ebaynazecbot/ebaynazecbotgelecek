const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`<a:carp:803486836890402846> İşlem Başarısız Oldu! <a:carp:803486836890402846>`, '**Sebep:** Açıklama yok!\n**Doğru Kullanım:** e!oylama [oylamaaçıklaması]\n**Örnek Kullanım:** e!oylama EBAYNAZEC botu hakkında ne düşünüyorsunuz?')).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.sendEmbed(

       new Discord.RichEmbed()

       .setColor("GREEN")
       .setTimestamp()
       .setFooter('Oylama Sistemi', client.user.avatarURL)

       .addField(`**Oylama**`, `**${question}**`)).then(function(message) {

         message.react('✅');

         message.react('❌');

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'oylama <oylamaismi>'
};