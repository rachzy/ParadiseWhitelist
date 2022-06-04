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
  try {
      const commandExec = require(`./commands/${command}`);
      commandExec.run(client, message);
  } catch(err: any) {
      if(err.code === "MODULE_NOT_FOUND") return;
      console.log(err);
      message.reply("Desculpe, ocorreu um erro ao executar esse comando");
  }
});

client.login(token);
