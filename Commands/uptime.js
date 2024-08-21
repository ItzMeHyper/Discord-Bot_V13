const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js')
module.exports = {
    name: "uptime",
    aliases: ['up'],
    description: "Shows the bots uptime",
    usage: '.uptime',

    run: async (client, message, args, cmd, Discord) => {

        const days = Math.floor(client.uptime / 86400000)
        const hours = Math.floor(client.uptime / 3600000) % 24
        const minutes = Math.floor(client.uptime / 60000) % 60
        const seconds = Math.floor(client.uptime / 1000) % 60
        const milliseconds = parseInt((client.uptime % 1000) / 100)

        const uptimeEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`🖥️ 🌐 - Bot is up for \n\n**\`${days}\`** Days, **\`${hours}\`** Hrs, **\`${minutes}\`** Min, **\`${seconds}\`** Sec, **\`${milliseconds}\`** Ms`)
            //.setDescription(`🖥️ 🌐 - Bot is up for **\`${days}\`** Days, **\`${hours}\`** Hrs, **\`${minutes}\`** Min, **\`${seconds}\`** Sec, **\`${milliseconds}\`** Ms`)
  //.addField("Uptime", days + "d " + hours + "h " + minutes + "m " + seconds + "." + milliseconds + "s", true)
  .setTimestamp()
  .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.avatarURL() });
  message.reply({embeds: [uptimeEmbed]})
  
    }
}