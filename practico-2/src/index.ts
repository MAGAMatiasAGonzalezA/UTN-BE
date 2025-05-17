import express from "express"
import { connectMongoDb } from "./config/mongo"
process.loadEnvFile()

const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
    console.log(`✔ Servidor en escucha en el uerto http://localhost:${PORT}`)
    connectMongoDb()
})

console.log("Hola Mafiu")