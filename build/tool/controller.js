"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getConfig_1 = require("./getConfig");
class Controller {
    static CheckAdmin(username) {
        const adminList = JSON.parse(new getConfig_1.default().parseConfig("default").admin.list);
        for (let index = 0; index < adminList.length; index++)
            if (username === adminList[index])
                return true;
        return false;
    }
}
exports.default = Controller;
