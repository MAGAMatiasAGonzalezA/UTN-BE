import { User } from "../models/users"

//CRUD -> create, read, update, delete

// metodo de retorno del
// {sucess: false, data: object | array, message: "Usuario actualizado" | "No se encontro"}

// creo funcion para agregar 1 usuario, utilizando el modelo User
const createUser = async (newUser: object) => {
  try {
    const user = new User(newUser)

    await user.save()
    return { sucess: true, data: user, message: "Usuario creado" }

  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// creo una funcion para ver los usuarios registrados
const getUsers = async () => {
  try {
    const users = await User.find()

    return { sucess: true, data: users, message: "Usuarios registrados en DB" }

  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// funcion para recuperar un usuario por su id
const getUserById = async (id: string) => {
  try {
    const user = await User.findById(id)

    if (!user) {
      return { sucess: false, message: "Usuario no existente" }
    } else {
      return { sucess: true, data: user, message: "Usuario filtrado por id" }
    }
  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// funcion para recuperar usuario por su nombre de usuario
const getUsersByName = async (name: string) => {
  try {
    const users = await User.find({ name: { $regex: name, $options: "i" } })

    if (users.length === 0) {
      return { sucess: false, data: [], message: `No se encontraron resultados para "${name}"` }
    }

    return { sucess: true, data: users, message: "Lista de usuarios filtrados por nombre" }

  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

const updateUser = async (id: string, body: object) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true })
    if (!updatedUser) {
      return { sucess: false, message: "Usuario no existente" }
    } else {
      return { sucess: true, data: updatedUser, message: "Usuario actualizado" }
    }
  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

const deleteUser = async (id: string) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id)
    if (!deletedUser) {
      return { sucess: false, message: "Usuario no existente" }
    } else {
      return { sucess: true, data: deletedUser, message: "Usuario eliminado" }
    }
  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

export { createUser, getUsers, getUserById, getUsersByName, updateUser, deleteUser }