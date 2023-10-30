const routes = require('./src/routes/routes');

const express = require("express");
const path = require("path");
const app = express();
//const cors = require('cors');

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(cors());

app.use('/', routes);

app.listen(3000, () =>
{
    console.log("Servidor corriendo en puerto 3000")
});