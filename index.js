const {Client, Events, Collection, GatewayIntentBits} = require('discord.js');
const {token} = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const client = new Client({intents: [GatewayIntentBits.Guilds] | [GatewayIntentBits.MessageContent] | [GatewayIntentBits.GuildMessages] | [GatewayIntentBits.DirectMessages] | [GatewayIntentBits.DirectMessageTyping]});
client.commands = new Collection();

var servu
var santtu
var joni
var luka
var väinö
var juuso
var oskari

const commandsPath = path.join(__dirname, 'commands');
const contentPath = path.join(__dirname, 'content');

const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    console.log(`yritetään löytää ${file} osoitteesta ${filePath}`)
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction.commandName);

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.warn(`no command for ${interaction.commandName} :(`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'Nyt ei toiminut', flags: MessageFlags.Ephemeral });
		} else {
			await interaction.reply({ content: 'Nyt ei toiminut', flags: MessageFlags.Ephemeral });
		}
    }
});

client.once(Events.ClientReady, async c => {
    servu = client.guilds.cache.get('1150106743288909824')
    santtu = await client.users.fetch('853668920224120832')
    joni   = await client.users.fetch('400642220014698497')
    luka   = await client.users.fetch('832885355215716383')
    väinö  = await client.users.fetch('1068405982356586566')
    //juuso = await client.users.fetch('448213888094175254')
    //oskari = await client.users.fetch('875082412802068501')

    console.log(`logged in as ${c.user.username}`);
    console.log('this is a log')
    console.warn('this is a warn')
    console.error('this is an error')
})

let talkers = []
client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;
    console.log(`${message.author.username} sanoi ${message.content}`);
    const messageCont = message.content.toLowerCase().split(' ');

    if (messageCont.includes('nappula')) {
        const endingWords = ["lopeta", "stop", "pysäytä", "hiljaa", "hiljene", "heippa", "hyvästi", "keskeytä", "loppu", "end", "uwu", "häivy"]
        const startingWords = ["hei", "terve", "aloita", "kuuntele", "start", "moi", "moro"]
        if (endingWords.some(vaihtoehto => messageCont.includes(vaihtoehto))) {
            const index = talkers.indexOf(message.author);
            if (index >= 0) {
                talkers.splice(index);
                message.react('👋');
            }
        }
        else if (startingWords.some(vaihtoehto => messageCont.includes(vaihtoehto))) {
            talkers.push(message.author)
            message.react('❕');
        }
        else {
            message.channel.send('Olen kyl paikalla mutta en ymmärrä mitä haluat');
        }
    }


    else if (message.content === 'bee movie script' && talkers.includes(message.author)) {
        message.react('🐝');
        const beechannel = client.guilds.cache.get('1326495057095823370').channels.cache.get('1326823675239993396')
        fs.readFile(path.join(contentPath, 'beemovie.txt'), (err, inputD) => {
            if (err) throw err;
            const teksti = inputD.toString()
            const tekstit = teksti.split(':')
            for (let i = 0; i < teksti.length; i++) {
                setTimeout(() => {
                    beechannel.send(tekstit[i])
                }, 2000 * i);
            }
        })
    }


    else if (messageCont[0] == 'sano' && talkers.includes(message.author)) {
        switch (messageCont[1]) {
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
                jokuUser = message.author
                break;
        }

        try {
            let aloitus = `${message.author} Sanoo: `
            let viestisisältö = messageCont;
            viestisisältö.shift();
            viestisisältö.shift();

            if (messageCont[messageCont.length - 1] === 'anonyymisti') {
                viestisisältö.pop();
                aloitus = ''
            }
            const viesti = viestisisältö.join(' ');
            jokuUser.send(aloitus + viesti);
        } catch (error) {
            console.error(error);
        }
    }


    else if (message.content === 'ärsytä Santtua' && message.author === luka) {
        
        try {
            santtu.send("glory to CCP Zǎoshang hǎo zhōngguó xiànzài wǒ yǒu BING CHILLING 🥶🍦 wǒ hěn xǐhuān BING CHILLING 🥶🍦 dànshì sùdù yǔ jīqíng 9 bǐ BING CHILLING 🥶🍦 sùdù yǔ jīqíng sùdù yǔ jīqíng 9 wǒ zuì xǐhuān suǒyǐ…xiànzài shì yīnyuè shíjiān zhǔnbèi 1 2 3 liǎng gè lǐbài yǐhòu sùdù yǔ jīqíng 9 ×3 bùyào wàngjì bùyào cu òguò jìdé qù diànyǐngyuàn kàn sùdù yǔ jīqíng 9 yīn wéi fēicháng hǎo diànyǐng dòngzuò fēicháng hǎo chàbùduō yīyàng BING CHILLING 🥶🍦zàijiàn 🥶🍦新春けもケット11申し込みました！今度こそリベンジします！受かればクッパ様のマッスルグロース本📕がでま")
        } catch (error) {
            console.error(error)
        }
    }
})

client.login(token);