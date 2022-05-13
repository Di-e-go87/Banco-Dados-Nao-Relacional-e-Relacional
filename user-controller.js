module.exports = {

    get:(req, res)  =>{
        res.status(200).send("Leitura do ID");
},
post:(req, res)  =>{
    res.status(200).send("Inserindo ID");
},
put:(req, res)  =>{
    res.status(200).send("Atulizando ID");
}


}

