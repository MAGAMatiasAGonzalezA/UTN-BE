import { Item } from "../models/inventori";


// CRUD -> created, read, update, delete

// metodo de retorno del CRUD
// {sucess: false, data: object | array, message: "inventario actualizado" | "No se encontro"}

// creo funcion para agregar 1 articulo, utilizando el modelo Item
const insertItem = async (newItem: object) => {
  try {
    const item = new Item(newItem);

    await item.save();
    return { sucess: true, data: item, message: "Item ingresado" }

  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// ver lista de inventario
const getItems = async () => {
  try {
    const items = await Item.find();
    return { sucess: true, data: items, message: "Items en DB inventario" }

  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// funcion para recuperar un item por su id
const getItemById = async (id: string) => {
  try {
    const item = await Item.findById(id)

    if (!item) {
      return { sucess: false, message: "No existe el item..." }
    } else {
      return { sucess: true, data: item, message: "Item encontrado por id" }
    }
  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// funcion para recuperar item por su nombre
const getItemsByName = async (name: string) => {
  try {
    const item = await Item.find({ item: { $regex: name, $options: "i" } })

    if (item.length === 0) {
      return { sucess: false, data: [], message: `No se encontraron resultados para "${name}"` }
    }

    return { sucess: true, data: item, message: "Lista del inventario filtrados por nombre" }

  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// funcion para recuperar y modificar el item por su ID
const updateItem = async (id: string, body: object) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, body, { new: true })
    if (!updatedItem) {
      return { sucess: false, message: "Item no existente" }
    } else {
      return { sucess: true, data: updatedItem, message: "Item actualizado" }
    }
  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// funcion para eliminar un item por su ID
const deleteItem = async (id: string) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(id)
    if (!deletedItem) {
      return { sucess: false, message: "Item no existente" }
    } else {
      return { sucess: true, data: deletedItem, message: "Item eliminado" }
    }
  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

export { insertItem, getItems, getItemById, getItemsByName, updateItem, deleteItem }