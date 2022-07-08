"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const getConfig_js_1 = tslib_1.__importDefault(require("../tool/getConfig.js"));
const getConfig = new getConfig_js_1.default();
console.log(getConfig.parseConfig('default').user);
