const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "ÖÖ";
if (hours >= 12) {
suffix = "ÖS";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;



      message.channel.send(`**Çekilişin yapılacağı kanalın adını yazınız!** | Örnek: Sohbet`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':x: **İşlem başarısız oldu!** :x: \n **Sebep:** Böyle bir kanal bulunamadı! \n **Olası Çözüm/Çözümler:** \n **-** `!sil` tekrar yazın. \n **-** `#kanaladı` yazmayın, onun yerine sadece `kanaladı` yazınız.');
        room = collected.first().content;
        collected.first().delete();
        msg.edit('**Çekilişin süresini yazınız!** \n(1s, 1m, 1h, 1d, 1w)\n(1s = 1 Saniye , 1m = 1 Dakika , 1h = 1 Saat , 1d = 1 Gün , 1w = 1 hafta)').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send(':x: **İşlem başarısız oldu!** :x: \n **Sebep:** Böyle bir süre yok! \n **Olası Çözüm/Çözümler:** 1s/1m/1h/1d/1w içlerinden birini yazmayı deneyin!');
            duration = collected.first().content
            collected.first().delete();
            msg.edit('**Ödül ne olacak?**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("#f558c9")
                  .setDescription(`**Ödül:** ${title} \n🎉'a basarak katılabilirsiniz! \n**Kalan Süre :** ${duration} \n **Başlama Zamanı :** ${hours}:${minutes}:${seconds} ${suffix} \n\n**Çekilişi başlatan yetkili:**`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **ÇEKİLİŞ BAŞLADI!** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .setColor("#f558c9")
            .setFooter("Ebaynazec")
                       .addField('Çekiliş Bitti !🎉',`Kazanan : ${gFilter}`)
                       .setTimestamp()
                     m.edit('** 🎉 ÇEKİLİŞ BİTTİ 🎉**' , {embed: endEmbed});

                       var embedLel = new Discord.RichEmbed()
                        .setColor("#f558c9")
                        .setDescription("Ödülünü Yetkilileri Etiketleyerek Alabilirsin!").setFooter("Ebaynazec")
                    message.guild.channels.find("name" , room).send(`**Tebrikler ${gFilter}! \`${title}\` kazandın!**` , embedLel)
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **Maalesef gerekli yetkilerim bulunmamakta**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş mi? Sunucunda güzel şeyler olacak :3',
  usage: 'çekiliş'
};