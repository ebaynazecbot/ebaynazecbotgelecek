const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
  
  
  let açıkmı = await data.fetch(`premium.${message.guild.id}`)
  if(açıkmı) {


      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed() .setColor('#cd2626') .setAuthor(`Ops! Yetkin yok!`) .setDescription(`:x: | ${message.author}, Bu komudu sadece ``Yönetici`` yetkisine sahip kişiler kullanabilir. Ve sende bu yetki yok!`)); //Yetkisini kontrol ediyoruz
              if (!message.member.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed() .setColor('#cd2626') .setAuthor(`Ops! Yetkim yok!`) .setDescription(`${message.author}, Bu komudu kullanman için benim ``Yönetici`` yetkisine sahip olmam gerekli! Lütfen yetkiyi verdikten sonra tekrar deneyin!`)); //Botun yetkisi kontrol ediyoruz
      
              var filter = m => m.author.id === message.author.id;
              message.guild.channels.filter(channel => channel.delete()); //Bütün kanalları siliyoruz
      
              //Kategorileri oluşturuyoruz
              message.guild.createChannel("・Bilgi Kanalları", {
                  type: "category"
              }).then(c => {
                  var bilgikanallari = c.id;
                  message.guild.createChannel("🔩・Lobi", {
                      type: "category"
                  }).then(c => {
                      var lobi = c.id;
                      message.guild.createChannel("🔊・Ses Kanalları", {
                        type: "category"
                    }).then(c => {
                        var ses = c.id;
                      message.guild.createChannel("🔶・BotList", {
                          type: "category"
                      }).then(c => {
                          var botlist = c.id;
                          //Kanalları oluşturuyoruz
                          message.guild.createChannel("📗・kurallar", {
                              type: "text",
                              parent: bilgikanallari
                          })
                          message.guild.createChannel("📢・duyurular", {
                              type: "text",
                              parent: bilgikanallari
                          })
      
                          message.guild.createChannel("💬・sohbet", {
                              type: "text",
                              parent: lobi
                          })
                          message.guild.createChannel("📷・galeri", {
                              type: "text",
                              parent: lobi
                          })
                          message.guild.createChannel("🤖・bot-komutları", {
                              type: "text",
                              parent: lobi
                          })
                          message.guild.createChannel("💰・owo-komut", {
                              type: "text",
                              parent: lobi
                          })
                          message.guild.createChannel("🎁・çekiliş", {
                              type: "text",
                              parent: bilgikanallari
                          })
                          message.guild.createChannel("📌・davetler", {
                              type: "text",
                              parent: bilgikanallari
                          })
                          message.guild.createChannel("🔶・bot-ekleme-kuralları", {
                              type: "text",
                              parent: botlist
                          })
                          message.guild.createChannel("🔶・bot-ekle", {
                              type: "text",
                              parent: botlist
                          })
                          message.guild.createChannel("🔶・bot-log", {
                              type: "text",
                              parent: botlist
                          })
                          message.guild.createChannel("🔶・bot-sahip", {
                              type: "text",
                              parent: botlist
                          })
      
                          message.guild.createChannel("🔶・bot-test", {
                              type: "text",
                              parent: botlist
                          })
                          message.guild.createChannel("🔶・Bot Test", {
                              type: "voice",
                              parent: botlist
                          })
                          message.guild.createChannel("🔊・ Sohbet", {
                              type: "voice",
                              parent: ses
                          })
                          message.guild.createChannel("🔊・ Sohbet ²", {
                              type: "voice",
                              parent: ses
                          })
                          message.guild.createChannel("🔊・ Sohbet ³", {
                              type: "voice",
                              parent: ses
                          })


                          //roller


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
                                "KICK_MEMBERS",
                                "BAN_MEMBERS"
                        ]
                          })

                          message.guild.createRole({
                            name: '💫・Moderatör',
                            color: '#0067ff',
                            permissions: [
                                "MANAGE_GUILD",
                                "MANAGE_ROLES",
                                "MUTE_MEMBERS",
                                "DEAFEN_MEMBERS",
                                "MANAGE_MESSAGES",
                                "MANAGE_NICKNAMES"
                        ]
                          })

                          message.guild.createRole({
                            name: '💞・Server Booster',
                            color: '#ff00aa',
                            permissions: []
                          })

                          message.guild.createRole({
                            name: '🖥️・Onaylı Geliştirici',
                            color: '#ff00e4',
                            permissions: []
                          })

                          message.guild.createRole({
                            name: '💻・Geliştirici',
                            color: 'BLUE',
                            permissions: []
                          })

                          message.guild.createRole({
                            name: '🖤・Üye',
                            color: '#97a3a1',
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

                          message.guild.createRole({
                            name: '🎀・Onaylı Bot',
                            color: '#ff00fa',
                            permissions: []
                          })

                          message.guild.createRole({
                            name: '📱・Bot',
                            color: 'PURPLE',
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
              });
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
          name: "botlist-sunucusu-kur",
          description: "Botun Bilgilerini Gösterir.",
          usage: "istatistik"
        };