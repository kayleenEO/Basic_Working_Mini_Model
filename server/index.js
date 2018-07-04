const express = require("express");
const app = express();
const volleyball = require("volleyball");
const PORT = 3000;

app.use(volleyball);

app.get("/", (req, res, next) => {
  res.send(`<h1>Kayleen's first Full-stack App: Hello World!</h1>`);
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
