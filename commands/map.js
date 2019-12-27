const Command = require("../base/Command.js");
Discord = require("discord.js");

class Map extends Command {
	constructor(client) {
		super(client, {
			name: "map",
			description: "posts image of requested map",
			dirname: __dirname,
			enabled: true
		});
	}

	async run(message, args, data) {
		// fetching images and logic happens here
	}
}

module.exports = Map
