import mongoose from "mongoose"
import { Recipe } from "../models/recipes"

//CRUD -> create, read, update, delete

// creo funcion para agregar 1 receta, utilizando el modelo Recipe
const createRecipe = async (newRecipe: object) => {
  try {
    const recipe = new Recipe(newRecipe)

    await recipe.save()
    console.log(`Receta creada: ${recipe}`)
    //return `Usuario creado: ${recipe}`

  } catch (error) {
    console.log("Algo salio mal al ingresar el recetario", error)
  }
}

// creo una funcion para ver el recetario completo
const getRecipes = async () => {
  try {
    const recipes = await Recipe.find()
    console.log(`Recetas en esquema: ${recipes}`)
    //return `Usuarios en esquema: ${recipes}`

  } catch (error) {
    console.log("algo salio mal al ver lista de recetas", error)
  }
}

// funcion para recuperar una receta por su id
const getRecipeById = async (id: string) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id)
    const recipe = await Recipe.findById(id)

    if (!recipe) {
      console.log("No existe la receta...")
    } else {
      console.log("Receta encontrada => ", recipe)
    }
  } catch (error) {
    console.log("erro al recuperar la receta", error)
  }
}

// funcion para recuperar receta por su nombre
const getRecipeByName = async (name: string) => {
  try {
    const recipe = await Recipe.findOne({ recipeName: { $regex: name, $options: "i" } })

    if (!recipe) {
      console.log("La receta no esta registrada")
    } else {
      console.log("Receta encontrada => ", recipe)
    }
  } catch (error) {
    console.log("Error al recuperar la receta...")
  }
}

// funcion para actualizar la receta por su ID
const updateRecipe = async (id: string, body: object) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, body, { new: true })
    if (!updatedRecipe) {
      console.log("No se encuentra la receta")
    } else {
      console.log("Receta actualizada => ", updatedRecipe)
    }
  } catch (error) {
    console.log("Error al actualizar la receta", error)
  }
}

// borrar la receta por su ID
const deleteRecipe = async (id: string) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(id)
    if (!deletedRecipe) {
      console.log("Receta no encontrada")
    } else {
      console.log("Receta borrada => ", deletedRecipe)
    }
  } catch (error) {
    console.log("error al borrar la receta", error)
  }
}

export { createRecipe, getRecipes, getRecipeById, getRecipeByName, updateRecipe, deleteRecipe }