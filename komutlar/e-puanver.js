const Discord = require('discord.js');
const db = require('quick.db')
var ayarlar = require('../ayarlar.json');
exports.run = async(client, message, args) => { 
  
  
  
  
  if(message.author.id !== ayarlar.sahip) return message.reply('Bu komutu sadece <@565536682946985999> kullanabilir!').then(x => x.delete(10000))
  
  
  
  let user = message.mentions.users.first() || client.users.get(args[0])
  let eklenecek = args[1]
  
  let embeds = new Discord.RichEmbed()
  .setTitle(':warning: Hata!')
  .setFooter(client.user.username, client.user.avatarURL)
  .setColor('RED')
  
  
  // ❌
  
  // ✅
  
 if(!user) {
   

   message.react('❌')
   
   embeds.setDescription('**Puan** eklemek için bir kullanıcı veya İD gir.')
   
   message.channel.send(embeds).then(codeming => codeming.delete(12000))
   return
 }
  
 if(user.bot) {
   

   message.react('❌')
   
   embeds.setDescription('Botlara puan ekliyemezsin.')
   
   message.channel.send(embeds).then(codeming => codeming.delete(12000))
   return
 }  
   if(!eklenecek)  {
   

   message.react('❌')
   
   embeds.setDescription('**Puan** eklemem için bir **miktar** belirtmen gerekiyor.')
   
   message.channel.send(embeds).then(codeming => codeming.delete(12000))
   return
 } 
  
  
  
 if(isNaN(eklenecek))  {
   

   message.react('❌')
   
   embeds.setDescription('**Puan** eklemem için bir **sayı** belirtmen gerekiyor.')
   
   message.channel.send(embeds).then(codeming => codeming.delete(12000))
   return
 } 
  
  
  
  let puan = await db.fetch(`puan_${user.id}`)

  
  
let sonuc = puan + eklenecek
  


  
    
  let basarılı = new Discord.RichEmbed()
  .setTitle('✅ İşlem Tamam!')
  .setDescription(`<@!${user.id}> Adlı kullanıcıya **${eklenecek}** puan eklendi! `)
  .setFooter(client.user.username, client.user.avatarURL)
  .setColor('BLUE')
  message.channel.send(basarılı)
  
  message.react('✅')
  
  if(!puan) db.set(`puan_${user.id}`, eklenecek)
  else db.add(`puan_${user.id}`, eklenecek)
  
  user.send('**Şanslısın! :tada:**\nKurucum tarafından hesabınıza **'+eklenecek+'** para eklendi!')
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['e-para-ekle'], 
  permLevel: 0
};

exports.help = {
  name: 'e-para-ver',
  description: 'taslak', 
  usage: 'puan-ver'
};
