const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("replies"),
    async execute(interaction) {
        try
        {
            const client = interaction.client
            interaction.reply("I replied");

            const kanavaid = '1326495057930620981'
            const aloituskanava = interaction.client.channels.cache.get(kanavaid);
            aloituskanava.fetch();
            if (aloituskanava)
                {
                aloituskanava.send('olen paikalla :3')
                }
            else
            {
            console.log('cmoon');
            }
        }
        catch (error)
        {
            console.log(error)
        }
    },
};