"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const users_1 = __importDefault(require("./routes/users"));
const lists_1 = __importDefault(require("./routes/lists"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 4005;
app.use("/lists", lists_1.default);
app.use("/users", users_1.default);
db_1.default.sync({ alter: true, force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    });
});
// const { Users } = db.models;
module.exports = Object.assign(Object.assign({}, db_1.default.models), { conn: db_1.default });
