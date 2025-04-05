import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from "./mongo";

connectDB();
console.log("Esquema inventarios")

// defino la interface de mi inventario con los tipos de datos requeridos
interface Inventariointerface extends Document {
  usuario: string;
  item: string;
  categoria?: "carnes" | "producHorticolas" | "lacteos" | "otros"
  cantidad: number;
}

// creo el esquema de mi inventario
const inventarioSchema: Schema = new Schema<Inventariointerface>({
  usuario: { type: String, required: true },
  item: { type: String, required: true, unique: true },
  categoria: { type: String, enum: ["carnes", "producHorticolas", "lacteos", "otros"], default: "otros" },
  cantidad: { type: Number, required: true, min: 0, default: 0 },
  // fecha: { type: Date, default: Date.now } => (agrego los movimientos de cada item con timestamps: true y mantengo versionKey: true, por defecto. para tener registro de movimiento de dicho item )
}, { timestamps: true });

//  fijo el esquema como estricto (no modificable)
inventarioSchema.set("strict", true);

// guardo el modelo en una variable para reutilizar (1° parametro -> nombre del esquema, 2° parametro -> el objeto a ingresar)
const Item = mongoose.model<Inventariointerface>("inventario", inventarioSchema);

// creo funcion para agregar 1 articulo, utilizando el modelo Item
const createItem = async () => {
  try {
    const item: Inventariointerface = new Item({
      usuario: "Matias Gonzalez",
      item: "papa",
      cantidad: 50
    });

    await item.save();
    console.log(`item guardado: ${item}`)
    //return `item guardado: ${item}`

  } catch (error) {
    console.log("Error al ingresar datos...", error)
  }
}

// ver lista de inventario
const getItems = async () => {
  try {
    const items = await Item.find();
    console.log(`items en esquema: ${items}`)
    //return `items en esquema: ${items}`

  } catch (error) {
    console.log("Algo salio mal: ", error)
  }
}

export { createItem, getItems }