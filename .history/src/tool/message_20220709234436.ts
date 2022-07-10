import {
  AvailableIntentsEventsEnum,
  createOpenAPI,
  createWebsocket,
} from "qq-guild-bot";
import GetConfig from "./getConfig";

class Message {
  private channelID: string;
  private config = Object.assign(new GetConfig().parseConfig("default").user, {
    intents: [AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],
    sandbox: false,
  });

  private server = createWebsocket(this.config);
  private client = createOpenAPI(this.config);

  constructor(channelID: number) {
    this.channelID = new String(channelID).valueOf();
  }

  public static addListener(callback: (data: any) => void): void {
    new Message(0).server.addListener("PUBLIC_GUILD_MESSAGES", (data) =>
      callback(data)
    );
  }

  public async sendMessage(content: string): Promise<void> {
    try {
      await this.client.audioApi.postAudio(this.channelID, {
        audioUrl: "http://bing.com",
        text: "nh",
        status: 1,
      });
      await this.client.messageApi.postMessage(this.channelID, {
        content,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default Message;
