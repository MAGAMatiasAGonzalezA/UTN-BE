import { Recipe } from "../models/recipes"

//CRUD -> create, read, update, delete

// metodo de retorno del CRUD
// {sucess: false, data: object | array, message: "recetario actualizado" | "No se encontro"}

// creo funcion para agregar 1 receta, utilizando el modelo Recipe
const createRecipe = async (newRecipe: object) => {
  try {
    const recipe = new Recipe(newRecipe)

    await recipe.save()
    return { sucess: true, data: recipe, message: "Receta creada" }

  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// creo una funcion para ver el recetario completo
const getRecipes = async () => {
  try {
    const recipes = await Recipe.find()
    return { sucess: true, data: recipes, message: "Recetas en DB" }

  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// funcion para recuperar una receta por su id
const getRecipeById = async (id: string) => {
  try {
    const recipe = await Recipe.findById(id)

    if (!recipe) {
      return { sucess: false, message: "No existe la receta..." }
    } else {
      return { sucess: true, data: recipe, message: "Receta encontrada por id" }
    }
  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// funcion para recuperar receta por su nombre
const getRecipesByName = async (name: string) => {
  try {
    const recipes = await Recipe.find({ recipeName: { $regex: name, $options: "i" } })

    if (recipes.length === 0) {
      return { sucess: false, data: [], message: `No se encontraron resultados para "${name}"` }
    }

    return { sucess: true, data: recipes, message: "Lista de recetas filtradas por nombre" }

  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// funcion para actualizar la receta por su ID
const updateRecipe = async (id: string, body: object) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(id, body, { new: true })
    if (!updatedRecipe) {
      return { sucess: false, message: "No se encuentra la receta" }
    } else {
      return { sucess: true, data: updatedRecipe, message: "Receta actualizada" }
    }
  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

// borrar la receta por su ID
const deleteRecipe = async (id: string) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(id)
    if (!deletedRecipe) {
      return { sucess: false, message: "Receta no encontrada" }
    } else {
      return { sucess: true, data: deletedRecipe, message: "Receta borrada" }
    }
  } catch (error: any) {
    return { sucess: false, message: error.message }
  }
}

export { createRecipe, getRecipes, getRecipeById, getRecipesByName, updateRecipe, deleteRecipe }