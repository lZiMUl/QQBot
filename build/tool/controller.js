"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const getConfig_1 = tslib_1.__importDefault(require("./getConfig"));
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
