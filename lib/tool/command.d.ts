/// <reference types="node" />
import { EventEmitter } from "events";
interface Callback {
    (item?: Array<string>, length?: number, root?: Cmd): void;
}
interface Cmd {
    channel_id: string;
    content: string;
}
declare class Command extends EventEmitter {
    private commandBody?;
    private cmd;
    commandStream(cmd: Cmd): void;
    addCommandListener(event: string | undefined, callback: Callback): void;
    catch(callback: (errorMsg: string) => void): void;
}
export default Command;
//# sourceMappingURL=command.d.ts.map