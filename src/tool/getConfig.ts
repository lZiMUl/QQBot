import { readFileSync } from "fs";
import { resolve, join } from "path";
import { parse } from "ini";

class getConfig {
  private root: string = join(resolve(), "config");

  private readFile(fileName: string): string {
    return new String(readFileSync(join(this.root, fileName))).valueOf();
  }
  public parseConfig(fileName: string): any {
    return parse(this.readFile(`${fileName}.ini`));
  }
}

export default getConfig;
