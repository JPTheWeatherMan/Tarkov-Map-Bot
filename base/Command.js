const path = require("path");

module.exports = class Command {
	constructor(client, { name = null, enabled = true }) {
		this.client = client;
		this.help = { name, description };
	}
};
