import Message from "./tool/message.js";
import Controller from "./tool/controller.js";
import Command from "./tool/command";
import { log } from "console";

const cmd = new Command();

const controller = new Controller();

function bind(channelID: number): Message {
  const message = new Message(channelID);
  try {
  message.sendMessage(`绑定成功, 当前频道号为 [${channelID}]`);
  } catch
  return message;
}
try {
  cmd.addCommandListener("绑定该频道", (_item, _length, root) => {
    const message = bind(new Number(root?.channel_id).valueOf());
    cmd.addCommandListener("发送消息", (item, length) => {
      message.sendMessage("发送成功");
      log(item, length);
    });
  });

  cmd.catch(log);
  Message.addListener(({ eventType, msg }) => {
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
} catch (e) {
  console.error(e);
}
