import {
  AvailableIntentsEventsEnum,
  createOpenAPI,
  createWebsocket,
} from "qq-guild-bot";
import GetConfig from "./getConfig";

class Message {
  private channelList: Array<string> = [];
  private config = Object.assign(new GetConfig().parseConfig("default").user, {
    intents: [AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],
    sandbox: false,
  });

  private server = createWebsocket(this.config);
  private client = createOpenAPI(this.config);

  constructor(channelList?: Array<number>) {
    if (channelList)
      Array.from(new Set(channelList)).forEach((item) =>
        this.channelList.push(new String(item).valueOf())
      );
  }

  public static addListener(callback: (data: any) => void): void {
    new Message().server.addListener("PUBLIC_GUILD_MESSAGES", (data) =>
      callback(data)
    );
  }

  public sendMessage(content: string): void {
    Array.from(new Set(this.channelList))
    .forEach(async (item, _b, arr) => {
      try {
        console.log(arr);
        await this.client.messageApi.postMessage(item, {
          content,
        });
      } catch (err) {
        console.log(err);
      }
    });
  }

  public addChannelID(channelID: number): void {
    this.channelList.push(new String(channelID).valueOf());
  }
}

export default Message;
