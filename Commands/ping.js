const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: "ping",
    aliases: ['latency', 'lat'],
    description: "Sends the bots current ping",
    usage: '.ping',

    run: async (client, message, args, cmd, Discord) => {

        message.reply("Calculating bots ping...").then((msg) => {
            const ping = msg.CreatedTimestamp - message.CreatedTimestamp
            const pingEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("🎯 Pong!")
                .addField("Bot Latency 🌐 ", `⦿ ${Date.now() - message.createdTimestamp}ms`,)
                .addField("API Latency 🖥️ ", `⦿ ${client.ws.ping}ms`)
                .setFooter({ text: `${message.guild.name}`, iconURL: message.guild.iconURL() })
                  .setTimestamp();
                //message.channel.send({ embeds: [pingEmbed] });
            msg.edit({ content: "✅ - Well this is the current ping!", embeds: [pingEmbed] })

        })
    }
}