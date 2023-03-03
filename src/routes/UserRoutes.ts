import express from "express";
import * as users from "../controllers/user";
import { User } from "../models/User";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(users.getNonSensitiveUser());
});

router.get("/:id", (req, res) => {
  const user = users.getUserById(Number(req.params.id));
  return user ? res.send(user) : res.sendStatus(404);
});

router.post("/", async (req, res) => {
  try {
    const { nickname, email, password, avatar } = req.body;
    if (!nickname || !email || !password) {
      return res.sendStatus(400).json("Missing values");
    } else {
      const allUsers = await User.findAll();
      req.body.id = allUsers.length + 1;
      req.body.verifiedEmail = false;
      req.body.role = "Client";
      if (!avatar) {
        req.body.avatar =
          "https://imgs.search.brave.com/mLwlFyvqROQioiFE-Je_jZz2ip5Kp2jtfcxP8JlU5EM/rs:fit:415:415:1/g:ce/aHR0cDovL3d3dy40/eDQuZWMvb3Zlcmxh/bmRlY3VhZG9yL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L2RlZmF1bHQtdXNl/ci1pY29uLTguanBn";
      }
      User.create(req.body);
    }
    return res.sendStatus(200).json("The user was succesfully created");
  } catch (error) {
    return res
      .status(400)
      .send(
        "The error it's unknown, please contact with the support and explain this issue: " +
          error
      );
  }
});

export default router;
