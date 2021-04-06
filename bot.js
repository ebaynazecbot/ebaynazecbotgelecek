const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const db = require('quick.db');
const ms = require('parse-ms')
const Canvas = require('canvas')
const kontrol = require("node-fetch");
const instagram = require("user-instagram");
const moment = require('moment');
const { stripIndents } = require('common-tags');
const data = require('quick.db')
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

setInterval(() => {
const linkler = data.fetch('chimped');
if(linkler) {
if(linkler.length > 0) {
linkler.forEach(s => {
kontrol(s.site).catch(err => {
console.log('');
console.log(`${s.site} hata verdi. Sahibi: ${s.sahipTag}`);
console.log('');
})
console.log(`${s.site} uptime edildi. Sahibi: ${s.sahipTag}`);
})
}
}
}, 60000)

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on("message", async message => {
  if(message.author.id === client.user.id) return;
  if(message.guild) return;
  client.channels.get('811110508203606037').send(new Discord.RichEmbed().setAuthor("Yeni Bir DM", client.user.avatarURL).setFooter(message.author.tag, message.author.avatarURL).setDescription(`**Gönderen:** <@${message.author.id}>`).setTimestamp().addField("Gönderdiği Mesaj", message.content).setColor("#008b8b"))
})

client.on("message",message=>{
  if(message.content==`<@!${client.user.id}>`) return message.channel.send(new Discord.RichEmbed() .setColor('#007fff') .setAuthor(`Merhaba!`) .setDescription(`:wave: Ben EBAYNAZEC, işte sana bilgiler:\n\n:mag_right: | **Prefixim:** e!\n:mag_right: | **Sunucudaki diğer prefixlerim:** Diğer prefixlerimi görmek için **e!prefix** yazınız.\n<:sunucusahibi:802933769534308353> | **Sahibim:** <@565536682946985999>\n\nDaha fazla bilgi/yardım için [Destek Sunucuma](https://discord.gg/YwkJEdee2J) gelebilirsin.`) .setFooter(`EBAYNAZEC`));
})

client.on('ready', () => require('quick.db').set('start', Date.now()))

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
                .setColor("0x808080")
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})

client.on('guildMemberAdd', async member => {
  let rol = await db.fetch(`otoR_${member.guild.id}`);
  let kanal = await db.fetch(`otoK_${member.guild.id}`);
  let mesaj = await db.fetch(`otomesaj_${member.guild.id}`);
  let rol2 = await db.fetch(`botR_${member.guild.id}`);
  
  if (member.user.bot === true){
    
    if (!rol2) return
    
    member.addRole(member.guild.roles.get(rol2));
  } else {
  
  if (!rol) return
  member.addRole(member.guild.roles.get(rol))
  
if (!kanal) return
member.guild.channels.get(kanal).send(`<:adduser:807906591344689152> | ${member} sunucuya katıldı! \`${member.guild.roles.get(rol).name}\` rolü verildi! **${member.guild.members.size}** Kişiyiz!`)
}
})


client.on('guildMemberAdd', async member => {
  
  let emran = await db.fetch(`ototag.${member.guild.id}`);
  let tanersins;
  if (emran == null) tanersins = member.setNickname(`${member.user.username}`)
  else tanersins = member.setNickname(`${emran} ${member.user.username}`)
});



client.on('guildMemberRemove', async member => {
  let rol = await db.fetch(`otoR_${member.guild.id}`);
  let kanal = await db.fetch(`otoK_${member.guild.id}`);
  let mesaj = await db.fetch(`otomesaj_${member.guild.id}`);
  let rol2 = await db.fetch(`botR_${member.guild.id}`);
  
  if (member.user.bot === true){
    
    if (!rol2) return
    
    member.addRole(member.guild.roles.get(rol2));
  } else {
  
  if (!rol) return
  member.addRole(member.guild.roles.get(rol))
  
if (!kanal) return
member.guild.channels.get(kanal).send(`<a:donen_kirmizi:798142492770828318> | ${member} sunucudan ayrıldı! **${member.guild.members.size}** Kişiyiz!`)
}
})

client.on('guildMemberAdd',async member => { // Güvenlik Sistemi
  let user = client.users.get(member.id);
  let kanal = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627428441695977497/gvnlk-spheli.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627427731407241226/gvnlk-gvnli.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format('dddd');  
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/597433546868654106/627425996454232064/gvnlk-arka.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   if (!kanal) return
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'güvenlik.png');
    kanal.send(attachment)
});

