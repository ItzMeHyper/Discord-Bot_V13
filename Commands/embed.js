const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js")
module.exports = {
	name: "embed",
	aliases: ['embtst', 'emb'],
	description: "Shows info about a server",
	usage: ".embedtest",

	run: async (client, message, args, embed, discord, Discord) => {
		// inside a command, event listener, etc.
			const exampleEmbed = new MessageEmbed()
				.setColor('\RANDOM')
				.setTitle('Some title')
				.setURL('https://discord.js.org/')
				.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
				.setDescription('Some description here')
				.setThumbnail('https://i.imgur.com/AfFp7pu.png')
				.addFields(
					{ name: 'Regular field title', value: 'Some value here' },
					{ name: '\u200B', value: '\u200B' },
					{ name: 'Inline field title', value: 'Some value here', inline: true },
					{ name: 'Inline field title', value: 'Some value here', inline: true },
				)
				.addField('Inline field title', 'Some value here', true)
				.setImage('https://i.imgur.com/AfFp7pu.png')
				.setTimestamp()
				.setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() });

			message.channel.send({ embeds: [exampleEmbed] });

		
	},
};

