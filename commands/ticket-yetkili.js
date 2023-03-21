const Discord = require('discord.js');
  const db = require("croxydb")
// King Creative
  exports.run = async (client, button, args) => {
    if(!button.member.permissions.has("ADMINISTRATOR")) return button.channel.send("Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor!")
// King Creative

      let role = button.mentions.roles.first();
      if (!role)
        return button.reply("**Bir Destek Ekibi Rolü Etiketlemen Gerek!**").catch(() => {})
     
  
          button.react("✅")


.then(async (cs) => {// King Creative
  db.set("destek" + button.guild.id, {// King Creative
    rolID: role.id
  });
    }).catch(() => {})
  
  
  
}
exports.conf = {// King Creative
  aliases: []
};

exports.help = {// King Creative
  name: "ticket-yetkilisi"
};

  