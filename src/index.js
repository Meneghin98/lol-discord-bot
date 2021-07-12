const EnvUtils = require('./utils/EnvUtils.js');
const {Client, Constants} = require( 'discord.js');
const {PRESENCE_UPDATE, CLIENT_READY} = Constants.Events;

const fs = require('fs');
const path = require('path');
const command = require('./command.js');

const client = new Client();
require('discord-buttons')(client);
client.login(EnvUtils.getEnv(EnvUtils.DISCORD_BOT_TOKEN));

client.on(CLIENT_READY, () => {
	console.log('The client is ready!')

	const readCommands = (dir) => {
		const files = fs.readdirSync(path.join(__dirname, dir))
		for (const file of files) {
			const stat = fs.lstatSync(path.join(__dirname, dir, file))
			if (stat.isDirectory()) {
				readCommands(path.join(dir, file))
			} else {
				const option = require(path.join(__dirname, dir, file))
				command(client, option)
			}
		}
	}
	
	readCommands('commands')
});

client.on(PRESENCE_UPDATE, (oldPresence, newPresence) => {
	console.log(newPresence.user.username, newPresence.activities);
});