const Discord = require("discord.js");
const BatuhanEmreZengin = require("quick.db");

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.RichEmbed() .setColor('#ff0000') .setAuthor(`Ops! Yetkin Yok!`) .setDescription(`${message.author}, bu komudu kullanabilmek için \`MANAGE_GUILD\` yetkin olmalı!`) .setFooter(`EBAYNAZEC | Oto Tag`))
  message.channel.send(new Discord.RichEmbed() .setColor('#007fff') .setAuthor(`Ototag Sistemi`) .setDescription(`**e!ototag**: Ototag menüsü\n**e!ototag aç [tag]**: Sunucuya biri katılığında tagını belirlersiniz.\n**e!ototag kapat**: Ototagı kapatırsınız.`) .setFooter(`EBAYNAZEC | Oto Tag`))


  if(args[0] === 'aç') { 
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.RichEmbed() .setColor('#ff0000') .setAuthor(`Ops! Yetkin Yok!`) .setDescription(`${message.author}, bu komudu kullanabilmek için \`MANAGE_GUILD\` yetkin olmalı!`) .setFooter(`EBAYNAZEC | Oto Tag`))
  let BatuhanEmre = args.slice(1).join(" ");
  if (!BatuhanEmre)
    return message.channel.send(new Discord.RichEmbed() .setColor('#ff0000') .setAuthor(`Ops!`) .setDescription(`Lütfen geçerli bir tag girin.`) .setFooter(`EBAYNAZEC | Oto Tag`))
  BatuhanEmreZengin.set(`ototag.${message.guild.id}`, BatuhanEmre);
  message.channel.send(new Discord.RichEmbed() .setColor('#00bf00') .setAuthor(`İşlem Tamamlandı!`) .setDescription(`<a:onay:797742261424488458> | **İşlem Tamamlandı!** Artık sunucuya bir geldiğinde tagı ${BatuhanEmre} olacaktır.`) .setFooter(`EBAYNAZEC | Oto Tag`));
}

if(args[0] === 'kapat') { 
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.RichEmbed() .setColor('#ff0000') .setAuthor(`Ops! Yetkin Yok!`) .setDescription(`${message.author}, bu komudu kullanabilmek için \`MANAGE_GUILD\` yetkin olmalı!`) .setFooter(`EBAYNAZEC | Oto Tag`))
    BatuhanEmreZengin.delete(`ototag.${message.guild.id}`);
    message.channel.send(new Discord.RichEmbed() .setColor('#00bf00') .setAuthor(`İşlem Tamamlandı!`) .setDescription(`<a:onay:797742261424488458> | **İşlem Tamamlandı!** Artık sunucuya bir geldiğinde tagı olmayacaktır.`) .setFooter(`EBAYNAZEC | Oto Tag`));
  }
}

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: [],
   permlevel: 0
}
exports.help = {
  name: "ototag",
  description: 'Sunucuya katılan kullanıcılara oto tag verebilirsiniz.',
  usage: 'ototag '
}