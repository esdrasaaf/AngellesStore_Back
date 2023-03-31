import { notFoundError, unauthorizedError } from "@/errors";
import authRepositories from "@/repositories/authRepository";
import historicRepositories from "@/repositories/historicRepository";
import productsRepositories from "@/repositories/productsRepository";
import { Historics } from "@prisma/client";

async function findManyHistoric(userId: number): Promise<Historics[]> {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    return await historicRepositories.getHistorics(userId);
}

async function insertUniqueHistoric(userId: number, productId: number): Promise<Historics> {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const product = await productsRepositories.getProductsById(productId);
    if (!product) throw notFoundError();

    const historicExist = await historicRepositories.checkIfHistoricExist(userId, productId);
    if (historicExist)  {
        return await historicRepositories.updateHistoric(historicExist.id);
    } else {
        return await historicRepositories.postHistorics(userId, productId);        
    }
}

const historicServices = {
    findManyHistoric,
    insertUniqueHistoric
}

export default historicServices;