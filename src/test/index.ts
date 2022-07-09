import { log } from "console";
import Command from "../tool/command";

const cmd = new Command();

cmd.addCommandListener('login', log)
