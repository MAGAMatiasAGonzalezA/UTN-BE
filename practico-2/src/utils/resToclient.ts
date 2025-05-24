import { ResToClient } from "../interfaces/resToClientInterface";

const createResToClient = (
    success: boolean,
    status: number,
    message: string,
    data?: object | Object[]
) => {
    const r: ResToClient = {
        success, status, message
    };
    if (data) r.data = data
    return r
}

export { createResToClient }