const client = require("../index.js");
const config = require("../util/conf/botconfig.json");
const statuses = config.statuses;
//? const chalk = require('chalk');

client.on("ready", () => {
  console.log("Bot has logged in");

  let index = 0;

  setInterval(() => {
    if (index === statuses.length) index = 0;
    const status = statuses[index];
    client.user.setActivity(status);
    index++;
  }, 5000);
});
