import { EventEmitter } from "events";

interface Callback {
  (item?: Array<string>, length?: number, root?: Cmd): void;
}

interface Cmd {
  channel_id: string;
  content: string;
}

class Command extends EventEmitter {
  private commandBody?: Array<string>;
  private cmd: string | undefined;

  public commandStream(cmd: Cmd) {
    this.commandBody = cmd.content
      .replace(new RegExp("<@![0-9]*> "), "")
      .split(" ");
    this.cmd = this.commandBody.shift();
    this.cmd
      ? this.cmd?.indexOf("/") === -1
        ? super.emit("_ERROR_", "未知命令, 请详细阅读使用手册")
        : super.emit(
            this.cmd.replace("/", ""),
            this.commandBody,
            this.commandBody.length,
            cmd
          )
      : null;
  }
  public addCommandListener(
    event: string | undefined,
    callback: Callback
  ): void {
    if (event) super.addListener(event, callback);
  }

  public catch(callback: (errorMsg: string) => void): void {
    super.addListener("_ERROR_", callback);
  }
}

export default Command;
