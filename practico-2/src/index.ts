// Importo "express"
import express from "express"
// Importo mi conexión
import { connectMongoDb } from "./config/mongo"
// Importo mi ruta
import { bookRoutes } from "./routes/bookRoute"
// Importo "cors"
import cors from "cors"

// Habilito el uso de las variables de entorno
process.loadEnvFile()

// Creo un puerto por medio de las variables de entorno y le asigno uno por defecto en caso de fallo
const PORT = process.env.PORT || 3000

// Creo una variable que haga uso de express
const app = express()

// Hago uso del metodo .json para convertir a formato objeto de JS a json en la solicitud en req.body
app.use(express.json())
// Hago us de (CORS) para el intercambio de recursos entre orígenes, permitiendo peticiones desde otros dominios
app.use(cors())

// Hago uso de la ruta marcando el endPoint como primer parametro y la ruta como segundo parametro
app.use("/api/books", bookRoutes)

// Habilito la escucha del servidor, el puerto como primer parametro y (muestro la conexión en la terminal) y habilitó la conexión a mongoose como segundo parametro 
app.listen(PORT, () => {
    console.log(`✔ Servidor en escucha en el uerto http://localhost:${PORT}`)
    connectMongoDb()
})

// Esto solo es una verificanción que muestro en la terminal
console.log("Hola Mafiu")