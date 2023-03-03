"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const ListRoutes_1 = __importDefault(require("./routes/ListRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 4005;
app.use("/lists", ListRoutes_1.default);
app.use("/users", UserRoutes_1.default);
db_1.default.sync({ alter: true, force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`);
    });
});
// const { Users } = db.models;
module.exports = Object.assign(Object.assign({}, db_1.default.models), { conn: db_1.default });
