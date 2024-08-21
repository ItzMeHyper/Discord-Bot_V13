const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'avatar',
    aliases: ['av'],
    cooldown: 5,
    run: async (client, message, args, discord, Discord) => {
        let Target = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
        let avatar = Target.avatarURL({ size: 256, dynamic: true });

        const avatarEmbed = new MessageEmbed()
            .setTitle(`${Target.tag}'s Avatar`)
            .setImage(avatar)
            .setColor("RANDOM")
            .setFooter({
                text: `Requested by ${message.author.tag}`,
                iconURL: message.author.avatarURL()
            })
            .setTimestamp();
        message.reply({ embeds: [avatarEmbed] }).then(message => setTimeout(() => message.delete(), 10000));
        client.channels.cache.get('998279325600186458').send(`**${message.author.tag} Requested ${Target.tag}'s Avatar.. And provided ${Target.tag}'s avatar**`);
    },
};