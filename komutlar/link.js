const Discord = require('discord.js');
const data = require('quick.db');
const moment = require('moment');
const kontrol = require('node-fetch');
moment.locale('tr');

exports.run = async (client, message, args) => {
let argümanlar = ['ekle', 'sil', 'liste'];
if(!args[0]) return message.channel.send(new Discord.RichEmbed() .setColor('#bf00bf') .setAuthor(`Ops!`) .setDescription(`${message.author}, Eksik komut kullandın. Komutlarım: **e!link ekle** , **e!link sil** , **e!link liste**`))
if(!argümanlar.includes(args[0].toLowerCase())) return message.channel.send(new Discord.RichEmbed() .setColor('#bf00bf') .setAuthor(`Ops!`) .setDescription(`${message.author}, Eksik komut kullandın. Komutlarım: **e!link ekle** , **e!link sil** , **e!link liste**`))

if(args[0].toLowerCase() === 'ekle') {

if(!args[1]) return message.channel.send('<a:carp:803486836890402846> | Bir link belirtmelisin.');
if(!args[1].startsWith('https://')) return message.channel.send(`<a:carp:803486836890402846> | Geçersiz bir link girdin!`)
const linkler = await data.fetch('chimped');
if(linkler) {
if(linkler.find(a => a.site === args[1])) return message.channel.send(`<a:carp:803486836890402846> | Girdiğin link zaten ekli!`);
}
data.push('chimped', { site: args[1], sahipID: message.author.id, sahipTag: message.author.tag, sahipName: message.author.username, eklenmeTarihi: moment(Date.now()).format('DD/MM/YYYY HH:mm') })
message.channel.send(`<a:onay:797742261424488458> | Girdiğin link artık uptime **ediliyor**!`);


}

if(args[0].toLowerCase() === 'sil') {
const linkler = await data.fetch('chimped');
if(!linkler) return message.channel.send('<a:carp:803486836890402846> | Daha önce hiç link eklenmemiş.');
if(!args[1]) return message.channel.send('<a:carp:803486836890402846> | Bir link belirtmelisin.');
if(!args[1].startsWith('https://')) return message.channel.send(`<a:carp:803486836890402846> | Geçersiz bir link girdin!`)
if(!linkler.filter(a => a.sahipID === message.author.id).find(c => c.site === args[1])) return message.channel.send(`<a:carp:803486836890402846> | Veritabanımda linkini bulamadım.`)
if(!linkler.find(a => a.site === args[1])) return message.channel.send(`<a:carp:803486836890402846> | Veritabanımda linkini bulamadım.`);

if(linkler.length == 1) {
data.delete('chimped');
return message.channel.send(`<a:onay:797742261424488458> | Girdiğin link artık uptime **edilmiyor**! Şu anda aktif ${linkler.filter(c => c.sahipID === message.author.id).length-1} linkin uptime ediliyor.`)
} else {
let ex = [];
linkler.forEach(db => {
if(db.site === args[1]) return;
ex.push(db)
data.set('chimped', ex)
})
message.channel.send(`<a:onay:797742261424488458> | Linkin silindi. Şu anda **${linkler.filter(c => c.sahipID === message.author.id).length-1}** linkin uptime ediliyor.`)
}

}

if(args[0].toLowerCase() === 'liste') {
const linkler = await data.fetch('chimped');
if(!linkler) return message.channel.send('<a:carp:803486836890402846> | Daha önce hiç link eklenmemiş.');
if(!linkler.filter(a => a.sahipID === message.author.id)) return message.channel.send('<a:carp:803486836890402846> | Daha önce hiç link eklememişsin.');
else {
  
const embed = new Discord.RichEmbed().setColor('GREEN');
linkler.filter(a => a.sahipID === message.author.id).forEach(s => {
embed.addField(s.site, `• Eklenme tarihi: ${s.eklenmeTarihi}`);
})
message.channel.send(embed.setDescription(`Toplam **${linkler.filter(a => a.sahipID === message.author.id).length}** tane uptime edilen linkin var. **İşte uptime edilen linklerin:**`).setFooter('EBAYNAZEC | Uptime'));
}
}

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'link'
};
