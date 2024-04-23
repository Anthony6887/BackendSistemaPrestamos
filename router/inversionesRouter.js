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

router.get("/inversiones/:id", async (req, res) => {
  try {
    const id_Banco = req.params.id;
    const usuario = await new Inversiones().getInfo(id_Banco);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).send("Usuario no encontrado");
    }
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

router.post("/inversiones", async (req, res) => {
  try {
    const {
      id_Banco,
      interes_Mensual,
      interes_Anual,
      interes_Diario
    } = req.body;
    const result = await new Inversiones().register(
      id_Banco,
      interes_Mensual,
      interes_Anual,
      interes_Diario
    );
    res.json({ id: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.put("/inversiones/:id", async (req, res) => {
  try {
    const {
      interes_Mensual,
      interes_Anual,
      interes_Diario
    } = req.body;
    const result = await new Inversiones().update(
      req.params.id,
      interes_Mensual,
      interes_Anual,
      interes_Diario
    );
    res.json({ id: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;