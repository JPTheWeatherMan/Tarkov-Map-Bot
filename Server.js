require("dotenv").config();
const Discord = require("discord.js");

const client = new Discord.Client();

client.on("ready", async () => {
	console.log(`Logged in as ${client.user.tag}`);
});

client.on("rateLimit", async (limit) => {
	console.log(limit);
});

client.on("error", async (error) => {
	console.log(error);
});

client.on("message", (message) => {
	if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = "-tarkov"
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;
});

client.login(process.env.TOKEN);