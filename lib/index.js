"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
const eris_1 = require("eris");
// Configuration
const config_1 = require("./config");
// Client
const client = new eris_1.CommandClient(config_1.config.token);
// Delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Get All Messsages
function getAllMessages(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const allMessages = yield client.getMessages(config.channelId, config.limit, config.before, config.after, config.around);
        return allMessages;
    });
}
// Publish All Messages
function publishMessages(messages) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const message of messages) {
            yield client.crosspostMessage(config_1.config.getMessageConfig.channelId, message.id);
            console.log(`[+] Published message: ${message.content} by ${message.author.username}#${message.author.discriminator}`);
            yield delay(config_1.config.delayMS);
        }
    });
}
// Commence
function commencePublish() {
    return __awaiter(this, void 0, void 0, function* () {
        const allMessages = yield getAllMessages(config_1.config.getMessageConfig);
        yield publishMessages(allMessages);
    });
}
// On Ready
client.on("ready", () => {
    console.log("Ready. Commencing now...");
    commencePublish();
});
// Connect
client.connect();
//# sourceMappingURL=index.js.map