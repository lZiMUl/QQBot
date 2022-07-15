"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_js_1 = require("./tool/message.js");
const controller_js_1 = require("./tool/controller.js");
const command_1 = require("./tool/command");
const console_1 = require("console");
const cmd = new command_1.default();
const controller = new controller_js_1.default();
function bind(channelID) {
    const message = new message_js_1.default(channelID);
    message.sendMessage(`绑定成功, 当前频道号为 [${channelID}]`);
    return message;
}
cmd.addCommandListener("绑定该频道", (_item, _length, root) => {
    const message = bind(new Number(root?.channel_id).valueOf());
    cmd.addCommandListener("发送消息", (item, length) => {
        message.sendMessage("发送成功");
        (0, console_1.log)(item, length);
    });
});
cmd.catch(console_1.log);
message_js_1.default.addListener(({ eventType, msg }) => {
    console.log(msg);
    switch (eventType) {
        case "AT_MESSAGE_CREATE":
            if (true) {
                cmd.commandStream(msg);
                controller;
            }
            break;
        case "PUBLIC_MESSAGE_DELETE":
            console.log(msg.message.author);
            break;
        default:
            console.log(msg);
            break;
    }
});
