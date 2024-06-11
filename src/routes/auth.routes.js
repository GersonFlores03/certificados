const {Router} = require("express")
const { register, login, logout, verifyToken } = require("../controllers/auth.controllers")
const { RegisterUsersValidate, LoginUsersValidate } = require("../validators/global.validators")

const authRouter = Router()
authRouter.post('/api/v1/register' , RegisterUsersValidate , register )
authRouter.post('/api/v1/login' , LoginUsersValidate , login)
authRouter.post('/api/v1/logout'  ,logout)
authRouter.get('/api/v1/verify' , verifyToken )

module.exports= authRouter