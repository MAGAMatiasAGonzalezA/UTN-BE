import mongoose from "mongoose";
import { Item } from "../models/inventori";


// CRUD -> created, read, update, delete

// creo funcion para agregar 1 articulo, utilizando el modelo Item
const insertItem = async (newItem: object) => {
  try {
    const item = new Item(newItem);

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
    //return await Item.find();
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
      console.log("Item encontrado => ", item)
    }
  } catch (error) {
    console.log("erro al recuperar el item", error)
  }
}

// funcion para recuperar item por su nombre
const getItemByName = async (name: string) => {
  try {
    const item = await Item.findOne({ item: { $regex: name, $options: "i" } })

    if (!item) {
      console.log("El item no esta registrado")
    } else {
      console.log("Item encontrado => ", item)
    }
  } catch (error) {
    console.log("Error al recuperar el usuario...")
  }
}

// funcion para recuperar y modificar el item por su ID
const updateItem = async (id: string, body: object) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, body, { new: true })
    if (!updatedItem) {
      console.log("No se encontro el item")
    } else {
      console.log("Item actualizado => ", updatedItem)
    }
  } catch (error) {
    console.log("error al actualizar", error)
  }
}

// funcion para eliminar un item por su ID
const deleteItem = async (id: string) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(id)
    if (!deletedItem) {
      console.log("Item no encontrado")
    } else {
      console.log("Item borrado => ", deletedItem)
    }
  } catch (error) {
    console.log("Error al borrar el item", error)
  }
}

export { insertItem, getItems, getItemById, getItemByName, updateItem, deleteItem }