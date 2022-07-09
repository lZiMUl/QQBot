"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const messgae_js_1 = tslib_1.__importDefault(require("./tool/messgae.js"));
const controller_js_1 = tslib_1.__importDefault(require("./tool/controller.js"));
const command_1 = tslib_1.__importDefault(require("./tool/command"));
const console_1 = require("console");
const cmd = new command_1.default();
const channel = [];
let message = new messgae_js_1.default(channel);
const controller = new controller_js_1.default();
try {
    cmd.addCommandListener("绑定该频道", (_item, _length, root) => {
        message.addChannelID(new Number(root?.channel_id).valueOf());
        message.sendMessage(`绑定成功, 当前频道号为 [${root?.channel_id}]`);
    });
    cmd.addCommandListener("发送消息", (item, length) => {
        message.sendMessage("发送成功");
        (0, console_1.log)(item, length);
    });
    cmd.catch(console_1.log);
    messgae_js_1.default.addListener(({ eventType, msg }) => {
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
}
catch (e) {
    console.error(e);
}
