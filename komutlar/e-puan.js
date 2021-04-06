const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let user = message.mentions.users.first() || message.author
  
  
  let puan = await db.fetch(`puan_${user.id}`)
  
  let s;
  if(!puan) s = "0"
  else s = puan
  
  message.channel.send(`<@!${user.id}> adlı kullanıcı, **${s}** Miktar paraya sahip!`)
  
  
  
  
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['e-puan-kontrol'], 
  permLevel: 0
};

exports.help = {
  name: 'e-para',
  description: 'taslak', 
  usage: 'puan'
};
