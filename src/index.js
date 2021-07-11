import EnvUtils from './utils/EnvUtils.js'
import {Client, Constants} from 'discord.js'
const {PRESENCE_UPDATE, CLIENT_READY} = Constants.Events;

const client = new Client();

client.on(CLIENT_READY, () => {
	client.guilds.cache.forEach(createBotChannel)
});

// client.on(PRESENCE_UPDATE, (a, b) => {
// 	console.log(a, b);
// });

client.login(EnvUtils.getEnv(EnvUtils.DISCORD_BOT_TOKEN));

function createBotChannel(guild){
	const BOT_CHANNEL_NAME = "League bets";

	const channels = guild.channels.cache.filter(c => c.name === BOT_CHANNEL_NAME)

	if(channels.size == 0){
		// guild.createChannel(BOT_CHANNEL_NAME, 'text')
		guild.channels.create(BOT_CHANNEL_NAME)
	} else {
		console.log("channel already exists")
	}
}