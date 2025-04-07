import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from "./mongo";

connectDB();
console.log("Conección a mogoose con exito, Esquema users")

// defino la interface de los usuarios con los tipos de datos requeridos
interface Userinterface extends Document {
  name: string
  email: string
  password?: string
  role?: "user" | "admin"
}

// creo el esquema de los usuarios
const userSchema: Schema = new Schema<Userinterface>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ },
  password: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestamps: false, versionKey: false });

//  fijo el esquema como estricto (no modificable)
userSchema.set("strict", true);

// guardo el modelo en una variable para reutilizar (1° parametro -> nombre del esquema, 2° parametro -> el objeto a ingresar)
const User = mongoose.model<Userinterface>("user", userSchema);

// creo funcion para agregar 1 usuario, utilizando el modelo User
const createUser = async () => {
  try {
    const user: Userinterface = new User({
      name: "Matias",
      email: "matias@gmail.com",
      password: "1234"
    })

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
      console.log(user)
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
      console.log(user)
    }
  } catch (error) {
    console.log("Error al recuperar el usuario...")
  }
}

export { createUser, getUsers, getUserById, getUserByName }