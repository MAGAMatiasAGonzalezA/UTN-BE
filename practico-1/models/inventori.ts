import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from "../config/mongo";

connectDB();
console.log("Esquema inventarios")

// defino la interface que extiende de document
interface InventarioInterface extends Document {
  usuario: string;
  item: string;
  categoria?: "carnes" | "producHorticolas" | "lacteos" | "otros"
  cantidad?: number;
}

// creo el esquema de mi inventario
const inventarioSchema: Schema = new Schema<InventarioInterface>({
  usuario: { type: String, required: true },
  item: { type: String, required: true, unique: true },
  categoria: { type: String, enum: ["carnes", "producHorticolas", "lacteos", "otros"], default: "otros" },
  cantidad: { type: Number, required: true, min: 0, default: 0 },
  // fecha: { type: Date, default: Date.now } => (agrego los movimientos de cada item con timestamps: true. para tener registro de movimiento de dicho item )
}, { timestamps: true, versionKey: false });

//  fijo el esquema como estricto (no modificable)
inventarioSchema.set("strict", true);

// exporto el modelo en una variable para reutilizar (1° parametro -> nombre del esquema, 2° parametro -> el objeto a ingresar)
export const Item = mongoose.model<InventarioInterface>("inventario", inventarioSchema);