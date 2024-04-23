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

router.get("/prestamos/:id", async (req, res) => {
  try {
    const id_Banco = req.params.id;
    const usuario = await new Prestamos().getInfo(id_Banco);
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

router.post("/prestamos", async (req, res) => {
  try {
    const {
      tipo,
      tasa_interes,
      monto_min,
      monto_max,
      detalles,
      id_Banco
    } = req.body;
    const result = await new Prestamos().register(
      tipo,
      tasa_interes,
      monto_min,
      monto_max,
      detalles,
      id_Banco
    );
    res.json({ id: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.put("/prestamos/:id", async (req, res) => {
  try {
    const {
      tipo,
      tasa_interes,
      monto_min,
      monto_max,
      detalles
    } = req.body;
    const result = await new Prestamos().update(
      req.params.id,
      tipo,
      tasa_interes,
      monto_min,
      monto_max,
      detalles
    );
    res.json({ id: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;