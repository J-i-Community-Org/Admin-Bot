const { MessageEmbed } = require("discord.js");
const client = require("../index.js");
const config = require("../util/conf/botconfig.json");
const ms = require("ms");

const prefix = config.prefix;
const devID = config.devID;

console.log("hey");

client.on("MessageCreate", async (message) => {
  console.log("it worked");
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (!message.guild) {
    return; // If we were to make modmail we would do it here.
  } else {
    if (
      [`<@${client.user.id}>`, `<!@${client.user.id}>`].includes(
        message.content,
      )
    ) {
      return message.reply({ content: `Hello, use ${prefix}help for help.` });
    }

    const args = message.content.slice(defaultPrefix.length).trim().split(
      / +/g,
    );
    const cmd = args.shift().toLowerCase();

    if (cmd.length == 0) return;
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) {
      if (`${message.author.id}`.includes(config.blacklisted)) return;
      command.run(client, message, args);
    }
  }
});