const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

   
client.on("roleCreate", async (rolee, member, guild) => {
  let rolkoruma = await db.fetch(`rolk_${rolee.guild.id}`);
  if (rolkoruma == "acik") {
    rolee.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir rol oluşturuludu! fakat geri silindi! (Rol Koruma Sistemi)"
      )
      .setColor("BLACK");
    rolee.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});

client.on("guildCreate", guild => {  // sunucuya eklendim ve atıldım
let add = client.channels.get("")
const eklendim = new Discord.RichEmbed()

.setTitle(`Sunucuya Eklendim`)
.setTimestamp()
.setColor("GREEN")
.setThumbnail(guild.iconURL)
.addField(`Sunucu İsmi`,guild.name)
.addField(`Sunucu ID`, guild.id)
.addField(`Kurucu`,guild.owner.user.tag)
.addField(`Kurucu ID`,guild.owner.user.id)
.addField(`Üye Sayısı`,guild.memberCount)

add.send(eklendim)

});

client.on("channelCreate", async (channel, member, guild) => {
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (kanal == "acik") {
    channel.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir kanal oluşturuludu! fakat geri silindi! ( Kanal Koruma Sistemi) "
      )
      .setColor("BLACK");
    channel.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});

client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`) 
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                   
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setFooter('EBAYNAZEC  -|-  Reklam Engel Sistemi', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("EBAYNAZEC Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda biri reklam yapıyor!")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send(embed)                       
                    return msg.channel.send(`${msg.author.tag}, Reklam yasak!`).then(msg => msg.delete(25000));
                  }             
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
  });

client.on('messageDelete', async message   => { // mod-log
      let modlogs = db.get(`tc-modlog_${message.guild.id}`)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")
  .setTitle("MESAJ SİLİNDİ")
.setDescription(`<@!${message.author.id}> adlı kullanıcı tarafından <#${message.channel.id}> kanalına gönderilen mesaj silindi!\n\nSilinen Mesaj: **${message.content}**`)
  .setFooter("EBAYNAZEC |  Mod-Log")
  modlogkanal.sendEmbed(embed);
  })


client.on('guildBanAdd', async message  => {
      let modlogs = db.get(`tc-modlog_${message.guild.id}`)
    const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
  const embed = new Discord.RichEmbed()
  .setColor("BLUE")

	.setDescription(`Üye Sunucudan Yasaklandı! \n<@!${message.user.id}>, ${message.user.tag}`)
		.setThumbnail(message.user.avatarURL)
  .setFooter("EBAYNAZEC | mod-log")
  modlogkanal.sendEmbed(embed);
  })
client.on('channelCreate', async channel  => {
      let modlogs = db.get(`tc-modlog_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
	if (channel.type === "text") {
				let embed = new Discord.RichEmbed()
					.setColor('RANDOM')
				.setDescription(`${channel.name} adlı metin kanalı oluşturuldu.`)
				.setFooter(`EBAYNAZEC | Mod-Log Sistemi Kanal ID: ${channel.id}`)
				modlogkanal.send({embed});
			};
			if (channel.type === "voice") {
				let embed = new Discord.RichEmbed()
				.setColor('RANDOM')
.setTitle("SES KANALI OLUŞTURULDU")
				.setDescription(`${channel.name} adlı ses kanalı oluşturuldu!`)
				.setFooter(`EBAYNAZEC | Mod-Log Sistemi Kanal ID: ${channel.id}`)

				modlogkanal.send({embed});
			}
		
	})
client.on('channelDelete', async channel  => {
      let modlogs = db.get(`tc-modlog_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);    
if (!modlogkanal) return;
	if (channel.type === "text") {
				let embed = new Discord.RichEmbed()
					.setColor('RANDOM')
				.setDescription(`${channel.name} adlı metin kanalı silini!`)
				.setFooter(`EBAYNAZEC | Mod-Log Sistemi Kanal ID: ${channel.id}`)
				modlogkanal.send({embed});
			};
			if (channel.type === "voice") {
				let embed = new Discord.RichEmbed()
				.setColor('RANDOM')
.setTitle("SES KANALI SİLİNDİ")
				.setDescription(`${channel.name} adlı ses kanalı silindi`)
			.setFooter(`EBAYNAZEC | Mod-Log Sistemi  Kanal ID: ${channel.id}`)
				modlogkanal.send({embed});
			}
	})
