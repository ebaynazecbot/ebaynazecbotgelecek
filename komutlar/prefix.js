const Discord = require('discord.js');
const database = require('quick.db');
const data = require('quick.db')

exports.run = async (client, message, args) => {
  
  
  let açıkmı = await data.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {

    let argslar = ['ekle', 'kaldır', 'sıfırla'];
    if(!args[0] || !argslar.includes(args[0])) {
    
    let prefixes = ['1. e!(sabittir, değiştirilemez)'];
    const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
    if(prefixler && prefixler.length >= 1) {
    var i = 1;
    for(const key in prefixler) {
    i++
    prefixes.push(i+'. '+prefixler[key]);
    };
    };
    
    const embed = new Discord.RichEmbed()
    .setTitle('Bu sunucudaki prefixlerim:')
    .setColor('BLUE')
    .setFooter(`Prefix yardım menüsü için e!prefix-menüsü`)
    .setDescription(prefixes.join('\n'));
    return message.channel.send(embed);
    
    };
    
    if(args[0] === 'ekle') {
    if(!args[1]) return;
    if(args[1].startsWith('"') && args[args.length-1].endsWith('"')) {
    let arg = args.slice(1).join(' ').slice(1, args.slice(1).join(' ').length-1);
    const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
    if(prefixler && prefixler.some(a => a === arg)) return message.channel.send(`<a:onay:797742261424488458> **İşlem Başarılı!** <a:onay:797742261424488458>\n${arg} adlı prefix **eklendi**!`);  
    await database.push(`prefixes.${message.guild.id}`, arg);
    return message.channel.send(`<a:onay:797742261424488458> **İşlem Başarılı!** <a:onay:797742261424488458>\n${arg} adlı prefix eklendi!`);
    };
    if(args[2]) return message.channel.send("Çok sayıda prefixim var. Lütfen bazılarını silin!");
    const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
    if(prefixler && prefixler.some(a => a === args[1])) return message.channel.send(`<a:onay:797742261424488458> **İşlem Başarılı!** <a:onay:797742261424488458>\n${args[1]} adlı prefix **eklendi**!`);  
    await database.push(`prefixes.${message.guild.id}`, args[1]);
    return message.channel.send(`<a:onay:797742261424488458> **İşlem Başarılı!** <a:onay:797742261424488458>\n${args[1]} adlı prefix **eklendi**!`);
    };
    
    if(args[0] === 'kaldır') {
    if(!args[1]) return;
    if(args[1].startsWith('"') && args[args.length-1].endsWith('"')) {
    let arg = args.slice(1).join(' ').slice(1, args.slice(1).join(' ').length-1);
    const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
    if(prefixler && !prefixler.some(a => a === arg)) return message.channel.send('<a:carp:803486836890402846> **İşlem Başarısız Oldu!** <a:carp:803486836890402846>\n**Sebep:** Böyle bir prefix yok veya zaten kaldırılmış!');  
    await database.set(`prefixes.${message.guild.id}`, prefixler.filter(a => a !== arg));
    return message.channel.send(`<a:onay:797742261424488458> **İşlem Başarılı!** <a:onay:797742261424488458>\n${arg} adlı prefix **kaldırıldı**!`);
    };
    if(args[2]) return message.channel.send("Çok sayıda prefixim var. Lütfen bazılarını silin!");
    const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
    if(prefixler && !prefixler.some(a => a === args[1])) return message.channel.send('<a:carp:803486836890402846> **İşlem Başarısız Oldu!** <a:carp:803486836890402846>\n**Sebep:** Böyle bir prefix yok veya zaten kaldırılmış!');  
    await database.set(`prefixes.${message.guild.id}`, prefixler.filter(a => a !== args[1]));
    return message.channel.send(`<a:onay:797742261424488458> **İşlem Başarılı!** <a:onay:797742261424488458>\n${args[1]} adlı prefix **kaldırıdı**!`);
    };
    
    if(args[0] === 'sıfırla') {
    await database.delete(`prefixes.${message.guild.id}`);
    return message.channel.send('<a:onay:797742261424488458> **İşlem Başarılı!** <a:onay:797742261424488458>\nBu sunucudaki bütün prefixlerim silindi!');
    };

} else { return message.channel.send(new Discord.RichEmbed() .setColor('#ee2c2c') .setAuthor(`Ops! Premium yok!`) .setDescription(`:x: | ${message.author}, kullanmaya çalıştığın komut bir premium komuttur. Ve bu sunucuda premium yok.\n<a:elmas:814097615964209212> | Premium hakkında bilgi için **e!premium** yazmanız yeterlidir.`)) }
 
  
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['prefix-ayarla','prefixayarla'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'prefix'
  };