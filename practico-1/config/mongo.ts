import mongoose from "mongoose"

// leo el archivo env
process.loadEnvFile();

// recupero el valor de la variable del archivo env
const URI_DB = process.env.URI_DB || ""

// creo la coneccion
const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB);
    //console.log("Conección a mogoose con exito");
  } catch (error) {
    console.log("Error al conectarce a mongoose", error);
  }

}

//exporto la conneccion
export { connectDB };