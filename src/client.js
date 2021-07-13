const {Client} = require( 'discord.js');
const EnvUtils = require('./utils/EnvUtils.js');

const client = new Client();
require('discord-buttons')(client);
client.login(EnvUtils.DISCORD_BOT_TOKEN);

module.exports = client;