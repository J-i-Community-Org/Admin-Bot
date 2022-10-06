/*
 * npm install discord.js@14.0.3
 * npm init
 * npm start
 *
 */

/*
  ! Slash Command Setup
   const { REST } = require("@discordjs/rest");
   const { Routes } = require("discord-api-types/v9");
*/
const config = require("./util/conf/botconfig.json");

const { GatewayIntentBits, Client, Partials, Collection } = require(
    "discord.js",
  ),
  client = new Client({
    allowedMentions: {
      parse: ["roles", "everyone", "users"],
      repliedUser: false,
    },
    partials: [Partials.Message, Partials.Channel, Partials.Reaction],
    intents: [
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.GuildBans,
      GatewayIntentBits.GuildIntegrations,
      GatewayIntentBits.GuildWebhooks,
      GatewayIntentBits.GuildInvites,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.GuildMessageTyping,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.DirectMessageReactions,
      GatewayIntentBits.DirectMessageTyping,
    ],
  });

client.commands = new Collection();
client.aliases = new Collection();

require("./util/loaders/loadCommands");
require("./util/loaders/loadEvents");

//const mongoose = require('mongoose');
//mongoose.connect(config.mongoURL, { useUnifiedTopology: true, useNewUrlParser: true }).then(client.logger.log('READY', 'Bot has successfully connected to MongoDB!'));

client.login(config.token);
