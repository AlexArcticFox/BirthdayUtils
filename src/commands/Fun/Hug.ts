import Command from "@command/Command";
import { Fun } from "~/Groups";
import CommandEvent from "@command/CommandEvent";
import ArgumentHandler from "@command/ArgumentHandler";

export default class Boop extends Command {
    constructor() {
        super({ name: "Boop", triggers: ["boop"], description: "boops a person", group: Fun });
    }

    async run(event: CommandEvent) {
        const args = await ArgumentHandler.getArguments(event, event.argument, "member");
        if (!args) {
            return;
        }
        const member = args![0];
        event.send(`${event.message.author.username} hugs ${member.user.username}`);
    }
}