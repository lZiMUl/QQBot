"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const ini_1 = require("ini");
class getConfig {
    root = (0, path_1.join)((0, path_1.resolve)(), "config");
    readFile(fileName) {
        return new String((0, fs_1.readFileSync)((0, path_1.join)(this.root, fileName))).valueOf();
    }
    parseConfig(fileName) {
        return (0, ini_1.parse)(this.readFile(`${fileName}.ini`));
    }
}
exports.default = getConfig;
