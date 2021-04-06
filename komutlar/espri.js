const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = ['Seni görünce; \ngözlerim dolar, \nkulaklarım euro.','Kar üzerinde yürüyen adama ne denir. Karabasan.','Yıkanan Ton’a ne denir? Washington!','Gidenin arkasına bakmayın yoksa geleni göremezsiniz.','+Oğlum canlılara örnek ver. \n-Kedi, köpek. \n+Cansızlara örnek ver. \n-Ölü kedi, ölü köpek.','+Kanka ben banyoya 3 kişi giriyom. \n-Oha nasıl? \n+Hacı, Şakir ve ben. \n-Defol lan!','+Kocanızla ortak özelliğiniz ne? \n-Aynı gün evlendik.','+Evladım ödevini neden yapmadın? \n-Bilgisayarım uyku modundaydı, uyandırmaya kıyamadım.','+Bizim arkadaş ortamında paranın lafı bile olmaz. \n-Niye ki? \n+Çünkü hiç birimizin parası yok.','Annemin bahsettiği elalem diye bir örgüt var illuminatiden daha tehlikeli yemin ederim.','+Acıkan var mı ya? \n-Yok bizde tatlı kan var.','Yılanlardan korkma, yılmayanlardan kork.','+Baykuşlar vedalaşırken ne der? \n-Bay bay baykuş.','Beni Ayda bir sinemaya götürme, Marsta bir sinemaya götür.','Aaa siz çok terlemişsiniz durun size terlik getireyim.','Aklımı kaçırdım, 100.000 TL fidye istiyorum.','İlahi Azrail ... Sen adamı öldürürsün!','Mafya babası olmak için oğlumun adını “Mafya” koydum.','Kim vurduya gittim birazdan gelecem...','GİT’Arı’ getir de biraz şarkı söyleyelim. \n-Abi arı sokmasın!',' Seven unutmaz oğlum, eight unutur.','Haydi Unkapanı’na gidip birkaç kapan kuralım. Belki un yakalarız','Adamın biri güneşte yanmış, ay da düz.','Ben Yedigün içiyorum sen Onbeşgün iç.','Sinemada on dakika ara dedi, aradım aradım açmadı.','Röntgen Filmi çektirdik, yakında sinemalarda.','Geçen gün taksi çevirdim hala dönüyor.','Geçen gün taksi çevirdim hala dönüyor.','Kaba kuvvet uygulama, kap kırılabilir.','Yılanlardan korkma, yılmayanlardan kork.','Bak şu karşıdaki uçak PİSTİ, ama bir türlü temizlemediler.','Adamın biri gülmüş, saksıya koymuşlar.','Adamın biri kızmış istemeye gelmişler. (Nasıl bir yokluktaysa artık)','Ayda 5 milyon kazanma ister misin? \nEvet.  \nO zaman Ay’a git.','Adamın kafası atmış bacakları eşek.','Uzun lafın kısası : U.L.','Sakla samanı, inekler aç kalsın.','Dünya dönermiş ay da köfte…','Bu erikson, başka erik yok.','Top ağlarda, ben ağlamaz mıyım?','Burger King, bende Vezir.','Aaaaa siz çok terlemişsiniz durun size ter-lik getiriyim.','Kalbinin sesini dinle güzelse kaset yap.','Bağırsaklarda yaşayan tenya kurtları bağırsakta yaşarlar bağırmasak da yaşar.','Çiçeğin biri solmuş diğeri de sağ.'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espiri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Espri yapar.',
  usage: 'espri'
};