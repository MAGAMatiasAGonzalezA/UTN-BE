import { Plaza } from "../models/plaza"

//CRUD -> create, read, update, delete

// metodo de retorno del CRUD
// {sucess: false, data: object | array, message: "plaza actualizada" | "No se encontro"}

// creo funcion para agregar a la plaza, utilizando el modelo Plaza
const insertPlaza = async (newPlaza: object) => {
    try {
        const plaza = new Plaza(newPlaza)

        await plaza.save()
        return { sucess: true, data: plaza, message: "Plaza registrada" }

    } catch (error: any) {
        return { sucess: false, message: error.message }
    }
}

// creo una funcion para ver la plza
const getplaza = async () => {
    try {
        const plaza = await Plaza.find()
        return { sucess: true, data: plaza, message: "Plaza registrada" }

    } catch (error: any) {
        return { sucess: false, message: error.message }
    }
}

// funcion para recuperar el estado de la plaza su id
const getPlazaById = async (id: string) => {
    try {
        const plaza = await Plaza.findById(id)

        if (!plaza) {
            return { sucess: false, message: "Ya lo despachaste..." }
        } else {
            return { sucess: true, data: plaza, message: "Plaza por id" }
        }
    } catch (error: any) {
        return { sucess: false, message: error.message }
    }
}

// funcion para recuperar listado de la plaza por su nombre
const getPlazaByName = async (name: string) => {
    try {
        const plaza = await Plaza.find({ plazaName: { $regex: name, $options: "i" } })

        if (plaza.length === 0) {
            return { sucess: false, data: [], message: `No se encontraron resultados para "${name}"` }
        }

        return { sucess: true, data: plaza, message: "Listado de la plaza filtrada por nombre" }

    } catch (error: any) {
        return { sucess: false, message: error.message }
    }
}

// funcion para actualizar la plaza por su ID
const updatePlaza = async (id: string, body: object) => {
    try {
        const updatedPlaza = await Plaza.findByIdAndUpdate(id, body, { new: true })
        if (!updatedPlaza) {
            return { sucess: false, message: "No se encuentra la plaza" }
        } else {
            return { sucess: true, data: updatedPlaza, message: "Plaza actualizada" }
        }
    } catch (error: any) {
        return { sucess: false, message: error.message }
    }
}

// borrar plaza por su ID
const deletePlaza = async (id: string) => {
    try {
        const deletePlaza = await Plaza.findByIdAndDelete(id)
        if (!deletePlaza) {
            return { sucess: false, message: "Receta no encontrada" }
        } else {
            return { sucess: true, data: deletePlaza, message: "Receta borrada" }
        }
    } catch (error: any) {
        return { sucess: false, message: error.message }
    }
}

export { insertPlaza, getplaza, getPlazaById, getPlazaByName, updatePlaza, deletePlaza }