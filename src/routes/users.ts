import express from "express";
import * as users from "../controllers/user";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(users.getSensitiveUser());
});

router.post("/", (_req, res) => {
  res.send("se postearon a todos los usuarios");
});

export default router;
