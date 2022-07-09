declare class Message {
    private channelID;
    private config;
    private server;
    private client;
    constructor(channelID: number);
    static addListener(callback: (data: any) => void): void;
    sendMessage(content: string): Promise<void>;
}
export default Message;
//# sourceMappingURL=message.d.ts.map