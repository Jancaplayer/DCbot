const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("template")
        .setDescription("template"),
    async execute(interaction) {
        const client = interaction.client
        console.log("this was a template");
    },
}