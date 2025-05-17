// Import la librería "mongoose" para realizar la conexión
import { connect } from "mongoose"

// Habilito el uso de las variables de entorno
process.loadEnvFile()

// Hago uso de la variable de entorno declarada en el archivo .env
const URI_DB = process.env.URI_DB || ""

// Creo la función para realizar la conexión
const connectMongoDb = async () => {
    try {
        await connect(URI_DB)
        console.log(`✔ Conectado a MongoDB con éxito`)
    } catch (error) {
        console.log(`❌ Error al conectarse a MongoDB`)
    }
}

// exporto la función para su posterior utilización
export { connectMongoDb }