import express from "express";

import usersRoute from "./routes/users";
import listsRoute from "./routes/lists";

const app = express();
app.use(express.json());
const PORT = 4005;

app.use("/lists", listsRoute);
app.use("/users", usersRoute);

app.get("/ping", (_req, res) => {
  res.send("someone ping");
});
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
