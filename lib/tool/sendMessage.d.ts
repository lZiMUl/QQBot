declare class Message {
    private channelID;
    private config;
    private client;
    constructor(channelID: string);
    sendMessage(content: string): Promise<void>;
}
export default Message;
//# sourceMappingURL=sendMessage.d.ts.map