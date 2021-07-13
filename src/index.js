const { Constants } = require( 'discord.js');
const {PRESENCE_UPDATE, CLIENT_READY} = Constants.Events;
const client = require('./client.js');
const fs = require('fs');
const path = require('path');
const command = require('./command.js');


client.on(CLIENT_READY, () => {
	console.log(client.user.id);
	console.log('The client is ready!')

	const readCommands = (dir) => {
		const files = fs.readdirSync(path.join(__dirname, dir))
		for (const file of files) {
			const stat = fs.lstatSync(path.join(__dirname, dir, file))
			if (stat.isDirectory()) {
				readCommands(path.join(dir, file))
			} else {
				const option = require(path.join(__dirname, dir, file))
				command(option)
			}
		}
	}
	
	readCommands('commands')

	command.listen()
});

client.on(PRESENCE_UPDATE, (oldPresence, newPresence) => {
	console.log(newPresence.user.username, newPresence.activities);
});