const createHome = (req,res) => {
    //Aqui es donde debo crear mi HOME
    res.send({message: 'Home creado'})
}

module.exports = {
    createHome
}