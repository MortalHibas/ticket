const Discord = require('discord.js');
  const db = require("croxydb")

  exports.run = async (client, message, args) => {// King Creative
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(`   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
    let log = message.mentions.channels.first()
    if(!log) return message.reply({content: "> Üzgünüm Bir Kanal Belirtmen Gerekiyor."})
    
    
    
  message.reply("Log kanalı başarıyla ayarlandı!")
  // King Creative
    db.set(`log_${message.guild.id}`, log.id)
    
  
  
  
}
exports.conf = {// King Creative
  aliases: []
};

exports.help = {// King Creative
  name: "ticket-log"
};

  