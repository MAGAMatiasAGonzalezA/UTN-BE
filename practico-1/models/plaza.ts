import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from "../config/mongo";

connectDB();
console.log("Conección a mogoose con exito, Esquema plaza")

// defino la interface que extiende de document
interface PlazaInterface extends Document {
    plazaName: string,
    usuario: string,
    porciones: Number,
    fecha?: Date
}

// creo el esquema de la plaza
const plazaSchema: Schema = new Schema<PlazaInterface>({
    plazaName: { type: String, required: true, unique: true },
    usuario: { type: String, required: true },
    porciones: { type: Number, required: true },
    fecha: { type: Date }
}, { timestamps: false, versionKey: false });

//  fijo el esquema como estricto (no modificable)
plazaSchema.set("strict", true);

// exporto el modelo en una variable para reutilizar (1° parametro -> nombre del esquema, 2° parametro -> el objeto a ingresar)
export const Plaza = mongoose.model<PlazaInterface>("plaza", plazaSchema);