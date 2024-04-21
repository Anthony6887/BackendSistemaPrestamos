const express = require("express");
const router = express.Router();
const Prestamos = require("../models/prestamos");


router.get("/prestamos", async (req, res) => {
  try {
    const prestamos = await new Prestamos().getAll();
    res.json(prestamos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/prestamos/banco/:idBanco", async (req, res) => {
  const idBanco = req.params.idBanco;
  try {
    const prestamos = await new Prestamos().getByBankId(idBanco);
    res.json(prestamos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;