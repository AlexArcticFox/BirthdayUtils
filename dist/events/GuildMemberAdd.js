"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const Event_1 = __importDefault(require("../event/Event"));
exports.event = new Event_1.default("guildMemberAdd", async (_client, member) => {
    if (member.id !== _client.config.special) {
        return;
    }
    const guild = member.guild;
    _client.config.roles.forEach((roleid) => {
        const role = guild.roles.cache.find(role => role.id === roleid);
        if (role) {
            member.roles.add(role);
        }
    });
    guild.name = `HAPPY BIRTHDAY ${member.user.username}!`;
    const channel = guild.channels.cache.get(_client.config.alertchannel);
    channel.send(_client.config.alert);
});
//# sourceMappingURL=GuildMemberAdd.js.map