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
 if (!reason) return msg.reply('Süre Belirtmedin! Seçeneklerin : 1s/1m/1h/1d/1w')
if (!sebep) return msg.reply('Sebep Belirtmedin!')
 
 
 
  let mute = msg.guild.roles.find(r => r.name === "Muted");
        
  let mutetime = args[1]
if(!mute){
      mute = await msg.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
      msg.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(mute, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
 
    }
 
 
  await(user.addRole(mute.id));
msg.channel.send(``)
  let mutezaman = args[1]
.replace(`d`," Gün")
.replace(`s`," Saniye")
.replace(`h`," Saat")
.replace(`m`," Dakika")
.replace(`w`," Hafta")
  msg.channel.send(`<a:onay:797742261424488458> | **Mutelendi!** ${user} adlı kullanıcı, ${mutezaman} susturuldu!`)
db.set(`muteli_${msg.guild.id + user.id}`, 'muteli')
db.set(`süre_${msg.mentions.users.first().id + msg.guild.id}`, mutetime)
                        
msg.guild.channels.get(log).send(`🔥 | **İşlem**: Susturulma\n🤐 | **Susturulan:** ${user}\n⏲ | **Süre**: ${mutezaman}\n<:info:803186886562152448> | **Sebep:** ${sebep}\nSunucudan çıkıp tekrar girse bile mutesi devam edecek!`)
 
  setTimeout(function(){
db.delete(`muteli_${msg.guild.id + user.id}`)
    user.removeRole(mute.id)
 msg.channel.send(new Discord.RichEmbed() .setColor('#00cd00') .setAuthor(`Mutesi açıldı!`) .setDescription(`<@${user.id}> adlı muteli, süresi bittiği için mutesi açıldı! Umuyoruz ki bir daha yaptığı hatayı yapmaz.`))
  }, ms(mutetime));
 
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sustur"],
  permLevel: 0
};
 
exports.help = {
  name: "mute",
  description: "",
  usage: ""
};