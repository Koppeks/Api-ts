import express from "express";
import { List } from "../models/List";
import { User } from "../models/User";

const router = express.Router();

router.get("/", async (_req, res) => {
  const lists: List[] | null = await List.findAll();

  return lists !== null
    ? res.status(200).send(lists)
    : res.status(400).json("We have no list on our database");
});

router.post("/", async (req, res) => {
  const { title, list, tags } = req.body;
  const lists = await List.findAll();

  if (!title || !list || !tags) {
    return res.status(400).json("Missing values");
  } else {
    req.body.id = lists.length + 1;

    await List.create(req.body, {
      include: [User],
    });
    return res.status(201).json("The list was succesfully created");
  }
});

export default router;
