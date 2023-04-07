import { notFoundError, unauthorizedError, badRequestError } from "@/errors";
import authRepositories from "@/repositories/authRepository";
import productsRepositories from "@/repositories/productsRepository";
import savedRepository, { SavedProductsWithProduct } from "@/repositories/savesRepository";
import { SavedProducts } from "@prisma/client";

async function findManySaveds(userId: number): Promise<SavedProducts[]> {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const savedProducts = await savedRepository.getSaveds(userId);
    if (savedProducts.length === 0) throw notFoundError();

    return savedProducts
}

async function createSavedProduct(userId: number, productId: number): Promise<SavedProductsWithProduct | "delete"> {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const product = await productsRepositories.getProductsById(productId);
    if (!product) throw badRequestError();

    const savedProductsExist = await savedRepository.getUniqueSaved(userId, productId);
    if (savedProductsExist.length === 0) return await savedRepository.postSaved(userId, productId);

    await savedRepository.deleteSaved(savedProductsExist[0].id);
    
    return "delete"
}

const savedServices = {
    findManySaveds,
    createSavedProduct
}

export default savedServices;