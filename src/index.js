const { Constants } = require("discord.js");
const { PRESENCE_UPDATE, CLIENT_READY } = Constants.Events;
const client = require("./client.js");
const command = require("./command.js");

client.on(CLIENT_READY, () => {
  console.log("The client is ready!");

  command.loadCommands("commands");
  command.listen();
});

client.on(PRESENCE_UPDATE, (oldPresence, newPresence) => {
  console.log(newPresence.user.username, newPresence.activities);
});
