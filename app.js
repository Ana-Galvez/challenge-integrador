const express = require("express");
const mainRoutes = require("./src/routes/mainRoutes.js");
const authRoutes = require("./src/routes/authRoutes.js");
const app = express();

app.use(express.static("public"));

app.use("/", mainRoutes);
app.use("/auth",authRoutes);

app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000");
});
