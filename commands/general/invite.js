import Command from "../../classes/command.js";

class InviteCommand extends Command {
  async run() {
    return "esmBean is a private bot! You can get the original esmBot here: <https://projectlounge.pw/invite>";
  }

  static description = "Gets my invite link";
  static aliases = ["botinfo", "credits"];
}

export default InviteCommand;
