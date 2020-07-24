"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const CommandHandler_1 = __importDefault(require("./command/CommandHandler"));
const EventHandler_1 = require("./event/EventHandler");
class BotClient extends discord_js_1.Client {
    constructor(config, options) {
        super(options);
        this.config = config;
        this.once("ready", () => {
            EventHandler_1.EventHandler(this);
            new CommandHandler_1.default(this);
        });
    }
    isOwner(user) {
        return this.config.owners.includes(user.id);
    }
    getPrefix(guild) {
        if (guild) {
        }
        return this.config.prefix;
    }
}
exports.default = BotClient;
//# sourceMappingURL=BotClient.js.map