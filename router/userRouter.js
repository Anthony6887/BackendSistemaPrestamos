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

router.get("/usuarios/:id", async (req, res) => {
  try {
    const id_Cliente = req.params.id;
    const usuario = await new Usuarios().getInfo(id_Cliente);
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


router.post("/usuarios/login", async (req, res) => {
  try {
    const { correo, contrasenia } = req.body;
    const usuario = await new Usuarios().login(correo, contrasenia);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(401).send("Usuario o contraseña incorrectos");
    }
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

router.put("/usuarios/:id", async (req, res) => {
  try {
    const {
      usuario,
      nombre,
      apellido,
      correo,
      telefono
    } = req.body;
    const result = await new Usuarios().update(
      req.params.id,
      usuario,
      nombre,
      apellido,
      correo,
      telefono
    );
    res.json({ id: result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});
module.exports = router;
