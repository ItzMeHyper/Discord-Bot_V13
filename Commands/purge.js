const Discord = require('discord.js');

module.exports = {
  name: "purge",
  description: "delete the given number of messages",
  aliases: ['prg'],
  cooldown: 5,

  run: async (client, message, args) => {
    const fetched = message.channel || message.mentions.members.first();
    let messageArray = message.content.split(" ");
    const amount = parseInt(args[0]) + 1;
    if (message.member.permissions.has("ADMINISTRATOR")) {
      //const fetched = message.channel || message.mentions.members.first();
      let messageArray = message.content.split(" ");
      const amount = parseInt(args[0]) + 1;

      if (isNaN(amount)) {
        return message.channel.send(
          `${message.author.username}, :x: ` + `| Please indicate the amount of message that you want to delete.`
        );
      } else if (amount <= 1 || amount > 100) {
        return message.channel.send(
          `${message.author.username}, :x: ` + `| Error, you can only delete between 2 and 100 messages at one time !`
        );
      }
    } else {
      return message.reply(":x: " + "| You need to be \"ADMINISTRATOR\" to use this command.")
    }
    fetched.bulkDelete(amount, true);
    fetched.bulkDelete(amount);
  },
};