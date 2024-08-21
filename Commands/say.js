module.exports = {
    name: "say",
    description: "Make the bot say your message",

    run: async (client, messageCreate, args) => {
      if (!args.join(" ")) {
        messageCreate.channel.send("Please add some text for me to repeat");
      }
      messageCreate.channel.send(args.join(" "), {
        allowedMentions: { parse: ["users"] },
      });
      message.delete();
    },
  };
  