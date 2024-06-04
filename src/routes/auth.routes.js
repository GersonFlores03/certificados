const {Router} = require("express")
const { register, login, logout, verifyToken } = require("../controllers/auth.controllers")

const authRouter = Router()
authRouter.post('/api/v1/register' , register )
authRouter.post('/api/v1/login' , login)
authRouter.post('/api/v1/logout'  ,logout)
authRouter.get('api/v1/verify ' , verifyToken )

module.exports= authRouter