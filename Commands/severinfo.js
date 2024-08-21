
const Discord = module.require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "servers",
  category: "utility",
  description: "Shows info about a server",
  usage: "[command]",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    //command
    const mention = message.member;
    
    const filterLevels = {
        DISABLED: 'Off',
        MEMBERS_WITHOUT_ROLES: 'No Role',
        ALL_MEMBERS: 'Everyone'
    };
    const afk =
      message.guild.afkChannel === null ? "`None`" : message.guild.afkChannel;
    const servericon = message.guild.iconURL;
    const verifLevels = {
      NONE: "None",
      LOW: "Low",
      MEDIUM: "Medium",
      HIGH: "(╯°□°）╯︵  ┻━┻ (High)",
      VERY_HIGH: "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻ (Very High)",
    };
    const region = {
      brazil: "Brazil",
      "eu-central": "Central Europe",
      singapore: "Singapore",
      "us-central": "U.S. Central",
      sydney: "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      london: "London",
      amsterdam: "Amsterdam",
      hongkong: "Hong Kong",
      russia: "Russia",
      southafrica: "South Africa",
      india: "India",
    };


    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;
    const serverembed = new Discord.MessageEmbed()
    .setDescription(`**Server Info**`)
      .setAuthor({name: `${message.guild.name}`, iconURL: message.guild.iconURL()})
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .addField(
        `General Info`,
        `Owner: ${message.guild.owner} \nRegion: \`${
          region[message.guild.region]
        }\` \nVerification Lvl: \`${
          verifLevels[message.guild.verificationLevel]
        }\``
      )
      .addField(
        `Overview`,
        `Total Channels: \`${
          message.guild.channels.cache.size
        }\` \nText Channels: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_TEXT").size
        }\` \nVoice Channels: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_VOICE").size
        }\` \nAFK Channel: ${afk} \nAFK Timeout: \`${
          message.guild.afkTimeout
        } sec\` \nTotal Roles: \`${
          message.guild.roles.cache.size
        }\` \nTotal Emojis: \`${message.guild.emojis.cache.size}\``
      )
    //.addField('General', [
     //   `**Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
     //   '\u200b'
    //])
    .addField('General', [
        `**Name:** ${message.guild.name}`,
        `**ID:** ${message.guild.id}`,
        `**Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
        `**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
        `**Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
        `**Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`,
        '\u200b'
    ])
    .addField('Statistics', [
        `**Role Count:** ${roles.length}`,
        `**Emoji Count:** ${emojis.size}`,
        `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
        `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
        `**Member Count:** ${message.guild.memberCount}`,
        `**Humans:** ${members.filter(member => !member.user.bot).size}`,
        `**Bots:** ${members.filter(member => member.user.bot).size}`,
        `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
        `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
        `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
        '\u200b'
    ])
    .addField('Presence', [
        `**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
        `**Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
        `**Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
        `**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
        '\u200b'
    ])
    .addField(`Roles [${roles.length - 1}]`, roles.join(', '))

      .addField(
        `Member Info`,
        `Total Members: \`${message.guild.memberCount}\` \nHumans: \`${
          message.guild.members.cache.filter((member) => !member.user.bot).size
        }\` \nBots: \`${
          message.guild.members.cache.filter((member) => member.user.bot).size
        }\``
      )
      .addField(
        `Misc. Info`,
        `You Joined on: \n\`${moment(mention.joinedAt).format(
          "dddd, MMMM Do YYYY, h:mm:ss A"
        )}\` \nCreated On: \n\`${moment(message.guild.createdAt).format(
          "dddd, MMMM Do YYYY, h:mm:ss A"
        )}\``
      )
      .setFooter({
        text: `ID: ${message.guild.id}`, iconURL: message.guild.iconURL()
        })
      .setColor("RANDOM")
      .setTimestamp();

    message.channel.send({ embeds: [serverembed] });
  },
};