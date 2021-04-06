const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let pages = [
              '<a:pembekalp:802935575064608788> Duygular <a:pembekalp:802935575064608788>\n\n\n<:yesilok:797803697467817994>**e!öp @öpülecekkisi**: Seçtiğin kişiyi öpersin.\n<:yesilok:797803697467817994>**e!kız @kızılacakkisi**: Seçtiğin kişiye kızarsın.\n<:yesilok:797803697467817994>**e!özürdilerim @özürdilenecekkisi**: Seçtiğin kişiden özür dilersin.\n<:yesilok:797803697467817994>**e!tebriket @tebrikedilecekkisi**: Seçtiğin kişiyi tebrik edersin.\n<:yesilok:797803697467817994>**e!alkışla @alkislanacakkisi**: Seçtiğin kişiyi alkışlarsın.\n<:yesilok:797803697467817994>**e!sarıl @sarılanacakkisi**: Seçtiğin kişiye sarılırsın.\n<:yesilok:797803697467817994>**e!teşekkür @tesekküredilecekkisi**: Seçtiğin kişiye teşekkür edersin.\n<:yesilok:797803697467817994>**e!şansdile @dilenecekkisi**: Seçtiğin kişiye şans dilersin.',

              ];
  let page = 1;


  const embed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapom/attachments/487719679868272689/488329963926192158/image0.png')
    .setFooter(`Ebaynazec | Duygular`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {


      //Filter




    })
};



exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'duygular',
description: 'Yardım Listesini Gösterir',
usage: 'duygular'
};
