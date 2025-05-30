// Importo la interface para responder al cliente
import { ResToClient } from "../interfaces/resToClientInterface";

// Creo una variable que contenga que reciba los parametros de la respuesta y los devuelva en un objeto
const createResToClient = (
    // Parametros esperados
    success: boolean,
    status: number,
    message: string,
    data?: object | Object[]
) => {
    const r: ResToClient = {
        // Creación del objeto
        success, status, message
    };
    if (data) r.data = data
    return r
}

// Exporto la variable 
export { createResToClient }