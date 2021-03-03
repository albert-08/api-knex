module.exports = (rol) => {
    return (req,res,next) => {
        if(rol === req.user.rol){
            next()
        }else{
            return res.status(403).send({message:"No tiene permiso para esto"})
        }
    }
}