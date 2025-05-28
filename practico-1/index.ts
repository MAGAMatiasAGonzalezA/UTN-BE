import { insertItem, getItems, getItemById, getItemsByName, updateItem, deleteItem } from "./controllers/inventoriControllers";
import { createUser, getUsers, getUserById, getUsersByName, updateUser, deleteUser } from "./controllers/usersControllers";
import { createRecipe, getRecipes, getRecipeById, getRecipesByName, updateRecipe, deleteRecipe } from "./controllers/recipesControllers"
import { insertPlaza, getplaza, getPlazaById, getPlazaByName, updatePlaza, deletePlaza } from "./controllers/plazaControllers";

console.log("hola")

// // *********** --- *********** 
// // CRUD DE SCHEMA USUARIOS 
// // *********** --- *********** 

// const userObject = {
//   // name: "Panzoti Sancho",
//   // email: "PanSancho@gmail.com",
//   // password: "pass",
//   // role: "user"
// }
// let nombre = "sancho"
// const idU = "6800fb0bc71c4e46e0884a04"

// const accionUser = ["createUser", "getUsers", "getUserById", "getUsersByName", "updateUser", "deleteUser"]

// const usuarios = async () => {
//   let respuesta;

//   switch (accionUser[3]) {
//     case "createUser":
//       respuesta = await createUser(userObject);
//       break;

//     case "getUsers":
//       respuesta = await getUsers();
//       break;

//     case "getUserById":
//       respuesta = await getUserById(idU);
//       break;

//     case "getUsersByName":
//       respuesta = await getUsersByName(nombre)
//       break;

//     case "updateUser":
//       respuesta = await updateUser(idU, userObject);
//       break;

//     case "deleteUser":
//       respuesta = await deleteUser(idU);
//       break;

//     default:
//       respuesta = { error: "Acción no valida..." }
//       break;
//   }
//   console.log(respuesta)
// };

// //usuarios();



// *********** --- *********** 
// CRUD DE SCHEMA INVENTARIO 
// *********** --- *********** 

const itemObject = {
  usuario: "Mafiu",
  item: "batata",
  categoria: "otros",
  cantidad: 60
}
let nombre = "Mafiu"
const idI = ""

const accionInventario = ["insertItem", "getItems", "getItemById", "getItemsByName", "updateItem", "deleteItem"]

const inventario = async () => {
  let respuesta;

  switch (accionInventario[0]) {
    case "insertItem":
      respuesta = await insertItem(itemObject);
      break;

    case "getItems":
      respuesta = await getItems();
      break;

    case "getItemById":
      respuesta = await getItemById(idI);
      break;

    case "getItemsByName":
      respuesta = await getItemsByName(nombre)
      break;

    case "updateItem":
      respuesta = await updateItem(idI, itemObject);
      break;

    case "deleteItem":
      respuesta = await deleteItem(idI);
      break;

    default:
      respuesta = { error: "Acción no valida..." }
      break;
  }
  console.log(respuesta)
};

inventario();



// // *********** --- *********** 
// // CRUD DE SCHEMA RECIPES 
// // *********** --- *********** 

// const recipeObjetc = {
//   recipeName: "pure zapallo",
//   usuario: "pepe",
//   cantIngred: 3,
//   ingredient: [{ item: "zapallo", cantidad: 1 }, { item: "azucar", cantidad: 1 }, { item: "agua", cantidad: 1 }],
//   porciones: 5,
//   procedure: "hace pure"
// }

// const idR = "680100b2521e19efec38988f"

// let accionRecetas = ["createRecipe", "getRecipes", "getRecipeById", "getRecipesByName", "updateRecipe", "deleteRecipe"]

// const recetas = async () => {
//   let respuesta;

//   switch (accionRecetas[0]) {
//     case "createRecipe":
//       respuesta = await createRecipe(recipeObjetc);
//       break;

//     case "getRecipes":
//       respuesta = await getRecipes();
//       break;

//     case "getRecipeById":
//       respuesta = await getRecipeById(idR);
//       break;

//     case "getRecipesByName":
//       respuesta = await getRecipesByName(nombre)
//       break;

//     case "updateRecipe":
//       respuesta = await updateRecipe(idR, recipeObjetc);
//       break;

//     case "deleteRecipe":
//       respuesta = await deleteRecipe(idR);
//       break;

//     default:
//       respuesta = { error: "Acción no valida..." }
//       break;
//   }
//   console.log(respuesta)
// };

// //recetas();


// // *********** --- *********** 
// // CRUD DE SCHEMA PLAZA
// // *********** --- *********** 

