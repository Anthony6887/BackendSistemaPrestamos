const express = require("express");
const DB = require("./db");
const app = express();
const PORT = 5000;

const db = new DB();
db.connect();

app.use(express.json());

const userRouter = require("./router/userRouter");
app.use(userRouter);

const bancosRouter = require("./router/bancosRouter");
app.use(bancosRouter);

const prestamosRouter = require("./router/prestamosRouter");
app.use(prestamosRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
