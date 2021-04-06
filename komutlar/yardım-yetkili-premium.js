const Discord = require('discord.js');
const data = require('quick.db');

exports.run = (client, message, args) => {

  exports.run = async (client, message, args) => {
  
    let prefix = 'e!'
    let sahip = '565536682946985999'
  

    if(args[0] === '1aylık-sa-ver') { //satın alma nedeniyle verildi! (1 Aylık)
      if(message.author.id !== sahip) return;
        
      if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
      let id = args[1]
      if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
      
      if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
      
      if(!client.guilds.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
      let açıkmı = await data.fetch(`premium.${id}`)
      if(açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif.`)
        
      data.set(`premium.${id}`, 'açık')
      message.channel.send(`<a:onay:797742261424488458> | ${client.guilds.get(id).name} isimli sunucu için **1 Aylık Premium** aktif edildi!`)
        
      let owner = client.guilds.get(id).owner;
      owner.send(new Discord.RichEmbed() .setColor('#00bf00') .setAuthor(`Merhaba ${owner.user.username}!`) .setDescription(`**${client.guilds.get(id).name}** adlı sunucunun premiumu aktif edildi! Premium aldığın için teşekkür ederiz. Premium almanla beraber ${client.guilds.get(id).name} sunucunda, **1 Ay** boyunca bütün premium kodları aktif oldu!  Bittikten sonra tekrar isteyebilirsiniz.\n\nDetaylı bilgi/sorun/istek bildirmek için [Destek sunucuma](https://discord.gg/YwkJEdee2J) gelip, Detaylı bilgi/sorun/isteğini bildirebilirsin.`) .setFooter(`EBAYNAZEC | Premium`))
        
      }


      if(args[0] === '3aylık-sa-ver') { //satın alma nedeniyle verildi! (3 Aylık)
        if(message.author.id !== sahip) return;
          
        if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
        let id = args[1]
        if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
        
        if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
        
        if(!client.guilds.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
        let açıkmı = await data.fetch(`premium.${id}`)
        if(açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif.`)
          
        data.set(`premium.${id}`, 'açık')
        message.channel.send(`<a:onay:797742261424488458> | ${client.guilds.get(id).name} isimli sunucu için **3 Aylık Premium** aktif edildi!`)
          
        let owner = client.guilds.get(id).owner;
        owner.send(new Discord.RichEmbed() .setColor('#00bf00') .setAuthor(`Merhaba ${owner.user.username}!`) .setDescription(`**${client.guilds.get(id).name}** adlı sunucunun premiumu aktif edildi! Premium aldığın için teşekkür ederiz. Premium almanla beraber ${client.guilds.get(id).name} sunucunda, **3 Ay** boyunca bütün premium kodları aktif oldu!  Bittikten sonra tekrar isteyebilirsiniz.\n\nDetaylı bilgi/sorun/istek bildirmek için [Destek sunucuma](https://discord.gg/YwkJEdee2J) gelip, Detaylı bilgi/sorun/isteğini bildirebilirsin.`) .setFooter(`EBAYNAZEC | Premium`))
          
        }

        if(args[0] === '1yıllık-sa-ver') { //satın alma nedeniyle verildi! (1 Yıllık)
          if(message.author.id !== sahip) return;
            
          if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
          let id = args[1]
          if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
          
          if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
          
          if(!client.guilds.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
          let açıkmı = await data.fetch(`premium.${id}`)
          if(açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif.`)
            
          data.set(`premium.${id}`, 'açık')
          message.channel.send(`<a:onay:797742261424488458> | ${client.guilds.get(id).name} isimli sunucu için **1 Yıllık Premium** aktif edildi!`)
            
          let owner = client.guilds.get(id).owner;
          owner.send(new Discord.RichEmbed() .setColor('#00bf00') .setAuthor(`Merhaba ${owner.user.username}!`) .setDescription(`**${client.guilds.get(id).name}** adlı sunucunun premiumu aktif edildi! Premium aldığın için teşekkür ederiz. Premium almanla beraber ${client.guilds.get(id).name} sunucunda, **1 Yıl** boyunca bütün premium kodları aktif oldu!  Bittikten sonra tekrar isteyebilirsiniz.\n\nDetaylı bilgi/sorun/istek bildirmek için [Destek sunucuma](https://discord.gg/YwkJEdee2J) gelip, Detaylı bilgi/sorun/isteğini bildirebilirsin.`) .setFooter(`EBAYNAZEC | Premium`))
            
          }


        if(args[0] === 'infinity-sa-ver') { //satın alma nedeniyle verildi! (sınırsız)
          if(message.author.id !== sahip) return;
            
          if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
          let id = args[1]
          if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
          
          if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
          
          if(!client.guilds.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
          let açıkmı = await data.fetch(`premium.${id}`)
          if(açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif.`)
            
          data.set(`premium.${id}`, 'açık')
          message.channel.send(`<a:onay:797742261424488458> | ${client.guilds.get(id).name} isimli sunucu için **Premium** aktif edildi!`)
            
          let owner = client.guilds.get(id).owner;
          owner.send(new Discord.RichEmbed() .setColor('#00bf00') .setAuthor(`Merhaba ${owner.user.username}!`) .setDescription(`**${client.guilds.get(id).name}** adlı sunucunun premiumu aktif edildi! Premium aldığın için teşekkür ederiz. Premium almanla beraber ${client.guilds.get(id).name} sunucunda, **∞** boyunca bütün premium kodları aktif oldu!  Bittikten sonra tekrar isteyebilirsiniz.\n\nDetaylı bilgi/sorun/istek bildirmek için [Destek sunucuma](https://discord.gg/YwkJEdee2J) gelip, Detaylı bilgi/sorun/isteğini bildirebilirsin.`) .setFooter(`EBAYNAZEC | Premium`))
            
          }
  
  
    if(args[0] === 'h-ver') { //Hediye nedeniyle verildi! (1 Aylık)
      if(message.author.id !== sahip) return;
        
      if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
      let id = args[1]
      if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
      
      if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
      
      if(!client.guilds.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
      let açıkmı = await data.fetch(`premium.${id}`)
      if(açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif.`)
        
      data.set(`premium.${id}`, 'açık')
      message.channel.send(`<a:onay:797742261424488458> | ${client.guilds.get(id).name} isimli sunucu için **Premium** aktif edildi!`)
        
      let owner = client.guilds.get(id).owner;
      owner.send(new Discord.RichEmbed() .setColor('#ffff00') .setAuthor(`Merhaba ${owner.user.username}!`) .setDescription(`Kurucumum <@565536682946985999>, size **${client.guilds.get(id).name}** sunucunuza **1 aylık** EBAYNAZEC Premium hediye etti! :gift: Hediye Premium ile beraber ${client.guilds.get(id).name} sunucunda **1 Ay** boyunca bütün premium kodları aktif oldu!\n\nDetaylı bilgi/sorun/istek bildirmek için [Destek sunucuma](https://discord.gg/YwkJEdee2J) gelip, Detaylı bilgi/sorun/isteğini bildirebilirsin.`) .setFooter(`EBAYNAZEC | Premium`))
        
      }
  
    
    if(args[0] === 'bn-gerial') {// bitme nedeniyle geri alındı!
    if(message.author.id !== sahip) return;
      
    if(!args[1]) return message.channel.send(`Bir sunucunun ID (kimlik) numarasını girmeyi dene.`)
    let id = args[1]
    if(isNaN(id)) return message.channel.send(`Sadece sayı girebilirsin.`)
    
    if(id < 15) return message.channel.send(`Girdiğin rakam bir sunucunun ID (kimlik) numarası olmak için çok küçük.`)
      
    if(!client.guilds.get(id)) return message.channel.send(`**${id}** sunucusunu bulamıyorum.`)
    let açıkmı = await data.fetch(`premium.${id}`)
    if(!açıkmı) return message.channel.send(`**${id}** sunucusu için zaten premium aktif değil.`)
      
    data.delete(`premium.${id}`)
    message.channel.send(`<a:onay:797742261424488458> | ${client.guilds.get(id).name} isimli sunucu için **Premium** de-aktif edildi!`)
      
    let owner = client.guilds.get(id).owner;
    owner.send(new Discord.RichEmbed() .setColor('#ff0000') .setAuthor(`Merhaba ${owner.user.username}!`) .setDescription(`**${client.guilds.get(id).name}** adlı sunucunun premiumu bitti! Premium aldığın için teşekkür ederiz. Premiumun bitmesiyle beraber ${client.guilds.get(id).name} sunucunda, bütün premium kodları deaktif oldu! Aktif etmek için <@565536682946985999> ile iletişime geçin!\n\nDetaylı bilgi/sorun/istek bildirmek için [Destek sunucuma](https://discord.gg/YwkJEdee2J) gelip, Detaylı bilgi/sorun/isteğini bildirebilirsin.`) .setFooter(`EBAYNAZEC | Premium`))
      
    }
  
    
    
    
    
  };
};



exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'y-premium',
description: 'Yardım Listesini Gösterir',
usage: 'duygular'
};
