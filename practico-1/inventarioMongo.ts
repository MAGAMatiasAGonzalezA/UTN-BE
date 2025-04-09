import mongoose, { Document, Schema } from "mongoose";
import { connectDB } from "./config/mongo";

connectDB();
console.log("Esquema inventarios")

// defino la interface que extiende de document
interface InventarioInterface extends Document {
  usuario: string;
  item: string;
  categoria?: "carnes" | "producHorticolas" | "lacteos" | "otros"
  cantidad: number;
}

// creo el esquema de mi inventario
const inventarioSchema: Schema = new Schema<InventarioInterface>({
  usuario: { type: String, required: true },
  item: { type: String, required: true, unique: true },
  categoria: { type: String, enum: ["carnes", "producHorticolas", "lacteos", "otros"], default: "otros" },
  cantidad: { type: Number, required: true, min: 0, default: 0 },
  // fecha: { type: Date, default: Date.now } => (agrego los movimientos de cada item con timestamps: true y mantengo versionKey: true, por defecto. para tener registro de movimiento de dicho item )
}, { timestamps: true });

//  fijo el esquema como estricto (no modificable)
inventarioSchema.set("strict", true);

// guardo el modelo en una variable para reutilizar (1° parametro -> nombre del esquema, 2° parametro -> el objeto a ingresar)
const Item = mongoose.model<InventarioInterface>("inventario", inventarioSchema);

// CRUD -> created, read, update, delete

// creo funcion para agregar 1 articulo, utilizando el modelo Item
const createItem = async (newItem: object) => {
  try {
    const item: InventarioInterface = new Item(newItem);

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

// funcion para recuperar un item por su id
const getItemById = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id)
    const item = await Item.findById(id)

    if (!item) {
      console.log("No existe el item...")
    } else {
      console.log(item)
    }
  } catch (error) {
    console.log("erro al recuperar el item", error)
  }
}

// funcion para recuperar item por su nombre
const getItemByName = async (name: string) => {
  try {
    const item = await Item.findOne({ name: { $regex: name, $options: "i" } })

    if (!item) {
      console.log("El usuario no esta registrado")
    } else {
      console.log(item)
    }
  } catch (error) {
    console.log("Error al recuperar el usuario...")
  }
}

const updateItem = async (id: string, body: object) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, body, { new: true })
    if (!updatedItem) {
      console.log("No se encontro el item")
    } else {
      console.log(updatedItem)
    }
  } catch (error) {
    console.log("error al actualizar", error)
  }
}

const deleteItem = async (id: string) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(id)
    if (!deletedItem) {
      console.log("Item no encontrado")
    } else {
      console.log(deletedItem)
    }
  } catch (error) {
    console.log("Error al borrar el item", error)
  }
}

export { createItem, getItems, getItemById, getItemByName, updateItem, deleteItem }