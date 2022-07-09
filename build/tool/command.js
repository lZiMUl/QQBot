"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class Command extends events_1.EventEmitter {
    commandBody;
    cmd;
    commandStream(cmd) {
        this.commandBody = cmd.content
            .replace(new RegExp("<@![0-9]*> "), "")
            .split(" ");
        this.cmd = this.commandBody.shift();
        this.cmd
            ? this.cmd?.indexOf("/") === -1
                ? super.emit("_ERROR_", "未知命令, 请详细阅读使用手册")
                : super.emit(this.cmd.replace("/", ""), this.commandBody, this.commandBody.length, cmd)
            : null;
    }
    addCommandListener(event, callback) {
        if (event)
            super.addListener(event, callback);
    }
    catch(callback) {
        super.addListener("_ERROR_", callback);
    }
}
exports.default = Command;
