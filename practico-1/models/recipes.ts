import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from "../config/mongo";

connectDB();
console.log("Conección a mogoose con exito, Esquema recipes")

// defino la interface de los ingredientes
interface Ingredient {
  nombre: string,
  cantidad: number,
}

// creo el esquema de la interface Ingredientes
const ingredietSchema = new Schema({
  item: { type: String, required: true, unique: true },
  cantidad: { type: Number, required: true }
})

// defino la interface que extiende de document
interface RecipesInterface extends Document {
  recipeName: string,
  usuario: string,
  cantIngred: { type: Number },
  ingredient: Ingredient[],
  procedure?: { type: String }
}

// creo el esquema de las recetas
const recipesSchema: Schema = new Schema<RecipesInterface>({
  recipeName: { type: String, required: true, unique: true },
  usuario: { type: String, required: true },
  cantIngred: { type: Number, required: true },
  ingredient: { type: [ingredietSchema], required: true },
  procedure: { type: String },
}, { timestamps: false, versionKey: false });

//  fijo el esquema como estricto (no modificable)
recipesSchema.set("strict", true);

// exporto el modelo en una variable para reutilizar (1° parametro -> nombre del esquema, 2° parametro -> el objeto a ingresar)
export const Recipe = mongoose.model<RecipesInterface>("recipe", recipesSchema);
