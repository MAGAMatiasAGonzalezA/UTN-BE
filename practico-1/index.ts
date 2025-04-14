import { insertItem, getItems, getItemById, getItemByName, updateItem, deleteItem } from "./controllers/inventoriControllers";
import { createUser, getUsers, getUserById, getUserByName, updateUser, deleteUser } from "./controllers/usersControllers";
import { createRecipe, getRecipes, getRecipeById, getRecipeByName, updateRecipe, deleteRecipe } from "./controllers/recipesControllers"

console.log("hola")

// *********** --- *********** 
// CRUD DE SCHEMA USUARIOS 
// *********** --- *********** 

// const userObject = {
//   name: "claudita Actualiza",
//   email: "claudia@gmail.com",
//   password: "estoyaccediendo",
//   role: "user" | "admin"
// }

//createUser(userObject);
//getUsers();
//getUserById("")
//getUserByName("")
//updateUser("", userObject)
//deleteUser("")



// *********** --- *********** 
// CRUD DE SCHEMA INVENTARIO 
// *********** --- *********** 

// const itemObject = {
//   usuario: "pepe",
//   item: "lechuga",
//   categoria: "producHorticolas",
//   cantidad: 138
// }

//insertItem(itemObject);
//getItems();
//getItemById("");
//getItemByName("");
//updateItem("", itemObject)
//deleteItem("")




// *********** --- *********** 
// CRUD DE SCHEMA RECIPES 
// *********** --- *********** 

// const recipeObjetc = {
//   recipeName: "",
//   usuario: "",
//   cantIngred: 3,
//   ingredient: [{ item: "", cantidad: 1 }, { item: "", cantidad: 1 }, { item: "", cantidad: 1 }],
//   procedure: ""
// }

//createRecipe(recipeObjetc);
//getRecipes();
//getRecipeById("");
//getRecipeByName("");
//updateRecipe("", recipeObjetc)
//deleteRecipe("")