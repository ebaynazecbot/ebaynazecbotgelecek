const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, args) => {

  const samet = await db.fetch(`kayıtk_${message.guild.id}`)
  if(samet == null) return message.channel.send('Kayıt Sistemi eklemek için <`e!kayıt-rol @rol`/`e!kayıt-kanal #kanal`/`e!kayıt-log #kanal`> şeklinde Ayarlıya bilirsiniz. ');
  if (message.channel.id !== samet) return message.channel.send(`Kayıt kanalı, <#${samet}> kanalına taşındı!`);
  if (samet == true) return; 
  if (samet == false) return message.channel.send(`Kayıt Sistemi Aktif değil`);
 /* client.on('',{
            
    message.send()
            }*/
  let user = message.member
  let guild = message.guild
  
 
  let isim = args[0]
  let yas = args[1]
  
  if (!isim) return message.channel.send(`<a:carp:803486836890402846> **Eksik Kullanım!** <a:carp:803486836890402846>\n**Doğru Kullanım:** e!kayıt [isim] [yaş]`)
  if (!yas) return message.channel.send(`<a:carp:803486836890402846> **Eksik Kullanım!** <a:carp:803486836890402846>\n**Doğru Kullanım:** e!kayıt [isim] [yaş]`)
  
  user.setNickname(`${isim} | ${yas}`)
  user.addRole(db.fetch(`kayıt_${message.guild.id}`))
  message.channel.send(`<a:onay:797742261424488458> ${message.author} başarılı bir şekilde sunucuya kayıt oldun!`)
  message.guild.channels.get(db.fetch(`kayıtlog_${message.guild.id}`)).send(`🗒 ${message.author} Adlı kullanıcı Başarılı Şekilde Kayıt Oldu!`);

  /*client.on("guildMemberAdd",async message => {
message.guild.channel.get(db.fetch(`kayıtk_${message.guild.id}`)).send("Bil olum");
  
});*/
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "yetkili"
}

exports.help = {
  name: 'kayıt',
  description: "Sunucuya kayıtolmaya yarar",
  usage: 'kayıt <isim> <yaş>'
}