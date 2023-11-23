import { Router } from "express";


import { login, register, logout,
     profile, getUsers, 
    updateUser,deleteUser, getUser
 } from "../controllers/auth.controller.js";


import { authRequired } from "../middlewares/validateToken.js";
import {validateSchema} from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../Schemas/auth.schema.js";


const router = Router();





router.post("/register",validateSchema(registerSchema), register);// ----> registro de usuario

//Validaciones del Usuario con tokens 

router.post("/login",validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);


//CRUD DE USUARIO

router.get("/Users" , authRequired, getUsers) ;

router.get("/Users/:id" , authRequired, getUser) ;


router.put("/Users/:id" , authRequired, updateUser) ;

router.delete("/Users/:id" , authRequired, deleteUser) ;



export default router;