// Requirements and Variables
const prefix = "?";
const Discord = require("discord.js")
const path = require('node:path');
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


const fs = require("fs");
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))

for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("messageCreate", message => {
 if(message.content.startsWith(prefix)) { 
   const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
  if(!command) return
  command.run(client, message, args)
 }
})
// Ready Event
client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Testing bot is now online successfully!`);
  client.channels.cache.get('998193228799021166').send('|-------------------𝐁𝐎𝐓 𝐒𝐔𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘 𝐑𝐄𝐒𝐓𝐀𝐑𝐓𝐄𝐃-------------------|');
    await client.guilds.cache
});
client.on("messageCreate", message => {
  if(message.content === "hoi"){
    message.channel.send(helooi)
  }
})

const { SlashCommandBuilder } = require('@discordjs/builders');
const ping2 = require("./Commands/ping2");
//client.on('interactionCreate', interaction => {
	//if (!interaction.isCommand()) return;
	//console.log(interaction);
//});


client.on('messageCreate', message => {
  if (message.content.toLowerCase().includes('hey bot') || message.content.toLowerCase().includes('general kenobi')){
      message.channel.send('Hello there!');
  }
    else if(message.content.toLowerCase().includes('fug') || message.content.toLowerCase().includes('pudding')){
        message.channel.send('Such language is prohibited!');
    }
    else if(message.content.toLowerCase().includes('food') || message.content.toLowerCase().includes('fud')){
      message.channel.send('ok da');
    }


});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: false });
	}
});

client.on('ready', () => {
  console.log('Slash Commands Are Ready')

  const guildId = process.env.guild_id
  const guild = client.guilds.cache.get(guildId)
  let commands

  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }
  commands?.create({
    name: 'tester2',
    description: 'replied with it messages1',
    
  })
    commands?.create({
    name: 'tester1',
    description: 'replied with it messages2',
    
  })
  commands?.create({
    name: 'aboutme',
    description: 'replies with user info',
  })
  commands?.create({
    name: 'server',
    description: 'replies with user info',
  })
  commands?.create({
    name: 'user_ping',
    description: 'tells about user ping',

  })
})

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isCommand()){
      return
    }

    const { commandName, options } = interaction 
    const user = interaction.options.getUser('target');

    if (commandName === 'tester1'){
      interaction.reply({
        content: 'yes tester1'
      })
    }
    if (commandName === 'tester2'){
        interaction.reply({
          content: 'yes tester2'
        })
      }
      if (commandName === 'aboutme'){
        interaction.reply({
          content: `Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`
        })
      }
      if (commandName === 'server'){
        interaction.reply({
          content: `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nOwner Name: ${interaction.guild.ownerID}`
        })
      }
      if (commandName === 'user_ping'){
        interaction.reply({
          content: `🏓Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`
        })
      }
})
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'info') {
		if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target');

			if (user) {
				await interaction.reply(`Username: ${user.username}\nID: ${user.id}`);
			} else {
				await interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
			}
		} else if (interaction.options.getSubcommand() === 'server') {
			await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nOwner name: ${message.guild.owner.user.tag}`);
		}
	}
});


// Bot Login
client.login(`BOT Token`).then(() => {
  client.user.setPresence({ activities: [{ name: 'a random game', type: 'PLAYING' }], status: 'idle' });
//});


//************DISCORD.JS V13 BOTTT**************//
