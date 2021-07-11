import EnvUtils from './utils/EnvUtils.js'
import Discord from 'discord.js'

const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});


client.login(EnvUtils.getEnv(EnvUtils.DISCORD_BOT_TOKEN));