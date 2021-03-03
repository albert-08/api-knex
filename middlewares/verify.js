const JWT = require('jsonwebtoken')
const UserModel = require('../models/User')
const SECRET_KEY = 'iw6bPfybFfqGhXpV3DK8LqvYnfe3GDVJBVCgC2HmgD2SEoXK1oj+/82ykWpKt26CjseAG+UCmzL6asUrmIpw1bYxDjhlIPMlS4wQtZz17yPI/O4UOqeGfhl9wX8UYmTWfyo='

module.exports = async (req,res,next) => {
    const Authorization = req.get('Authorization')

    try{
        if(Authorization){
            const token = Authorization.replace('JWT ','')
            const payload = JWT.verify(token,SECRET_KEY)
            if(payload){
                const {id_user} = payload
                const [user] = await UserModel.find({id_user}).catch(() => res.status(400).send({message:"no podemos hacer esto"}))
                if(!user) req.status().send({message:"Usuario no encontrado"})
                req.user = user //iniciando la sesión en el backend, esto lo puedo ocupar o en otros middlewares o en el controller
                next() //pasa al siguiente middleware o al controller
            }else{
                res.status(401).send({message:"token invalido"})
            }
        }else{
            res.status(400).send({message:"Header no fue enviado"})
        }
    }catch(error){
        return res.status(400).send(error)
    }
}