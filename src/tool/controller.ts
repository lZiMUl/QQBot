import GetConfig from "./getConfig";

class Controller {
  public static CheckAdmin(username: string): boolean {
    const adminList: Array<string> = JSON.parse(
      new GetConfig().parseConfig("default").admin.list
    );
    for (let index = 0; index < adminList.length; index++)
      if (username === adminList[index]) return true;
    return false;
  }
}

export default Controller;
