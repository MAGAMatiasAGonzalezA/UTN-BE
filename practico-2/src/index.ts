import express from "express"
import { connectMongoDb } from "./config/mongo"
import { bookRoutes } from "./routes/bookRoute"

process.loadEnvFile()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use("/", bookRoutes)

app.listen(PORT, () => {
    console.log(`✔ Servidor en escucha en el uerto http://localhost:${PORT}`)
    connectMongoDb()
})

console.log("Hola Mafiu")