exports.run = async (client, message, args) => {
    try {
      let invite = await message.channel.createInvite({
        maxAge: args.age * 60,
        maxUses: args.uses
      });
  
      message.channel.send('<a:onay:797742261424488458> **İşlem başarılı oldu!** <a:onay:797742261424488458> \n'
        + 'Discord sunucunun davet linki alt tarafta mevcuttur. \n\n'
+
        `https://discord.gg/${invite.code}`).catch(e => {
        client.log.error(e);
      });
    }
    catch (e) {
      client.log.error(e);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['create-link', 'createlink', 'sunucudavet', 'davetkur', 'davetlink', 'davetoluştur', 'davet-link' , 'davet-oluştur'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'davet-olustur',
    description: 'Bulunduğunuz sunucunun davet linkini atar.',
    usage: 'davet-olustur'
  };
  
