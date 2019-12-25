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

	let prefix = "-tarkov";
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);

	if (!command.startsWith(prefix)) return;

	if (args[0] === "map") {
		switch (args[1]) {
			case "customs":
				message.channel
					.send("Customs Map", { files: ["./static/Customs.jpg"] })
					.catch((error) => console.log(error));
				break;

			case "factory":
				message.channel
					.send("Factory Map", { files: ["./static/Factory.png"] })
					.catch((error) => console.log(error));
				break;

			case "interchange":
				message.channel
					.send("Interchange Map", { files: ["./static/Interchange.jpg"] })
					.catch((error) => console.log(error));
				break;

			case "labs":
				message.channel
					.send("Labs Map", { files: ["./static/Labs.jpeg"] })
					.catch((error) => console.log(error));
				break;

			case "reserve":
				message.channel
					.send("Reserve Map", { files: ["./static/Reserve.png"] })
					.catch((error) => console.log(error));
				break;

			case "shoreline":
				message.channel
					.send("Shoreline Map", { files: ["./static/Shoreline.jpg"] })
					.catch((error) => console.log(error));
				break;

			case "woods":
				message.channel
					.send("Woods Map", { files: ["./static/Woods.jpg"] })
					.catch((error) => console.log(error));
				break;

			default:
				message.channel
					.send("Sorry, map not found. Try -tarkov help")
					.catch((error) => console.log(error));
				break;
		}
	}

	if (args[0] === "hideoutreqs") {
		message.channel
			.send("Hideout Requirements", {
				files: ["./static/Hideout-reqs.jpg"]
			})
			.catch((error) => console.log(error));
	}
});

client.login(process.env.TOKEN);
