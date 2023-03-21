const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
let prefix = config.prefix
exports.run = async (client, message, args) => {// King Creative

    const embed = new EmbedBuilder()
    .setTitle("King Creative - Yardım!")
    .setDescription(`${prefix}ticket-yetkilisi\n${prefix}ticket-oluştur Buton Üzerinde Yazıcak Yazı + Embed Mesaj Yazısı\n${prefix}ticket-log`)
    .setColor("#007fff")
    .setTimestamp()// King Creative
    return message.channel.send({embeds : [embed]});

};
exports.conf = {// King Creative
  aliases: []
};

exports.help = {// King Creative
  name: "yardım"
};
