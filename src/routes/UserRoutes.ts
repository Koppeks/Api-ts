import express from "express";
import { User } from "../models/User";
import { Op } from "sequelize";

const router = express.Router();

router.get("/", async (_req, res) => {
  const users: User[] | null = await User.findAll();

  return users !== null
    ? res.send(users)
    : res.status(404).json("We dont have users yet :P");
});

router.get("/:value", async (req, res) => {
  const isNum = /^\d+$/.test(req.params.value);

  //Look for ID if its only a number
  if (isNum) {
    const user: User | null = await User.findOne({
      where: {
        id: req.params.value,
      },
    });
    return user !== null
      ? res.send(user)
      : res
          .status(404)
          .json("The user you are looking for doesnt exist, please try again");
  }
  //Look for nickname if its not a number
  else {
    const user: User[] | null = await User.findAll({
      where: {
        nickname: { [Op.substring]: req.params.value },
      },
    });
    return user !== null
      ? res.status(200).send(user)
      : res
          .status(406)
          .json("The user you are looking for doesn't exist, please try again");
  }
});

router.post("/", async (req, res) => {
  try {
    const { nickname, email, password, avatar } = req.body;
    if (!nickname || !email || !password) {
      return res.status(400).json("Missing values");
    } else {
      const emailRepet = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (emailRepet) return res.status(406).json("That email is repeated");
      const allUsers = await User.findAll();
      if (allUsers.length === 0) req.body.id = allUsers.length;
      else req.body.id = allUsers.length + 1;
      req.body.verifiedEmail = false;
      req.body.role = "Client";
      if (!avatar) {
        req.body.avatar =
          "https://imgs.search.brave.com/mLwlFyvqROQioiFE-Je_jZz2ip5Kp2jtfcxP8JlU5EM/rs:fit:415:415:1/g:ce/aHR0cDovL3d3dy40/eDQuZWMvb3Zlcmxh/bmRlY3VhZG9yL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L2RlZmF1bHQtdXNl/ci1pY29uLTguanBn";
      }
      User.create(req.body);
      return res.status(201).json("The user was succesfully created");
    }
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
