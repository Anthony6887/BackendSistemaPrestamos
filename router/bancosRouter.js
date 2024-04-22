const express = require("express");
const router = express.Router();
const Bancos = require("../models/bancos");

//BANCOS
router.get("/bancos", async (req, res) => {
  try {
    const bancos = await new Bancos().getAll();
    res.json(bancos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.post("/bancos", async (req, res) => {
  try {
    const {
      nombre,
      logo,
      direccion,
      id_Administrador
    } = req.body;
    const result = await new Bancos().register(
      nombre,
      logo,
      direccion,
      id_Administrador
    );
    res.json({ id: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;