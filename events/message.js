const { EmbedBuilder } = require("discord.js");
var config = require("../config.js");
const client = require("..");
const prefix = config.prefix;

client.on("messageCreate", async (message) => {// King Creative
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {// King Creative
    cmd.run(client, message, params);
  }

});
