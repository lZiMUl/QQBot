"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const qq_guild_bot_1 = require("qq-guild-bot");
const getConfig_1 = tslib_1.__importDefault(require("./getConfig"));
class Message {
    channelID;
    config = Object.assign(new getConfig_1.default().parseConfig("default").user, {
        intents: [qq_guild_bot_1.AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],
        sandbox: false,
    });
    server = (0, qq_guild_bot_1.createWebsocket)(this.config);
    client = (0, qq_guild_bot_1.createOpenAPI)(this.config);
    constructor(channelID) {
        this.channelID = new String(channelID).valueOf();
    }
    static addListener(callback) {
        new Message(0).server.addListener("PUBLIC_GUILD_MESSAGES", (data) => callback(data));
    }
    async sendMessage(content) {
        try {
            await this.client.audioApi.postAudio(this.channelID, {
                audioUrl: "http://bing.com",
                text: "nh",
                status: 1,
            });
            await this.client.messageApi.postMessage(this.channelID, {
                content,
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.default = Message;
