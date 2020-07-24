"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConfigHandler_1 = require("./ConfigHandler");
exports.default = {
    token: ConfigHandler_1.string(""),
    prefix: ConfigHandler_1.string("!"),
    owners: ConfigHandler_1.array(ConfigHandler_1.base.string),
    alert: ConfigHandler_1.string(""),
    alertchannel: ConfigHandler_1.string(""),
    special: ConfigHandler_1.string(""),
    roles: ConfigHandler_1.array(ConfigHandler_1.base.string)
};
//# sourceMappingURL=Config.js.map