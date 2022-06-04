"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const { prefix, token } = require("../config.json");
const client = new discord_js_1.Client({ intents: [discord_js_1.Intents.FLAGS.GUILDS, discord_js_1.Intents.FLAGS.GUILD_MESSAGES] });
client.once("ready", () => {
    console.log("Bot is online");
});
client.on("messageCreate", async (message) => {
    const { author, content } = message;
    if (author.bot || !content.startsWith(prefix))
        return;
    const command = content.replace(prefix, "");
    try {
        const commandExec = require(`./commands/${command}`);
        commandExec.run(client, message);
    }
    catch (err) {
        if (err.code === "MODULE_NOT_FOUND")
            return;
        console.log(err);
        message.reply("Desculpe, ocorreu um erro ao executar esse comando");
    }
});
client.login(token);
