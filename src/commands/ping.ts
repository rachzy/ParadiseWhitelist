import { Client, Message } from "discord.js";

module.exports.run = async(client: Client, message: Message) => {
    if(!message) return;
    message.reply("Pong!");
}
