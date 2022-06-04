"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports.run = async (client, message) => {
    if (!message)
        return;
    message.reply("Pong!");
};
