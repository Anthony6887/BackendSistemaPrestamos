const express = require("express");
const router = express.Router();
const CobrosIndirectos = require("../models/cobrosIndirectos");


router.get("/cobrosindirectos", async (req, res) => {
  try {
    const cobrosIndirectos = await new CobrosIndirectos().getAll();
    res.json(cobrosIndirectos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.get("/cobrosindirectos/banco/:idBanco", async (req, res) => {
  const idBanco = req.params.idBanco;
  try {
    const cobrosIndirectos = await new CobrosIndirectos().getByBankId(idBanco);
    res.json(cobrosIndirectos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.post("/cobrosindirectos", async (req, res) => {
  try {
    const {
      nombreCobroIndirecto,
      montoSeguro,
      id_Banco
    } = req.body;
    const result = await new CobrosIndirectos().register(
      nombreCobroIndirecto,
      montoSeguro,
      id_Banco
    );
    res.json({ id: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;