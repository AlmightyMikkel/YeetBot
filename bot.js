const Discord = require("discord.js");
const client = new Discord.Client;
const serverInfo = require("./serverinfo.js");
const prefix = serverInfo.prefix;
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log("Boop");
})
