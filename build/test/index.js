"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const command_1 = require("../tool/command");
const cmd = new command_1.default();
cmd.addCommandListener('login', console_1.log);
