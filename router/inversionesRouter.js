const express = require("express");
const router = express.Router();
const Inversiones = require("../models/inversiones");


router.get("/inversiones", async (req, res) => {
  try {
    const inversiones = await new Inversiones().getAll();
    res.json(inversiones);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/inversiones/banco/:idBanco", async (req, res) => {
  const idBanco = req.params.idBanco;
  try {
    const inversiones = await new Inversiones().getByBankId(idBanco);
    res.json(inversiones);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;