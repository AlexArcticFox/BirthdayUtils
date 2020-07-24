import { string, base, array } from "~/ConfigHandler";

export default {
    token: string(""),
    prefix: string("!"),
    owners: array(base.string),
    alert: string(""),
    alertchannel: string(""),
    special: string(""),
    roles: array(base.string)
}