const express = require("express");
const methodOverride = require('method-override')
const path = require("path");
const mainRoutes = require('./src/routes/mainRoutes.js');
const authRoutes = require('./src/routes/authRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const errorController = require('./src/controllers/errorController.js');
const app = express();

app.set("views", path.join(__dirname + "/src/views")); //__dirname marca la ruta hasta donde está el archivo donde se escribe(index.js)
app.set("view engine", "ejs"); //path.join es para unir en este caso 2 string para que la convierta en una ruta.
app.use(express.static(path.resolve(__dirname + "/public")));
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride('_method'))


app.use("/", mainRoutes);
app.use("/auth",authRoutes);
app.use("/admin",adminRoutes);
app.use("/shop",shopRoutes);

app.use(errorController.error404);
app.use(errorController.error500);
app.use(errorController.error400);
app.use(errorController.error403);

app.listen(4000, () => {
  console.log("Servidor corriendo en http://localhost:4000/home");
  console.log(__dirname);
});
