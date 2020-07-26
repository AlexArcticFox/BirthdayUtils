import Event from "@event/Event";
import BotClient from "~/BotClient";
import { GuildMember, TextChannel } from "discord.js";

export const event = new Event("guildMemberAdd", async (_client: BotClient, member: GuildMember) => {
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
    (channel as TextChannel).send(_client.config.alert);
})