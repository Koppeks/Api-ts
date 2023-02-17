import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Se llaman a todas las listas");
});

router.post("/", (_req, res) => {
  res.send("Se guardo la lista correctamente");
});

export default router;
