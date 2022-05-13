const Sequelize = require("sequelize");

const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost:3000",
{useUnifiedTopoLgy: true},
(error, connection) =>{
    if(error) return console.log(error);
    global.connection = connection.db("Pessoa");
    console.log("Connected!");
});

const sequelize = require('../configuration/connect-database');

const dataBase = {};

dataBase.Sequelize = Sequelize;
dataBase.sequelize = sequelize;

dataBase.cadastro_usuario = require("./model/user-model/user-registration-model");

module.exports = dataBase;

