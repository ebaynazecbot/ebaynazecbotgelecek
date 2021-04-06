const Discord = require('discord.js');
const database = require('quick.db');
const db = require('quick.db');
module.exports = async message => {

  
  
  let prefix = 'e!'// sizin prefixiniz ne ise onu yazın
  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

  const prefixler = await database.fetch(`prefixes.${message.guild.id}`);
  if(prefixler && prefixler.length >= 1) {
  prefixler.some(c => {
  if(message.content.startsWith(c)) prefix = c;
  });
  };

  if (message.content.startsWith(prefix)) {
  var command;
  var params;
  if(prefix.includes(' ')) {
  command = message.content.split(' ')[1];
  params = message.content.split(' ').slice(2);
  } else {
  command = message.content.split(' ')[0].slice(prefix.length);
  params = message.content.split(' ').slice(1);
  }
  
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
    
  if (cmd) {
    
    if (db.get(`user_${message.author.id}.şartlars`) != 'kabul edilmiş') {
      const warningEmbed = new Discord.RichEmbed()
      .setColor('RED')
      .setDescription(`**Ops! Bu botu kullanabilmek için şartları onaylamanız gerekmektedir.**\n\n**📘** butonuna basarak botun kullanım şartlarına bakabilirsin.`)

      const termsOfService = new Discord.RichEmbed()
      .setColor('RED')
      .setDescription(`
      1) Botu kötü amaçlar için kullanmayacağım.
      2) Botta açık bulduğumda hemen onu bildireceğim.
      3) Bottan gelecek her türlü mesajları kabul ediyorum.(sadece bilgilendirme için kullanılacaktır.)
      4) Bu sözleşmeye uymamam halinde gelecek olan cezalardan ben sorumluyum.
      `)
      .setTitle(`${client.user.username} | Kullanım Şartları`);

      return message.channel.send(warningEmbed).then(async rifleman => {
        await rifleman.react('📘');
        await rifleman.awaitReactions((youth, anasia) => youth.emoji.name == '📘' && anasia.id == message.author.id, { max: 1 })
        .then(async () => {
          await rifleman.edit(termsOfService).then(async leavemealone => {
            await leavemealone.react('✅');
            await leavemealone.awaitReactions((youth, anasia) => youth.emoji.name == '✅' && anasia.id == message.author.id, { max: 1 })
            .then(async () => {
              await rifleman.edit(termsOfService.setDescription('**Kullanım şartlarını kabul ettiniz. Artık botu kullanabilirsiniz!**'));
              await db.set(`user_${message.author.id}.şartlars`, 'kabul edilmiş');
            });
          });
        });
      })
    };
    
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
  }

};