import Message from "./tool/Message";
import Controller from "./tool/controller";

const channel: Array<number> = [];
let message = new Message(channel);
const controller = new Controller();

try {
  Message.addListener(({ eventType, msg }) => {
    console.log(msg);
    switch (eventType) {
      case "AT_MESSAGE_CREATE":
        if (!Controller.CheckAdmin(msg.author.username)) {
          let data: Array<string> = msg.content.replace(new RegExp('<@![0-9]*> '), '').split(' ');
	  if (data[0] === '/绑定该频道') {
	      message.addChannelID(new Number(msg.channel_id).valueOf());
	      message.sendMessage(`绑定成功, 当前频道号为 [${msg.channel_id}]`);
	  } else if (data[0] === '/发送消息') {
		  message.sendMessage('发送成功');
	  }else {
	      if (data.indexOf('/') === -1) message.sendMessage('发送成功');
              else message.sendMessage('未知命令, 请详细阅读使用手册');
          }
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
