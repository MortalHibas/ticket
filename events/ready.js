const client = require("../index");
const { Collection } = require("discord.js")
const fs = require("fs")
const config = require("../config.js")
let prefix = config.prefix
client.on("ready", () => {
client.user.setActivity(`YouTube King Creative`)

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {// King Creative
if (err) console.error(err);
console.log(`Toplam ${files.length} Komutun Var!`);
files.forEach(f => {// King Creative
let props = require(`../commands/${f}`);
    
console.log(`${props.help.name} Adlı Komut Yüklendi!`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
