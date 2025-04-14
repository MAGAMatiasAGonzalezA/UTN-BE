import mongoose from "mongoose"
import { User } from "../models/users"

//CRUD -> create, read, update, delete

// creo funcion para agregar 1 usuario, utilizando el modelo User
const createUser = async (newUser: object) => {
  try {
    const user = new User(newUser)

    await user.save()
    console.log(`Usuario creado: ${user}`)
    //return `Usuario creado: ${user}`

  } catch (error) {
    console.log("Algo salio mal al ingresar el usuario", error)
  }
}

// creo una funcion para ver los usuarios registrados
const getUsers = async () => {
  try {
    const users = await User.find()
    console.log(`Usuarios en esquema: ${users}`)
    //return `Usuarios en esquema: ${users}`

  } catch (error) {
    console.log("algo salio mal al ver lista de usuarios", error)
  }
}

// funcion para recuperar un usuario por su id
const getUserById = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id)
    const user = await User.findById(id)

    if (!user) {
      console.log("No existe el usuario...")
    } else {
      console.log("Usuario encontrado => ", user)
    }
  } catch (error) {
    console.log("erro al recuperar el usuario", error)
  }
}

// funcion para recuperar usuario por su nombre de usuario
const getUserByName = async (name: string) => {
  try {
    const user = await User.findOne({ name: { $regex: name, $options: "i" } })

    if (!user) {
      console.log("El usuario no esta registrado")
    } else {
      console.log("Usuario encontrado => ", user)
    }
  } catch (error) {
    console.log("Error al recuperar el usuario...")
  }
}

const updateUser = async (id: string, body: object) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true })
    if (!updatedUser) {
      console.log("No se encuentra el usuario")
    } else {
      console.log("Usuario actualizado => ", updatedUser)
    }
  } catch (error) {
    console.log("Error al actualizar", error)
  }
}

const deleteUser = async (id: string) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id)
    if (!deletedUser) {
      console.log("Usuario no encontrado")
    } else {
      console.log("usuario borrado => ", deletedUser)
    }
  } catch (error) {
    console.log("error al borrar", error)
  }
}

export { createUser, getUsers, getUserById, getUserByName, updateUser, deleteUser }