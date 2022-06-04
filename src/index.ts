import { Message, Client, Intents } from "discord.js";

const { prefix, token } = require("../config.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once("ready", () => {
  console.log("Bot is online");
});

client.on("messageCreate", async (message: Message) => {
  const { author, content } = message;
  if (author.bot || !content.startsWith(prefix)) return;

  const command = content.replace(prefix, "");
  if (command === "ping") {
    message.channel.send("Pong!");
  }
});

client.login(token);
