"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Error express declaration module. @types/express fix this issue
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Transforms req.body to json
const PORT = 4005;
app.get("/ping", (_req, res) => {
  // "_req" Ignores the param completly on the function. If removed "_" would warn(tsconfig L89).
  console.log("ping");
  res.send("pong");
});
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
