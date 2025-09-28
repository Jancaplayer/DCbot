const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("sanohei")
    .setDescription("sanoo hei Jonille, Santulle, tai Lukalle")
    .addStringOption(option => 
        option
            .setName('kenelle')
            .setDescription('k')),


    async execute(interaction) {
        const client = interaction.client
        const option = interaction.options.getString('kenelle');
        var jokuUser
        switch (option.toLowerCase()) {
            case 'jonille':
                jokuUser = joni
                break;
            case 'santulle':
                jokuUser = santtu
                break;
            case 'lukalle':
                jokuUser = luka
                break;
            case 'väinölle':
                jokuUser = väinö
                break;
            default:
                jokuUser = interaction.user.
                break;
        }
        try {
            jokuUser.send(`${interaction.user.username} sanoi sinulle hei!`)
            interaction.reply("dm lähetetty")
        
            const commandUser = interaction.user
            const fs = require('fs')
        fs.readFile('beemovie.txt', (err, inputD) => {
            if (err) throw err;
            const teksti = inputD.toString()
            const tekstit = teksti.split(':')
            for (let i = 0; i < teksti.length; i++) {
                setTimeout(() => {
                    //console.log(`${i}: ${tekstit[i]}`)
                    commandUser.send(tekstit[i])
                }, 1000 * i);
            }
        })
        } catch (error) {
            console.error(error)
        }
    }
}