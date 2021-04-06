const Discord = require("discord.js");
const ms = require("ms");
const client = new Discord.Client();
const db = require("quick.db");
exports.run = async (receivedMessage,  msg, args) => {
let user = msg.guild.member(msg.mentions.users.first() || msg.guild.members.get(args[0]));
        if (!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("Bu komudu kullanabilmek için `Ban` yetkisine sahip olmanız gerek.");
let log = await db.fetch(`mlog_${msg.guild.id}`)
  if (!log) return msg.channel.send("Ayarlı Bir Mute Log Kanalı Yok! Ayarlamak için \`e!mute-log #kanal\` !") 
var mod = msg.author
var reason = args[1]
 let sebep = args.slice(2).join(' ')
 
  if (!user) return msg.reply('Kullanıcı Etiketlemedin')
 
 
 
  let mute = msg.guild.roles.find(r => r.name === "Muted");
 
  await(user.removeRole(mute.id));
msg.channel.send(``)
  msg.channel.send(`<a:onay:797742261424488458> | **Mute Kaldırıldı!** ${user} adlı kullanıcının mutesi kaldırıldı!`)
db.delete(`muteli_${msg.guild.id + user.id}`, 'muteli')
                        
msg.guild.channels.get(log).send(`🔥 | **İşlem**: Susturma Kaldırma\n🤐 | **Susturulması açılan kişi:** ${user}`)
 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sustur"],
  permLevel: 0
};
 
exports.help = {
  name: "unmute",
  description: "",
  usage: ""
};