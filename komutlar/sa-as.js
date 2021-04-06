const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {



  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send(':no_entry: Sa-as yazısını açmak için; `e!sa-as aç veya kapat`')

  if (args[0] == 'aç') {

    db.set(`saas_${message.guild.id}`, 'açık')
      message.channel.send(`<a:onay:797742261424488458> | **İşlem Başarılı!** Artık bot, biri sa/sea/selam/selamın aleyküm dediğinde Aleyküm Selam **diyecek!**`)

  }

  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
      message.channel.send(`<a:onay:797742261424488458> | **İşlem Başarılı!** Artık bot, biri sa/sea/selam/selamın aleyküm dediğinde Aleyküm Selam **demeyecek!**`)

  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0

};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'a.sa-as'

};