// const plazaObjetc = {
//   plazaName: "pure zapallo",
//   usuario: "pepe",
//   porciones: 3,
//   fecha: Date.now()
// }

// const idP = "6801025798186005806800f0"

// let accionPlaza = ["insertPlaza", "getplaza", "getPlazaById", "getPlazaByName", "updatePlaza", "deletePlaza"]

// const plaza = async () => {
//   let respuesta;

//   switch (accionPlaza[3]) {
//     case "insertPlaza":
//       respuesta = await insertPlaza(plazaObjetc);
//       break;

//     case "getplaza":
//       respuesta = await getplaza();
//       break;

//     case "getPlazaById":
//       respuesta = await getPlazaById(idP);
//       break;

//     case "getPlazaByName":
//       respuesta = await getPlazaByName(nombre)
//       break;

//     case "updatePlaza":
//       respuesta = await updatePlaza(idP, plazaObjetc);
//       break;

//     case "deletePlaza":
//       respuesta = await deletePlaza(idP);
//       break;

//     default:
//       respuesta = { error: "Acción no valida..." }
//       break;
//   }
//   console.log(respuesta)
// };

//plaza();

//-----------------------

// console.log("Iniciando test de funciones CRUD...");

// const nombre = "sancho";

// // ------------------ SCHEMAS ------------------

// const testCases = {
//   usuarios: {
//     object: {
//       name: "Panzoti Sancho",
//       email: "PanSancho@gmail.com",
//       password: "pass",
//       role: "user"
//     },
//     id: "6800fb0bc71c4e46e0884a04",
//     actions: {
//       create: createUser,
//       getAll: getUsers,
//       getById: getUserById,
//       getByName: getUsersByName,
//       update: updateUser,
//       delete: deleteUser
//     }
//   },

//   inventario: {
//     object: {
//       usuario: "Mafiu",
//       item: "batata",
//       categoria: "otros",
//       cantidad: 60
//     },
//     id: "67fd5862870fcf38e2a23cf8",
//     actions: {
//       create: insertItem,
//       getAll: getItems,
//       getById: getItemById,
//       getByName: getItemsByName,
//       update: updateItem,
//       delete: deleteItem
//     }
//   },

//   recetas: {
//     object: {
//       recipeName: "pure zapallo",
//       usuario: "pepe",
//       cantIngred: 3,
//       ingredient: [
//         { item: "zapallo", cantidad: 1 },
//         { item: "azucar", cantidad: 1 },
//         { item: "agua", cantidad: 1 }
//       ],
//       porciones: 5,
//       procedure: "hace pure"
//     },
//     id: "680100b2521e19efec38988f",
//     actions: {
//       create: createRecipe,
//       getAll: getRecipes,
//       getById: getRecipeById,
//       getByName: getRecipesByName,
//       update: updateRecipe,
//       delete: deleteRecipe
//     }
//   },

//   plaza: {
//     object: {
//       plazaName: "pure zapallo",
//       usuario: "pepe",
//       porciones: 3,
//       fecha: Date.now()
//     },
//     id: "6801025798186005806800f0",
//     actions: {
//       create: insertPlaza,
//       getAll: getplaza,
//       getById: getPlazaById,
//       getByName: getPlazaByName,
//       update: updatePlaza,
//       delete: deletePlaza
//     }
//   }
// };

// // ------------------ FUNCIONES GENERALES ------------------

// const ejecutarAccion = async (entidad: any, accion: any) => {
//   const { object, id, actions } = testCases[entidad];
//   let respuesta;

//   try {
//     switch (accion) {
//       case "create":
//         respuesta = await actions.create(object);
//         break;
//       case "getAll":
//         respuesta = await actions.getAll();
//         break;
//       case "getById":
//         respuesta = await actions.getById(id);
//         break;
//       case "getByName":
//         respuesta = await actions.getByName(nombre);
//         break;
//       case "update":
//         respuesta = await actions.update(id, object);
//         break;
//       case "delete":
//         respuesta = await actions.delete(id);
//         break;
//       default:
//         respuesta = { error: "Acción no válida" };
//     }
//   } catch (error: any) {
//     respuesta = { error: error.message };
//   }

//   console.log(`Resultado de ${entidad} - ${accion}:`, respuesta);
// };

// ------------------ EJECUTAR PRUEBAS ------------------
// Descomentar para probar

// ejecutarAccion("usuarios", "getByName");
// ejecutarAccion("inventario", "delete");
// ejecutarAccion("recetas", "create");
// ejecutarAccion("plaza", "getByName");