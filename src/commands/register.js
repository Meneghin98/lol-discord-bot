const getSummoner = require('../riotapi/summoner.js')
const getIconUrl = require('../riotapi/icon.js')
const { MessageEmbed } = require('discord.js')
const { MessageButton, MessageActionRow } = require("discord-buttons");

module.exports = {
    commands: ['track'],
    expectedArgs: '<lol_name>',
    minArgs: 1,
    callback: async (message, arguments, text) => {

        const summoner = await getSummoner(text);
        const icon = await getIconUrl(summoner.profileIconId);

        const embed = new MessageEmbed()
        .setTitle("Is this your account?")
        .setColor("1770ff")
        .setThumbnail(icon)
        .addFields({
            name: 'Name',
            value: summoner.name,
            inline: true,
        },{
            name: 'level',
            value: summoner.summonerLevel,
            inline: true,
        })

        const okBtn = new MessageButton()
            .setLabel("Yes")
            .setID("okBtn")
            .setStyle("green")
        
        const noBtn = new MessageButton()
            .setLabel("No")
            .setID("noBtn")
            .setStyle("red")

        const btnRow = new MessageActionRow()
        .addComponents(okBtn, noBtn);

        message.channel.send(embed, btnRow)
    }
}