client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;
  var user = oldMsg.author;
  if (db.has(`tc-modlog_${oldMsg.guild.id}`) === false) return;
  var kanal = oldMsg.guild.channels.get(db.fetch(`tc-modlog_${oldMsg.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("Kullanıcı", oldMsg.author.tag, true)
  .addField("Eski Mesaj",`  ${oldMsg.content}  `)
  .addField("Yeni Mesaj", `${newMsg.content}`)
  .setThumbnail(oldMsg.author.avatarURL)
  kanal.send(embed);  
		
	})

//küfür-englleme Başlangıç
let kufurEngel = JSON.parse(fs.readFileSync("./kufurEngelle.json", "utf8"));
client.on("message", msg => {
    if (!msg.guild) return;
    if (!kufurEngel[msg.guild.id]) return;
    if (kufurEngel[msg.guild.id].küfürEngel === 'kapali') return;
      if (kufurEngel[msg.guild.id].küfürEngel=== 'acik') {
        const kufur = ["am","mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git", "porno","porn","sikik","sik"];
    if (kufur.some(word => msg.content.toLowerCase().includes(word)) ) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete()
         msg.reply("<a:carp:803486836890402846> | Küfür Edemezsin!").then(message => message.delete(3000));
      }
  }
      }
  });
//küfür-engel Bitiş

/// LEVEL BOT.JS ///

client.on("message", async message => {
  let prefix = ayarlar.prefix;

  var id = message.author.id;
  var gid = message.guild.id;

  let hm = await db.fetch(`seviyeacik_${gid}`);
  let kanal = await db.fetch(`svlog_${gid}`);
  let xps = await db.fetch(`verilecekxp_${gid}`);
  let seviyerol = await db.fetch(`svrol_${gid}`);
  let rollvl = await db.fetch(`rollevel_${gid}`);

  if (!hm) return;
  if (message.content.startsWith(prefix)) return;
  if (message.author.bot) return;

  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

  if (!lvl) {
    //CodEming/Ft.Yasin..
    if (xps) {
      db.set(`xp_${id}_${gid}`, xps);
    }
    db.set(`xp_${id}_${gid}`, 4);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
  } else {
    if (xps) {
      db.add(`xp_${id}_${gid}`, xps);
    }
    db.add(`xp_${id}_${gid}`, 4);

    if (xp > xpToLvl) {
      db.add(`lvl_${id}_${gid}`, 1);
      db.add(
        `xpToLvl_${id}_${gid}`,
        (await db.fetch(`lvl_${id}_${gid}`)) * 100
      );
      if (kanal) {
        client.channels
          .get(kanal.id)
          .send(
              new Discord.RichEmbed() .setColor('#00bf00') .setAuthor(`Birileri seviye atladı!`) .setDescription(`${message.author} adlı kullanıcı seviye atladı! :partying_face:\n**Y**eni **S**eviyesi: ${lvl}`) .setFooter(`EBAYNAZEC`)
          );

        //zepo
      }
      //zepo
    }

    if (seviyerol) {
      if (lvl >= rollvl) {
        message.guild.member(message.author.id).addRole(seviyerol);
        if (kanal) {
          client.channels
            .get(kanal.id)
            .send(
            new Discord.RichEmbed() .setColor('#ff00ff') .setAuthor(`Birileri seviye atladı ve role sahip oldu!`) .setDescription(`${message.author} adlı kullanıcı seviye atladı! :partying_face:\n**Y**eni **S**eviyesi: ${rollvl}\n**Y**eni **R**olü: <@${seviyerol}>`) .setFooter(`EBAYNAZEC`)
            );
        }
      }
    }
  }

  //ZEPST
});

client.on('message', async message => { // bot bilgi paneli üye sayısı bot sayısı falan
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "serverpanelkaldır") {
 if (!message.guild.channels.find(channel => channel.name === "Server Panel")) return message.channel.send("**Server Panel Ayarlanmamış!**")
   if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
    const a = message.guild.channels.find(channel => channel.name === "Server Panel").delete()
      if(!a) return console.log("guildStats")
      const b = message.guild.channels.find(channel => channel.name === `Toplam Üye • ${message.guild.members.filter( member => member.user.bot).size} bot / ${message.guild.memberCount} üye`, true)
      if(!b) return console.log("guildStatsMember")
      const c = message.guild.channels.find(channel => channel.name === `Rekor Online •${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`).delete()
      if(!c) return console.log("guildStatsBot")
     const m = message.guild.channels.find(channel => channel.name === `Bot Sayısı • ${client.guilds.reduce((a, b) => a + b.onlinememberCount, 0).toLocaleString()}`).delete()
      if(!m) return console.log("guildStatsOnlineBot")
      const d = message.guild.channels.find(channel => channel.name === `Toplam Kanal: ${client.channels.size.toLocaleString()}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!d) return console.log("guildStatsChannel")
      message.channel.send("**Kanallar Temizlendi!**")
    }
  if (command === "serverpanel") {
  if (message.guild.channels.find(channel => channel.name === "Server Panel")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`**Server Panel Odalarının Kurulumunun Başlamasını İstiyorsanız 'başlat Yazınız!'**`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
      message.channel.awaitMessages(response => response.content === 'başlat', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Server Panel', 'category', [{
  id: message.guild.id,
  deny: ['SPEAK'],
  deny: ['CONNECT']  
}]);
        
 message.guild.createChannel(`Toplam Üye • ${message.guild.memberCount}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Server Panel")));
message.guild.createChannel(`Çevrimiçi Üye • Bakımda!`, 'voice')
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "Server Panel")));
message.guild.createChannel(`Botlar •  ${message.guild.members.filter(m => m.user.bot).size}`, 'voice')
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "Server Panel")));
message.guild.createChannel(`Rekor Online • Bakımda!`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Server Panel")));
  message.channel.send("Bot Bilgi Paneli Ayarlandı!")
 
        })    
    
}
});


client.on('ready', () => { // davet takip

  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', async(msg, message, member, guild) => {
    let mute = member.guild.roles.find(r => r.name === "Muted");
   let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
   let süre = db.fetch(`süre_${member.id + member.guild.id}`)
   if (!mutelimi) return;
   if (mutelimi == "muteli") {
   member.addRole(mute.id)
    
   member.send(new Discord.RichEmbed() .setColor('#cd2626') .setAuthor(`Tekrar mutelendin!`) .setDescription(`<@${member.id}>, Muteli olduğun bir sunucudan çıktığın için tekrar muten devam etmekte! Lütfen bitmesini bekle!`) .setFooter(`EBAYNAZEC | Mute Sistemi`))
    setTimeout(function(){
     // message.channel.send(new Discord.RichEmbed() .setColor('#00cd00') .setAuthor(`Mutesi açıldı!`) .setDescription(`<@${member.id}> adlı muteli, süresi bittiği için mutesi açıldı! Umuyoruz ki bir daha yaptığı hatayı yapmaz.`))
   db.delete(`muteli_${member.guild.id + member.id}`)
       member.removeRole(mute.id);
     }, ms(süre));
   }
   })

client.on('guildMemberAdd', async(member) => {
 let mute = member.guild.roles.find(r => r.name === "Muted");
let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`)
let süre = db.fetch(`süre_${member.id + member.guild.id}`)
if (!mutelimi) return;
if (mutelimi == "muteli") {
member.addRole(mute.id)
 
   member.send(new Discord.RichEmbed() .setColor('#cd2626') .setAuthor(`Tekrar mutelendin!`) .setDescription(`<@${member.id}>, Muteli olduğun bir sunucudan çıktığın için tekrar muten verildi! Lütfen bitmesini bekle!`) .setFooter(`EBAYNAZEC | Mute Sistemi`))
    setTimeout(function(){
     // message.channel.send(new Discord.RichEmbed() .setColor('#00cd00') .setAuthor(`Mutesi açıldı!`) .setDescription(`<@${member.id}> adlı muteli, süresi bittiği için mutesi açıldı! Umuyoruz ki bir daha yaptığı hatayı yapmaz.`))
   db.delete(`muteli_${member.guild.id + member.id}`)
       member.removeRole(mute.id);
     }, ms(süre));
   }
   })

client.on('message', async (msg, member, guild) => {
  let i = db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm Selam, hoşgeldin! :wave:');
      }
      }
    });

client.on('message', async (msg, member, guild) => {
  let i = db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'selam') {
        msg.reply('Aleyküm Selam, hoşgeldin! :wave:');
      }
      }
    });


client.on('message', async (msg, member, guild) => {
  let i = db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sea') {
        msg.reply('Aleyküm Selam, hoşgeldin! :wave:');
      }
      }
    });


client.on('message', async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'selamın aleyküm') {
        msg.reply('Aleyküm Selam, hoşgeldin! ^^');
      }
      }
    });

client.on('message', async (msg, member, guild) => {
  let i = db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'selamınaleyküm') {
        msg.reply('Aleyküm Selam, hoşgeldin! :wave:');
      }
      }
    });

client.on('message', async (msg, member, guild, message) => {
  let i = db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'selamunaleyküm') {
        msg.reply('Aleyküm Selam, hoşgeldin! :wave:');
      }
      }
    });






client.login(ayarlar.token);