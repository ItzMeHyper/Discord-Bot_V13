const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Discord = require("discord.js");
let os = require("os");
let cpuStat = require("cpu-stat");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = {
  name: "stats",
  descriptiom: "Get Inifnity's Stats",
  run: async (client, message, args, level) => {
    // eslint-disable-line no-unused-vars
    try {
      const cmdFiles = await readdir("./Commands/");
      let cpuLol;
      cpuStat.usagePercent(function (err, percent, seconds) {
        if (err) {
          return console.log(err);
        }
        const duration = moment
          .duration(client.uptime)
          .format(" D [days], H [hrs], m [mins], s [secs]");
        let boticon = client.user.displayAvatarURL();
        const statsEmbed = new Discord.MessageEmbed()
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL()
          })
          .setDescription("**Bot's Stats:**")
          .setTimestamp()
          .setThumbnail(boticon)
          .setColor("RANDOM")
          //.setImage(boticon)
          .setFooter({
            text: `Requested by ${message.author.username} #${message.author.discriminator}`,
            iconURL: message.author.avatarURL()
          })
          .addField("💾 **Memory usage**", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(
            os.totalmem() /
            1024 /
            1024
          ).toFixed(2)} MB`,
            true
          )
          .addField("💽 **CPU usage**", `\`${percent.toFixed(2)}%\``, true)
          .addField("🖥️ **CPU**", `\`\`\`md\n${os.cpus().map((i) => `${i.model}`)[0]}\`\`\``, true)
          .addField("🖥️ System", `\`${os.arch()}\``, true)
          .addField("🖥️ Platform", `\`\`${os.platform()}\`\``, true)
          .addField("👥 Users", `${client.users.cache.size}`, true)
          .addField("Servers", `${client.guilds.cache.size}`, true)
          .addField("Channels", `${client.channels.cache.size}`, true)
          .addField("Commands Count", "``143``", true)
          .addField("📚Library", `\`Discord.js\``, true)
          .addField("📚Library Ver", `v${version}`, true)
          .addField("🧾 Node Ver", `${process.version}`, true)
          .addField("⏱Uptime", `${duration}`, true)
          .addField("🏓⏲️Ping", `${Math.round(client.ws.ping)}ms`, true)
          //.addField(":stopwatch: Server uptime", `${prettyMs(oss.sysUptime())}`, true)
          .addField("🗓️ Created On", `${client.user.createdAt}`, true);
        message.channel.send({ embeds: [statsEmbed] });
      });
    } catch (err) {
      const errorlogs = client.channels.cache.get("998166393537183785");
      message.channel.send(
        `Whoops, We got a error right now! This error has been reported to Support center!`
      );
      errorlogs.send(`Error on stats commands!\n\nError:\n\n ${err}`);
    }
  },
};