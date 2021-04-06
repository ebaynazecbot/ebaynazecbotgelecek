const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const csure = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const botbilgi = new Discord.RichEmbed()
  .setColor('#0048ff')
   .setAuthor(`${message.author.tag} Tarafından İstendi`, message.author.avatarURL)
  .setFooter('EBAYNAZEC | İstatistik')
  .addField(":bust_in_silhouette: | **Kullanıcılar**" , `${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField(":busts_in_silhouette: | **Sunucular**", `${bot.guilds.size.toLocaleString()}`, true)
  .addField("<:kanalses:808000555686297641> | **Kanallar**", `${bot.channels.size.toLocaleString()}`, true)
  .addField(":file_folder: | Komut Sayısı", `${bot.commands.size}`, true)
  .addField(":bulb: | Sürümler", "**Discord.JS Sürüm:** v12.5.1\n**Node.JS Sürümü:** v12.0.0", true)
  .addField("<:ping:827924038613336096> | **Ping**", `${client.ws.ping}` + 'ms', true)
  .addField(":fire: | **Bit**", `\`${os.arch()}\``, true)
  .addField("<a:disc:810056394257858570> | **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true) 
  .addField("<a:settings:804951411288440882> | **Sistemler:**", '**İşletim Sistemi: **' + `\`\`${os.platform()}\`\``,true) 
  .addField("\n**:people_hugging: | Destek Sunucusu**", " [Tıkla!](https://discord.gg/YwkJEdee2J)", true)
  .addField("**<:info:803186886562152448> | Bot Davet**", "[Tıkla!](https://discord.com/oauth2/authorize?client_id=827896168632549398&scope=bot&permissions=8)", true)
  .addField("**<a:kalp:799644095466831942> | Voteleme sayfası**", " Yakında!", true)
   
 return message.channel.send(botbilgi);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot durum', 'i', 'bi', 'istatistikler', 'kullanımlar', 'botdurum', 'bd', 'istatisik', 'stats', 'stat'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Botun Bilgilerini Gösterir.",
  usage: "istatistik"
};