import express from "express";
import * as users from "../controllers/user";
import user from "../models/UserM";

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
    const allUsers = await user.findAll();
    const newUser = new user({
      id: allUsers.length + 1,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
      verifiedEmail: true,
      role: req.body.role,
      avatar: "a",
    });
    newUser.save();
    res.send("User succesfully created");
  } catch (error) {
    res
      .status(400)
      .send(
        "The error it's unknown, please contact with the support and explain this issue: " +
          error
      );
  }
});

export default router;
