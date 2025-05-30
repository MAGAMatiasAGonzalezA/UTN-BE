// Creo una inteface para la respuesta al client estandarizada
interface ResToClient {
    success: boolean
    status: number
    message: string
    data?: object | Object[]
}

// Exporto la interface
export { ResToClient }