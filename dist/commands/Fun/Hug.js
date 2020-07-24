"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../command/Command"));
const Groups_1 = require("../../Groups");
const ArgumentHandler_1 = __importDefault(require("../../command/ArgumentHandler"));
class Boop extends Command_1.default {
    constructor() {
        super({ name: "Boop", triggers: ["boop"], description: "boops a person", group: Groups_1.Fun });
    }
    async run(event) {
        const args = await ArgumentHandler_1.default.getArguments(event, event.argument, "member");
        if (!args) {
            return;
        }
        const member = args[0];
        event.send(`${event.message.author.username} hugs ${member.user.username}`);
    }
}
exports.default = Boop;
//# sourceMappingURL=Hug.js.map