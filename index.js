const express = require('express')
const server = express();
server.use(express.json());
const { Client } = require('pg/lib')
const app = express()
const userModel = require('./infrastructure/database/building-modeling-structure').cadastro_usuario
const router = require('./routes/router')
const port = 3000
const db = require("../db")

router.get('/', function(req,res, nex) {
    res.render('index', {title:'Pessoa'});
});
userModel.USER_REGISTRATION_MODEL.sync()
app.use(router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const padraoRouter = require('./routes/padrao.route.js');
const usuarioRouter = require('./routes/usuario.route.js');

app.use(express.json());
app.use(padraoRouter);
app.use(usuarioRouter);
app.listen(port);