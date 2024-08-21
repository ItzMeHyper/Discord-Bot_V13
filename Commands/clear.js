const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    description: 'clear messages',
    aliases: ['clr'],
    cooldown: 5,
    run: async (client, message, args, discord, Discord) => {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            const messagecount = parseInt(args[0]) + 1;
            if (isNaN(messagecount)) return message.channel.send(":x: " + "| Please indicate the amount of message that you want to delete.");
            if (messagecount > 100) {
                message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at one time !")
            } else if (messagecount < 2) {
                message.channel.send(":x: " + "| Error, you can only delete between 2 and 100 messages at one time !")
            } else {
            } {
                message.channel.messages.fetch({ limit: messagecount }).then(messages => message.channel.bulkDelete(messages, true));
            }
        } else {
            return message.reply(":x: " + "| You need to be \"ADMINISTRATOR\" to use this command.")
        }
    }
};
  // Comments:
  // messagecount Max amount has been set to 100
  // messagecount Min amount has been set to 2
  // This command is only allowed to be used by Administrators check to learn about role permissions: https://discordjs.guide/popular-topics/permissions.html#roles-as-bot-permissions