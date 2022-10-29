const { response } = require('express');
const express = require('express');
const cors = require("cors");
const routes = require('./routes');


const app = express();
require('./config/pgconect');

app.use(express.json());
app.use(routes);
app.use(cors());

app.listen(3333, () => {
  console.log("rodando na porta 3333");
});
