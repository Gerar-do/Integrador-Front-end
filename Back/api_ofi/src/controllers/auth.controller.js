import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";
import { token } from "morgan";



  export const register = async ( req, res) => {

  try {
    const { username, email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.status(400).json(
     ["The email is already in use"],
      );

   
   
    const passwordhash = await bcrypt.hash(password,10)
   
    const newUser = new User({

        username,
        email,
        password: passwordhash,

    });




    
     const userSaved = await newUser.save();
    const token = await createAccesToken({id: userSaved._id});

     res.cookie("token", token);
     res.json({
     username: userSaved.username,
     email: userSaved.email,
     createdAt: userSaved.createdAt,
     updatedAt: userSaved.updatedAt,
    });
    
  } catch (error) {

    res.status(500).json({message: error.message});
    
  }

  };






  export const login = async ( req, res) => {

    const {email, password} = req.body

  try {

    const userFound = await User.findOne({email});

    if (!userFound) return res.status(400).json({ message: "User not found"});

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (! isMatch) return res.status(400).json({ message: "Incorrect password"})

    
    const token = await createAccesToken({id: userFound._id});

     res.cookie("token", token);
     res.json({
     username: userFound.username,
     email: userFound.email,
     createdAt: userFound.createdAt,
     updatedAt: userFound.updatedAt,
    });
    
  } catch (error) {

    res.status(500).json({message: error.message});
    
  }

  };


  export const logout = (req, res) =>{

    res.cookie("token", "", {

      expires: new Date(0)

    });

    return res.sendStatus(200);

  };

  export const profile = async (req, res) =>{
    const userFound = await User.findById(req.user.id)
    
    if(!userFound) return  res.status(400).json({message: "User not found"});
     
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
     createdAt: userFound.createdAt,
     updatedAt: userFound.updatedAt,

    });

   

  };





  // Obtener la lista de usuarios
export const getUsers = async (req, res) => {
  try {
    // Realiza una consulta a la base de datos para obtener la lista de usuarios
    const users = await User.find(); // Suponiendo que tienes un modelo User

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la lista de usuarios' });
  }
};



// Actualizar la información de un usuario
export const updateUser = async (req, res) => {
  const userId = req.params.id; // Suponiendo que el ID del usuario se pasa como parámetro en la URL
  const updatedUserData = req.body; // Los datos actualizados se esperan en el cuerpo de la solicitud

  try {
    // Realiza la actualización en la base de datos utilizando el ID y los datos proporcionados
    const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData);

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario' });
  }
};



// Eliminar un usuario
export const deleteUser = async (req, res) => {
  const userId = req.params.id; // Suponiendo que el ID del usuario se pasa como parámetro en la URL

  try {
    // Realiza la eliminación en la base de datos utilizando el ID
    await User.findByIdAndRemove(userId);

    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
};

// Obtener información de un usuario específico
export const getUser = async (req, res) => {
  const userId = req.params.id; // Suponiendo que el ID del usuario se pasa como parámetro en la URL

  try {
    // Realiza una consulta a la base de datos para obtener la información del usuario por su ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la información del usuario' });
  }
};
