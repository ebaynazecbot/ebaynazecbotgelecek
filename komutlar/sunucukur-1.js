const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
  
  
  let açıkmı = await data.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {


      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed() .setColor('#cd2626') .setAuthor(`Ops! Yetkin yok!`) .setDescription(`:x: | ${message.author}, Bu komudu sadece **Yönetici** yetkisine sahip kişiler kullanabilir. Ve sende bu yetki yok!`)); //Yetkisini kontrol ediyoruz
              if (!message.member.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed() .setColor('#cd2626') .setAuthor(`Ops! Yetkim yok!`) .setDescription(`${message.author}, Bu komudu kullanman için benim **Yönetici** yetkisine sahip olmam gerekli! Lütfen yetkiyi verdikten sonra tekrar deneyin!`)); //Botun yetkisi kontrol ediyoruz
      
              var filter = m => m.author.id === message.author.id;
              message.guild.channels.filter(channel => channel.delete()); //Bütün kanalları siliyoruz
      
              //Kategorileri oluşturuyoruz
              message.guild.createChannel("--BİLGİ--", {
                  type: "category"
              }).then(c => {
                  var bilgikanallari = c.id;
                  message.guild.createChannel("--YAZI KANALLARI--", {
                      type: "category"
                  }).then(c => {
                      var yazıkanallari = c.id;
                      message.guild.createChannel("--SES KANALLARI--", {
                          type: "category"
                      }).then(c => {
                          var seskanallari = c.id;
                          //Kanalları oluşturuyoruz
                          message.guild.createChannel("📗kurallar📗", {
                              type: "text",
                              parent: bilgikanallari
                          })
                          message.guild.createChannel("📢duyurular📢", {
                              type: "text",
                              parent: bilgikanallari
                          })
      
                          message.guild.createChannel("💬genel-sohbet💬", {
                              type: "text",
                              parent: yazıkanallari
                          })
                          message.guild.createChannel("💬genel-sohbet2💬", {
                              type: "text",
                              parent: yazıkanallari
                          })
                          message.guild.createChannel("📷foto-sohbet📷", {
                              type: "text",
                              parent: yazıkanallari
                          })
                          message.guild.createChannel("📷foto-sohbet2📷", {
                              type: "text",
                              parent: yazıkanallari
                          })
                          message.guild.createChannel("🎮oyun-sohbet🎮", {
                              type: "text",
                              parent: yazıkanallari
                          })
                          message.guild.createChannel("🎮oyun-sohbet2🎮", {
                              type: "text",
                              parent: yazıkanallari
                          })
                          message.guild.createChannel("🤖bot-kullanım🤖", {
                              type: "text",
                              parent: yazıkanallari
                          })
                          message.guild.createChannel("🤖bot-kullanım2🤖", {
                              type: "text",
                              parent: yazıkanallari
                          })
                          message.guild.createChannel("💬diğer💬", {
                              type: "text",
                              parent: yazıkanallari
                          })
                          message.guild.createChannel("💬diğer2💬", {
                              type: "text",
                              parent: yazıkanallari
                          })
      
                          message.guild.createChannel("💬Sohbet 1💬", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("💬Sohbet 2💬", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("💬Sohbet 3💬", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("🎵Müzik 1🎵", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("🎵Müzik 2🎵", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("🎵Müzik 3🎵", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("🎮Oyun 1🎮", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("🎮Oyun 2🎮", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("🎮Oyun 3🎮", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("Diğer 1", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("Diğer 2", {
                              type: "voice",
                              parent: seskanallari
                          })
                          message.guild.createChannel("Diğer 3", {
                              type: "voice",
                              parent: seskanallari
                          })

                          message.guild.createRole({
                            name: '👑・Kurucu',
                            color: '#ff0000',
                            permissions: [
                                "ADMINISTRATOR"
                        ]
                          })

                          message.guild.createRole({
                            name: '🔥・Admin',
                            color: '#030000',
                            permissions: [
                                "MANAGE_GUILD",
                                "MANAGE_ROLES",
                                "MUTE_MEMBERS",
                                "DEAFEN_MEMBERS",
                                "MANAGE_MESSAGES",
                                "MANAGE_NICKNAMES",
                                "KICK_MEMBERS"
                        ]
                          })

                          message.guild.createRole({
                            name: '🎮・Oyuncu',
                            color: 'BLUE',
                            permissions: [
                                "SEND_MESSAGES",
                                "CREATE_INSTANT_INVITE",
                                "ADD_REACTIONS",
                                "VIEW_CHANNEL",
                                "ATTACH_FILES",
                                "EMBED_LINKS",
                                "READ_MESSAGE_HISTORY",
                                "CONNECT",
                                "SPEAK"

                        ]
                          })
      
                      });
                  });
message.owner("Gerekli Odalar Kuruldu!")
              });

} else { return message.channel.send(new Discord.RichEmbed() .setColor('#ee2c2c') .setAuthor(`Ops! Premium yok!`) .setDescription(`:x: | ${message.author}, kullanmaya çalıştığın komut bir premium komuttur. Ve bu sunucuda premium yok.\n<a:elmas:814097615964209212> | Premium hakkında bilgi için **e!premium** yazmanız yeterlidir.`)) }
 
  
  
};
        exports.conf = {
          enabled: true,
          guildOnly: false,
          aliases: [],
          permLevel: 0
        };
        
        exports.help = {
          name: "oyun-sunucusu-kur",
          description: "Botun Bilgilerini Gösterir.",
          usage: "istatistik"
        };