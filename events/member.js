const { Client } = require("discord.js");
const client = require("../index.js");
const config = require("../util/conf/botconfig.json");

client.on("guildMemberAdd", async (member, guild) => {
  if (`${config.ServerBlacklisted}`.includes(member.id)) {
    // If we wanna add an automatic quarantining of a blacklisted user itll go here
  }
});

client.on("guildMemberRemove", async (member, guild) => {});
