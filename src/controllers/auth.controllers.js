require("dotenv").config()
const db = require("../database/models/index")
const User = db.User
const bycrypt = require("bcryptjs")
const createAccesToken = require("../lib/jwt")
const jwt = require("jsonwebtoken")
const TOKEN_SECRET = process.env.TOKEN_SECRET

const register = async (req , res) => {
    try {
        const {nombre , email , password} = req.body
      

        const userFound = await User.findOne({where: { email } });

        if (userFound)
            return res.status(400).json({
              message: ["The email is already in use"],
            });

        const passwordHash = await bycrypt.hash(password , 10)

       // console.log(req.user)
        //crea un nuevo registro
        const register = new User({
            nombre,
            email,
            password:passwordHash
        })

        //guarda el registro asincrono con la instancia de arriba
        const userRegister = await register.save()

        const token = await createAccesToken({id:userRegister.id})

        res.cookie('token' , token)

        res.json({
            id: userRegister.id,
            nombre: userRegister.nombre,
            email: userRegister.email,
        })
        
    } catch (error) {
        res.status(500).json({message: error.message })
    }
}

const login = async (req , res) => {
    try {
        const {email , password} = req.body
 
        
        // la consulta coincide, se devuelve el primer documento; de lo contrario, es nulo.
        const userFound = await User.findOne({where: {email}})
        
       
        if(!userFound) return res.status(400).json({message: "User not found"})
        
        const isMatchPassword = await bycrypt.compare(password ,userFound.password)
        console.log(isMatchPassword)
        if(!isMatchPassword) return res.status(400).json({message: "Password no validate"})
        
        const token = await createAccesToken({ id:userFound.id })
        res.cookie('token' , token)
        res.json({
            id: userFound.id,
            nombre: userFound.nombre,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        })
        
        

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const logout =(req , res ) => {
    res.cookie('token' , "" , {
        expires: new Date(0),
    })
    res.sendStatus(200)
}

const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);
  
    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error) return res.sendStatus(401);
  
      const userFound = await User.findByPk(user.payload.id);
      if (!userFound) return res.sendStatus(401);
  
      return res.json({
        id: userFound.id,
        nombre: userFound.nombre,
        email: userFound.email,
      });
    });
  };



module.exports = {
    register,
    login,
    logout,
    verifyToken
}