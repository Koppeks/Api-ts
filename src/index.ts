import express from "express";
import db from "./db";

import usersRoute from "./routes/UserRoutes";
import listsRoute from "./routes/ListRoutes";

const app = express();
app.use(express.json());
const PORT = 4005;

app.use("/lists", listsRoute);
app.use("/users", usersRoute);

db.sync({ alter: true, force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
});

// const { Users } = db.models;

module.exports = {
  ...db.models,
  conn: db,
};
