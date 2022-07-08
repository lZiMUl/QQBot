"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const qq_guild_bot_1 = require("qq-guild-bot");
const getConfig_1 = tslib_1.__importDefault(require("./getConfig"));
class Message {
    channelList = [];
    config = Object.assign(new getConfig_1.default().parseConfig("default").user, {
        intents: [qq_guild_bot_1.AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],
        sandbox: false,
    });
    server = (0, qq_guild_bot_1.createWebsocket)(this.config);
    client = (0, qq_guild_bot_1.createOpenAPI)(this.config);
    constructor(channelList) {
        if (channelList)
            Array.from(new Set(channelList)).forEach((item) => this.channelList.push(new String(item).valueOf()));
    }
    static addListener(callback) {
        new Message().server.addListener("PUBLIC_GUILD_MESSAGES", (data) => callback(data));
    }
    sendMessage(content) {
        this.channelList.forEach(async (item) => {
            try {
                console.log(this.channelList);
                await this.client.messageApi.postMessage(item, {
                    content,
                });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    addChannelID(channelID) {
        if (!(new String(channelID).valueOf() in this.channelList))
            this.channelList.push(new String(channelID).valueOf());
    }
}
exports.default = Message;
