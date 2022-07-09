"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const console_1 = require("console");
const command_1 = tslib_1.__importDefault(require("../tool/command"));
const cmd = new command_1.default();
cmd.addCommandListener('login', console_1.log);
