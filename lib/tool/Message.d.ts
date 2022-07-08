declare class Message {
    private channelList;
    private config;
    private server;
    private client;
    constructor(channelList?: Array<number>);
    static addListener(callback: (data: any) => void): void;
    sendMessage(content: string): void;
    addChannelID(channelID: number): void;
}
export default Message;
//# sourceMappingURL=Message.d.ts.map