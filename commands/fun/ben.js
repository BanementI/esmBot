import Command from "../../classes/command.js";
import { random } from "../../utils/misc.js";

class BenCommand extends Command {
  static responses = [
    "https://cdn.discordapp.com/attachments/570362948925784065/950934578846117948/unknown.png  Ho ho ho!",
    "https://cdn.discordapp.com/attachments/570362948925784065/950934778599845988/unknown.png Yes?",
    "https://cdn.discordapp.com/attachments/570362948925784065/950934778599845988/unknown.png No.",
    "https://cdn.discordapp.com/attachments/570362948925784065/950935273301241916/unknown.png Bleugh!"
  ];

  async run() {
    return `${random(BenCommand.responses)}`;
  }

  static description = "Ask Ben a question";
  static aliases = ["talkingben", "ben"];
  static arguments = ["{text}"];
}

export default BenCommand;
