const express = require("express");
const router = express.Router();
const Usuarios = require("../models/usuarios");

router.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await new Usuarios().getAll();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});


router.post("/usuarios", async (req, res) => {
  try {
    const {
      usuario,
      contrasenia,
      nombre,
      apellido,
      correo,
      telefono,
      rol,
    } = req.body;
    const result = await new Usuarios().register(
      usuario,
      contrasenia,
      nombre,
      apellido,
      correo,
      telefono,
      rol
    );
    res.json({ id: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
