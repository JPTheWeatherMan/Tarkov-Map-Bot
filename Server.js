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

  if(args[0] === 'map'){
    switch(args[1]){
      case 'customs':
        message.channel.send("Customs Map", { files: ["./static/Customs.jpg"] })
        break;
      
      case 'factory':
        message.channel.send("Factory Map", { files: ["./static/Factory.png"] })
        break;
        
      case 'interchange':
        message.channel.send("Interchange Map", { files: ["./static/Interchange.jpg"] })
        break;
      
      case 'labs':
        message.channel.send("Labs Map", { files: ["./static/Labs.jpeg"] })
        break;
      
      case 'reserve':
        message.channel.send("Reserve Map", { files: ["./static/Reserve.jpg"] })
        break;
      
      case 'shoreline':
        message.channel.send("Shoreline Map", { files: ["./static/Shoreline.jpg"] })
        break;
      
      case 'woods':
        message.channel.send("Woods Map", { files: ["./static/Woods.jpg"] })
        break;

      default:
        message.channel.send("Sorry, map not found. Try -tarkov help")
        break;
      }
  }

  if(args[0] === 'hideoutreqs'){
    message.channel.send("Hideout Requirements", { files: ["./static/Hideout-reqs.jpg"] })
  }
});

client.login(process.env.TOKEN);