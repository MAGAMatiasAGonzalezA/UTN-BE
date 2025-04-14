import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from "../config/mongo";

connectDB();
console.log("Conección a mogoose con exito, Esquema users")

// defino la interface que extiende de document
interface UserInterface extends Document {
  name: string
  email: string
  password?: string
  role?: "user" | "admin"
}

// creo el esquema de los usuarios
const userSchema: Schema = new Schema<UserInterface>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, match: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ },
  password: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestamps: false, versionKey: false });

//  fijo el esquema como estricto (no modificable)
userSchema.set("strict", true);

// exporto el modelo en una variable para reutilizar (1° parametro -> nombre del esquema, 2° parametro -> el objeto a ingresar)
export const User = mongoose.model<UserInterface>("user", userSchema);

